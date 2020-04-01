<template>
  <v-category class="view-article_category"  @toggleLink="toggleLink" :activeItem="activeItem" :options="options">
    <template slot-scope="scope">
     <el-aside width="0px">
    </el-aside>
    <router-view v-if="scope.data.title" @toggleLink="toggleLink"></router-view>
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
  public activeItem:anyObject = {}
  public title = ''
  public toggleLink(activeItem: anyObject) {
    this.activeItem = activeItem
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-table__row.selected {
  background: #f5f7fa;
}
</style>