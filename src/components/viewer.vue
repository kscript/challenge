<template>
  <div class="page-markdown">
    <v-vuemarkdown
      class="md-editor-preview markdown-body"
      ref="markdown"
      toc
      toc-anchor-link-symbol
      :source="content"
      :watches="watches"
      @rendered="rendered"
    ></v-vuemarkdown>
  </div>
</template>
<script>
import 'github-markdown-css'
import 'prismjs'
import 'prismjs/themes/prism.css'
import VueMarkdown from 'vue-markdown'

export default {
  data() {
    return {
      watches: ['source', 'show', 'toc'],
      content: ''
    }
  },
  components: {
    'v-vuemarkdown': VueMarkdown
  },
  methods: {
    rendered() {
      this.$nextTick(() => {
        window.scrollTo(0, 0)
        Prism.highlightAll()
      })
    }
  },
  destroyed() {
    this.$bus.$off('markdownContent')
  },
  mounted() {
    this.$bus.$on('markdownContent', content => {
      this.content = content
    })
    this.$store.dispatch('question', this.$route.params.title).then(data => {
      this.content = data
    })
    Prism.highlightAll()
  }
}
</script>

