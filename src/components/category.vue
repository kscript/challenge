<template>
  <el-container>
    <slot :data="slotData"></slot>
    <router-view v-if="options.routeview && title"></router-view>
  </el-container>
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
        action: 'category',
        contentRouteName: 'question_category_content',
        routeview: false
      }
    }
  })
  public options!: anyObject
  @Prop({
    type: String,
    required: false,
    default: ''
  })
  public activeItem!: string
  @Watch('activeItem', { immediate: false })
  public onActiveItemChange() {
    if (
      this.categoryMap[this.activeItem]
    ) {
      this.selectItem(this.categoryMap[this.activeItem])
    }
  }
  public selectItem(row: anyObject) {
    const mapKey = this.options.mapKey
    this.title = row[mapKey]
    const params = Object.assign({}, this.$route.params, {
      [mapKey]: row[mapKey]
    })
    this.$emit('changeKey', row[mapKey])
    this.$set(this.slotData, mapKey, row[mapKey])
    if (params.category !== this.params.category || params[mapKey] !== this.params[mapKey]) {
      this.params = params
      this.$router.push({
        name: this.options.contentRouteName,
        params: Object.assign({}, params, {
          content: row
        })
      })
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
    this.$store.dispatch(this.options.action, params.category).then((category) => {
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