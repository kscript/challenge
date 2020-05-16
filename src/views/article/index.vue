<template>
  <el-container class="view-article" direction="vertical">
    <el-main
      v-if="this.$route.name === name"
      v-infinite-scroll="load"
      infinite-scroll-immediate
      infinite-scroll-distance="50"
    >
      <div class="fix-container">
        <ul class="article-list infinite-list">
          <li v-for="vo in timelineData" :key="vo.title">
            <div class="animated zoomInLeft">
              <router-link
                :to="{
              name: 'article_category_content',
              params: {
                name: 'article',
                title: vo.title,
                category: vo.category[0],
                content: vo
              }
            }"
              >
                <div class="title">{{vo.title}}</div>
                <div class="time">{{vo.time}}</div>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <el-backtop target=".view-article .el-main" :bottom="100">
        <i class="icon el-icon-arrow-up"></i>
      </el-backtop>
    </el-main>
    <router-view v-else-if="isInit"></router-view>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
})
export default class Article extends Vue {
  public name = 'article'
  public timeline: anyObject[] = []
  public isInit = false
  public categorys: anyObject[] = []
  public pages: anyObject = {
    next: 1,
    size: 10,
    total: 0,
    layout: 'prev, pager, next'
  }
  get timelineData() {
    return this.timeline.reduce((prev: anyObject, curr: anyObject) => {
      return prev.concat(curr.data || [])
    }, [])
  }
  public formatTime(date: number) {
    const time = new Date(date)
    return [
      time.getFullYear(),
      time.getMonth() + 1,
      time.getDate()
    ].join('/')
  }
  public async getCategorys() {
    this.categorys = await this.$store.dispatch('categorys', {
      name: this.name
    })
  }
  public async getTimeline(options: anyObject = {}) {
    return await this.$store.dispatch('timeline', Object.assign({
      name: 'article'
    }, options))
  }
  public async load() {
    const pageno = this.pages.next
    if (pageno === 1 || (pageno - 1) * this.pages.size < this.pages.total) {
      this.pages.next++
      const result = await this.getTimeline({
        pageno
      })
      this.pages.total = result.total
      this.pages.size = result.size
      this.$set(this.timeline, pageno, result)
    }
  }
  protected async mounted() {
    await this.getCategorys()
    await this.load()
    this.isInit = true
  }
}
</script>
<style lang="scss" scoped>
.el-container{
  height: 100%;
}
.article-list {
  padding: 10px 0px;
  li {
    border-bottom: 1px dashed #eee;
    &:last-child {
      border-bottom: 0;
    }
    .title {
      padding-top: 20px;
      color: #555;
      font-size: 18px;
      margin-bottom: 6px;
    }
    .time {
      color: #aaa;
      font-size: 13px;
      padding-bottom: 20px;
    }
  }
}
</style>