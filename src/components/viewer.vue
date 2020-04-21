<template>
  <div>
    <h1 :class="{'is-top': !!info.top}">{{title}}</h1>
    <div class="base-info">
      <span>
        最后编辑时间: {{content.time}}
      </span>
      <span :id="'/' + runtime.repository + $route.path" class="leancloud_visitors">
        <em class="post-meta-item-text">阅读量: </em>
        <i class="leancloud-visitors-count">-</i>
      </span>
      <template v-if="categories.length">
        <el-divider direction="vertical">
        </el-divider>
        <span>
          分类: 
          <el-tag size="mini" type="info" v-for="(vo, index) in categories" :key="index">
            {{vo}}
          </el-tag>
        </span>
      </template>
    </div>
    <v-markdown
      class="md-editor-preview markdown-body"
      ref="markdown"
      toc
      toc-anchor-link-symbol
      :source="source"
      :watches="watches"
    ></v-markdown>
    <el-divider>
    <p class="text-right">
      <el-link type="primary" :href="runtime.remotePath + content.path.replace(/\\/g, '/')" target="editContent">参与编辑此页 <i class="iconfont icon-github"></i></el-link>
    </p>
    </el-divider>
  </div>
</template>
<script lang="ts">
import { runtime } from '@/config'
import { extract, parseConfig } from '@/utils/yaml-md'
import markdown from './markdown.vue'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({
  components: {
    'v-markdown': markdown
  }
})
export default class Viewer extends Vue {
  public source: string = ''
  public runtime = runtime
  public watches = ['source', 'show', 'toc']
  @Prop({
    type: Object,
    required: false,
    default() {
      return {}
    }
  })
  public content!: anyObject
  @Prop({
    type: String,
    required: false,
    default: ''
  })
  public title!: string
  get newTitle() {
    return this.title || this.$route.params.title
  }
  @Watch('newTitle', { immediate: true })
  public onTitleChange(title: string, oldTitle: string) {
    if (title) {
      this.$store
        .dispatch('mdFiles', {
          path: this.content.path
        })
        .then(source => {
          this.source = source
        })
    }
  }
  get info() {
    const res = extract(this.source) as anyObject
    return parseConfig(res.yaml)
  }
  get categories() {
    const categories = this.info.categories || []
    return typeof categories === 'string' ? [categories] : categories
  }
  protected mounted() {
    this.$bus.$on('markdownsource', (source: string) => {
      this.source = source
    })
  }
  protected destroyed() {
    this.$bus.$off('markdownsource')
  }
}
</script>
<style lang="scss" scoped>
.page-markdown {
  width: $markdown_width;
  margin: 0 auto;
}
h1 {
  line-height: 60px;
  font-size: 28px;
  border-bottom: 1px dashed #eee;
  &.is-top::before{
    content: "顶";
    margin-right: 5px;
    color: #fff;
    background: #afa9a9;
    padding: 2px 4px;
    vertical-align: bottom;
    font-size: 22px;
    border-radius: 7px;
  }
}
.base-info {
  padding: 10px 0;
  line-height: 22px;
  font-size: 13px;
  color: #ccc;
  .el-tag{
    margin-left: 5px;
  }
}
.el-divider.el-divider--horizontal{
  margin: 30px 0;
}
</style>