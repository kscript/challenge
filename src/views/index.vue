<template>
  <el-container class="view-index" direction="vertical">
    <v-header />
    <el-container v-if="$route.name === name">
    <el-main>
      <div class="fix-container">
      <el-card class="box-card question-list" shadow="never">
        <h3 slot="header" class="card-title clearfix">最新更新面试题</h3>
        <el-table :data="questionsData" :show-header="false" 
        @row-click="cliclQuestionLink"
        >
          <el-table-column prop="title">
          </el-table-column>
          <el-table-column width="80">
            <template slot-scope="scope">
              <div  class="text-right">
                <el-tag size="mini">
                  {{scope.row.category[0]}}
                </el-tag>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <el-card class="box-card article-list" shadow="never">
        <h3 slot="header" class="card-title clearfix">最新更新文章</h3>
        <el-table :data="articlesData" :show-header="false"
          @row-click="cliclArticleLink"
        >
          <el-table-column>
            <template slot-scope="scope">
              {{scope.row.title}}
              <div>
                {{scope.row.time}}
              </div>
            </template>
          </el-table-column>
          <el-table-column width="80">
            <template slot-scope="scope">
              <div  class="text-right">
                <el-tag size="mini">
                  {{scope.row.category[0]}}
                </el-tag>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="text-right"
          small
          hide-on-single-page
          @current-change="pageChange"
          :page-size="pages.size"
          :layout="pages.layout"
          :total="pages.total">
        </el-pagination>
      </el-card>
      </div>
    </el-main>
    </el-container>
    <router-view v-else></router-view>
    <v-footer />
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

@Component({
  components: {
    'v-header': header,
    'v-footer': footer
  }
})
export default class Index extends Vue {
  public name = 'index'
  public questions: anyObject = {}
  public articles: anyObject = {}
  public pages: anyObject = {
    size: 10,
    total: 0,
    layout: 'prev, pager, next'
  }
  get questionsData() {
    return Array.isArray(this.questions.data) ? this.questions.data : []
  }
  get articlesData() {
    return Array.isArray(this.articles.data) ? this.articles.data : []
  }
  @Watch('$route.name', { immediate: true })
  public async routeNameChange() {
    if (this.$route.name === this.name) {
      this.questions = await this.getQuestionList()
      this.articles = await this.getArticleList()
      this.pages.total = this.articles.total
    }
  }
  public async pageChange(pageno: number) {
    this.articles = await this.getArticleList({
      pageno
    })
  }
  public async getQuestionList() {
    return this.$store.dispatch('timeline', {
      name: 'question'
    })
  }
  public async getArticleList(options: anyObject = {}) {
    return this.$store.dispatch('timeline', Object.assign({
      name: 'article'
    }, options))
  }
  public cliclArticleLink(row: anyObject) {
    this.$router.push({
      name: 'article_category_content',
      params: {
        category: row.category[0],
        title: row.title,
        content: JSON.stringify(row)
      }
    })
  }
  public cliclQuestionLink(row: anyObject) {
    this.$router.push({
      name: 'question_category_content',
      params: {
        category: row.category[0],
        title: row.title,
        content: JSON.stringify(row)
      }
    })
  }
  protected async mounted() {
    // if (this.$route.name === this.name) {
    //   this.questions = await this.getQuestionList()
    //   this.articles = await this.getArticleList()
    // }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-main {
  padding: 0;
  .fix-container {
    display: table;
    height: 100%;
  }
  .el-card__body, .el-table{
    &::before {
      display: none;
    }
  }
  ::v-deep .el-card{
    border: 0;
    padding: 0 15px 15px;
    display: table-cell;
    &.question-list {
      width: 320px;
    }
    &.article-list{
      padding-bottom: 50px;
      position: relative;
      min-height: 100%;
      .el-pagination{
        position: absolute;
        right: 0;
        bottom: 10px;
      }
    }
    .el-card__header {
      padding: 20px 10px;
     } 
    .el-card__body {
      padding: 0;
    }
    .card-title {
      font-size: 18px;
      color: #548bb6;
    }
  }
  ::v-deep .el-table__row{
    &:hover {
      cursor: pointer;
    }
    &:last-child{
      td{
        border-bottom: 0;
      }
    }
    // .cell {
    //   padding: 0 5px;
    // }
  }
}

</style>
