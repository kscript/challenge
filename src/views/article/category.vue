<template>
  <v-category  class="view-article_category"  @changeKey="changeKey" :activeItem="title" :options="options">
    <template slot-scope="scope">
     <el-aside width="0px">
       <!-- 
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
      </el-table> -->
    </el-aside>
    <router-view v-if="scope.data.title"></router-view>
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
export default class ArticleCategory extends Vue {
  public options: anyObject = {
    mapKey: 'title',
    name: 'article',
    action: `category`,
    contentRouteName: 'article_category_content',
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
::v-deep .el-table__row.selected {
  background: #f5f7fa;
}
</style>