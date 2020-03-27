<template>
  <v-vuemarkdown
    class="md-editor-preview markdown-body"
    ref="markdown"
    toc
    toc-anchor-link-symbol
    :source="sourceInfo.markdown"
    :watches="watches"
    @rendered="rendered"
  ></v-vuemarkdown>
</template>
<script lang="ts">
import 'github-markdown-css'
import 'prismjs'
import 'prismjs/themes/prism.css'
import { extract, parseConfig } from '@/utils/yaml-md'
import { Component, Vue, Prop } from 'vue-property-decorator'
// @ts-ignore
import VueMarkdown from 'vue-markdown'
@Component({
  components: {
    'v-vuemarkdown': VueMarkdown
  }
})
export default class Markdown extends Vue {
  @Prop({
    type: String,
    required: false,
    default: ''
  })
  public source!: string
  @Prop({
    type: Array,
    required: false,
    default() {
        return ['source', 'show', 'toc']
    }
  })
  public watches!: string[]
  get sourceInfo() {
    const res = extract(this.source) as anyObject<string>
    const config = parseConfig(res.yaml)
    return { ...res, config }
  }
  public rendered() {
    this.$nextTick(() => {
      window.scrollTo(0, 0)
      // @ts-ignore
      Prism.highlightAll()
    })
  }
  protected mounted() {
    // @ts-ignore
    Prism.highlightAll()
  }
}
</script>
<style lang="scss" scoped>
.page-markdown {
  width: $markdown_width;
  margin: 0 auto;
}
</style>