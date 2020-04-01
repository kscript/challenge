<template>
  <el-main ref="main">
    <el-container>
      <slot :data="slotData"></slot>
      <router-view v-if="options.routeview && activeItem.title"></router-view>
    </el-container>
  </el-main>
</template>
<script lang="ts">

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({
})
export default class CategoryCommon extends Vue {
  public title = ''
  public params: anyObject = {}
  public category: anyObject[] = []
  public categoryMap: anyObject = {}
  public slotData = {
    category: []
  }
  @Prop({
    type: Object,
    required: false,
    default() {
      return {
        mapKey: 'title',
        name: 'question',
        action: 'category',
        contentRouteName: 'question_category_content',
        routeview: false
      }
    }
  })
  public options!: anyObject
  @Prop({
    type: Object,
    required: false,
    default: {}
  })
  public activeItem!: anyObject
  @Watch('activeItem', { deep: true, immediate: false })
  public async onActiveItemChange() {
    if (
      this.activeItem.title
    ) {
      await this.selectItem(this.categoryMap[this.activeItem.title] || this.activeItem)
    }
  }
  public async selectItem(row: anyObject) {
    const mapKey = this.options.mapKey
    this.title = row[mapKey]
    const params = Object.assign({}, this.$route.params, {
      [mapKey]: row[mapKey]
    })
    this.$set(this.slotData, mapKey, row[mapKey])
    this.$emit('toggleLink', row)
    if (params.category !== this.params.category || params[mapKey] !== this.params[mapKey]) {
      this.params = params
      this.$router.push({
        name: this.options.contentRouteName,
        params: Object.assign({}, params, {
          content: row
        })
      }).catch(err => {})
      const main = this.$refs.main as Vue
      main.$el.scrollTop = 0
    }
  }
  public updateCategoryMap() {
    this.category.forEach(item => {
      this.categoryMap[item[this.options.mapKey]] = item
    })
  }
  protected mounted() {
    this.$set(this.slotData, this.options.mapKey, '')
    const params = this.$route.params
    this.$store.dispatch(this.options.action, {
      name: this.options.name,
      category: params.category
    }).then((category) => {
      this.category = category
      this.$set(this.slotData, 'category', category)
      this.updateCategoryMap()
      if (category.length) {
        const current = this.categoryMap[params[this.options.mapKey]] || category[0]
        this.selectItem(current)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  width: 1200px;
  margin: 0 auto;
  ::v-deep .el-table__row.selected {
    background: #f5f7fa;
  }
}
</style>