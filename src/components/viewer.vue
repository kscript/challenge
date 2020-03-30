<template>
  <v-markdown
    class="md-editor-preview markdown-body"
    ref="markdown"
    toc
    toc-anchor-link-symbol
    :source="source"
    :watches="watches"
  ></v-markdown>
</template>
<script lang="ts">
import markdown from './markdown.vue'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({
  components: {
    'v-markdown': markdown
  }
})
export default class Viewer extends Vue {
  public source: string = ''
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
        .dispatch('question', [this.content])
        .then(source => {
          this.source = source
        })
    }
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
</style>