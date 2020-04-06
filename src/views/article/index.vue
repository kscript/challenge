<template>
  <el-container class="view-article" direction="vertical">
    <el-main v-if="this.$route.name === name">
    <div class="fix-container">
      <el-timeline>
        <el-timeline-item  v-for="vo in timeline" :key="vo.title" :timestamp="vo.time" hide-timestamp placement="top">
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
            <p>{{vo.time}}</p>
          </el-card>
          </router-link>
        </el-timeline-item>
      </el-timeline>
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
  public timeline = []
  public isInit = false
  public categorys: anyObject[] = []
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
  public async getTimeline() {
    this.timeline = await this.$store.dispatch('timeline', {
      name: this.name
    })
    return this.timeline
  }
  protected async mounted() {
    await this.getTimeline()
    await this.getCategorys()
    this.isInit = true
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