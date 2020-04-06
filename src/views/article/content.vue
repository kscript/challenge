<template>
  <el-main class="view-article_content" v-if="title">
    <h1>{{title}}</h1>
    <v-viewer class="content-container" :title="title" :content="content"></v-viewer>
    <ul class="links">
      <li  v-for="(vo, index) in link" :key="vo.path" >
        <span v-show="!index">
          上一篇: 
        </span>
        <span v-show="index">
          下一篇: 
        </span>
        <el-link type="primary" v-if="vo.path" @click="toggleLink(vo)">
          {{vo.title}}
        </el-link>
        <span v-else>已经是{{link[0].title ? '最后' : '第'}}一篇了</span>
      </li>
    </ul>
    <v-valine class="valine-container" :options="options"></v-valine>
  </el-main>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import valine from '@/components/valine.vue'
import viewer from '@/components/viewer.vue'
@Component({
  components: {
    'v-valine': valine,
    'v-viewer': viewer
  }
})
export default class ArticleContent extends Vue {
  public params: anyObject = {}
  public title = ''
  public content: anyObject = {}
  public link: string[] = []
  @Watch('$route.params', { immediate: false })
  public onParamesChange() {
    const params: anyObject = this.$route.params
    this.content = params.content instanceof Object ? params.content : JSON.parse(params.content)
    this.title = params.title
    this.$nextTick(() => {
      if (params.title !== this.params.title || params.category !== this.params.category) {
        this.params = params
        this.$bus.$emit('valineUpdate', () => {
          this.setToggleLink()
        })
      }
    })
  }
  public toggleLink(vo: anyObject) {
    this.$emit('toggleLink', vo)
  }
  public async setToggleLink() {
    this.link = await this.$store.dispatch('toggleLinks', {
      name: 'article',
      path: this.content.path
    })
  }
  protected mounted() {
    this.$nextTick(() => {
      this.onParamesChange()
    })
  }
}
</script>
<style lang="scss" scoped>
.view-article_content{
  padding-top: 20px;
  h1 {
    font-size: 28px;
    line-height: 60px;
    border-bottom: 1px dashed #eee;
  }
  .links {
    overflow: hidden;
    li {
      padding: 5px;
    }
  }
}
.content-container {
  padding: 20px 0;
}
.valine-container {
  padding-top: 50px;
}
</style>
