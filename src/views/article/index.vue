<template>
  <el-main class="view-article" direction="vertical">
    <div class="fix-conatianer" v-if="this.$route.name === name">
      <el-timeline>
        <el-timeline-item  v-for="vo in timeline" :key="vo.title" :timestamp="formatTime(vo.time)" hide-timestamp placement="top">
          <router-link :to="{
          name: 'article_category_content',
          params: {
            name: 'article',
            title: vo.title,
            category: vo.category[0],
            content: vo
          }
        }">
          <el-card @click="viewContent(vo)">
            <h4>{{vo.title}}</h4>
            <p>{{formatFullTime(vo.time, true)}}</p>
          </el-card>
          </router-link>
        </el-timeline-item>
      </el-timeline>
    </div>
    <router-view v-else></router-view>
  </el-main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
})
export default class Article extends Vue {
  public name = 'article'
  public timeline = []
  public categorys: anyObject[] = []
  public formatTime(date: number) {
    const time = new Date(date)
    return [
      time.getFullYear(),
      time.getMonth() + 1,
      time.getDate()
    ].join('/')
  }
  public formatFullTime(date: number) {
    const time = new Date(date)
    return [
      time.getFullYear(),
      time.getMonth() + 1,
      time.getDate()
    ].join('-') + ' ' + [
      time.getHours(),
      time.getMinutes(),
      time.getSeconds()
    ].join(':')
  }
  public async getCategorys() {
    this.categorys = await this.$store.dispatch('categorys', {
      name: this.name
    })
  }
  public async getTimeline() {
    return this.timeline = await this.$store.dispatch('timeline', {
      name: this.name
    })
  }
  protected async mounted() {
    await this.getTimeline()
    await this.getCategorys()
  }
}
</script>
<style lang="scss" scoped>
.el-container{
  height: 100%;
}

.el-timeline {
  max-width: 720px;
  padding: 30px 0;
  text-align: left;
  h4{
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>