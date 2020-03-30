<template>
  <el-main>
    <el-container>
      <el-aside>
        <el-table 
          :data="category"
          :show-header="false"
          :row-class-name="tableRowClassName"
          @row-click="selectTitle"
          v-show="category.length"
        >
          <el-table-column>
            <template slot-scope="scope">
              {{ scope.row.title }}
            </template>
          </el-table-column>
        </el-table>
      </el-aside>
      <router-view v-if="title"></router-view>
    </el-container>
  </el-main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import viewer from '@/components/viewer.vue'
@Component({
  components: {
    'v-viewer': viewer
  }
})
export default class Category extends Vue {
  public options: anyObject = {}
  public categoryMap: anyObject = {}
  public category: anyObject[] = []
  public question = {}
  public title = ''
  public rowKey = ''
  public params: anyObject = {}
  public selectTitle(row: anyObject) {
    this.title = row.title
    this.question = row
    const params = Object.assign({}, this.$route.params, {
      title: row.title
    })
    // const params = {
    //   category: this.$route.params.category,
    //   title: this.title,
    //   question: JSON.stringify(row)
    // }
    if (params.category !== this.params.category || params.title !== this.params.title) {
      this.params = params
      this.$router.push({
        name: 'question_category_title',
        params: Object.assign({}, params, {
          question: this.question
        })
      })
    }
  }
  public updateCategoryMap() {
    this.category.forEach(item => {
      this.categoryMap[item.title] = item
    })
  }
  public tableRowClassName({ row }: { row: anyObject }) {
    return this.title === row.title ? 'selected' : ''
  }
  protected mounted() {
    const params = this.$route.params
    this.$store.dispatch('category', params.category).then((category) => {
      this.category = category
      this.updateCategoryMap()
      if (category.length) {
        const current = this.categoryMap[params.title] || category[0]
        this.question = current
        this.selectTitle(current)
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