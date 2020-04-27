<template>
  <v-category class="view-question_category" @toggleLink="toggleLink" :activeItem="activeItem" :options="options">
    <template slot-scope="scope">
    <el-aside class="animated fadeIn">
      <el-table 
        :data="scope.data.category"
        :show-header="false"
        :row-class-name="tableRowClassName"
        @row-click="toggleLink"
        v-show="scope.data.category.length"
      >
        <el-table-column>
          <template slot-scope="scope">
            {{ scope.row.title }}
          </template>
        </el-table-column>
      </el-table>
    </el-aside>
    <router-view v-if="scope.data.title" class="animated" :class="{fadeIn: title}"></router-view>
    <el-backtop target=".view-question_category" :bottom="100">
      <i class="icon el-icon-arrow-up"></i>
    </el-backtop>
    </template>
  </v-category>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import category from '@/components/category.vue'
@Component({
  components: {
    'v-category': category
  }
})
export default class QuestionCategory extends Vue {
  public activeItem: anyObject = {}
  public options: anyObject = {
    mapKey: 'title',
    type: 'question',
    action: `category`,
    contentRouteName: 'question_category_content',
    routeview: false
  }
  public title = ''
  public tableRowClassName({ row }: { row: anyObject }) {
    return this.title === row.title ? 'selected' : ''
  }
  public toggleLink(row: anyObject) {
    this.title = ''
    this.$nextTick(() => {
      this.activeItem = row
      this.title = row.title
    })
  }
}
</script>
<style lang="scss" scoped>
.view-question_category {
  .el-aside {
    padding-top: 24px;
  }
  .el-main {
    padding-top: 10px;
  }
}
::v-deep .el-table__row.selected {
  background: #f5f7fa;
}
</style>