<template>
  <el-main>
    <el-container>
      <v-category @changeKey="changeKey" :activeItem="title" :options="options">
        <template slot-scope="scope">
        <el-aside>
          <el-table 
            :data="scope.data.category"
            :show-header="false"
            :row-class-name="tableRowClassName"
            @row-click="selectTitle"
            v-show="scope.data.category.length"
          >
            <el-table-column>
              <template slot-scope="scope">
                {{ scope.row.title }}
              </template>
            </el-table-column>
          </el-table>
        </el-aside>
        <router-view v-if="scope.data.title"></router-view>
        </template>
      </v-category>
    </el-container>
  </el-main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import viewer from '@/components/viewer.vue'
import category from '@/components/category.vue'
@Component({
  components: {
    'v-category': category,
    'v-viewer': viewer
  }
})
export default class Category extends Vue {
  public options: anyObject = {
    mapKey: 'title',
    action: 'category',
    contentRouteName: 'question_category_title',
    routeview: false
  }
  public title = ''
  public tableRowClassName({ row }: { row: anyObject }) {
    return this.title === row.title ? 'selected' : ''
  }
  public selectTitle(row: anyObject) {
    this.title = row.title
  }
  public changeKey(title: string) {
    this.title = title
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