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
  watch: {
    $route() {
      this.parseHash()
    }
  },
  methods: {
    parseHash() {
      const hash = (this.$route.hash || '').replace(/^#*/, '').split('#')
      if (hash.length) {
        this.$store.dispatch('server', hash[0]).then(data => {
          this.content = data
        })
      }
    },
    rendered() {
      this.$nextTick(() => {
        window.scrollTo(0, 0)
        Prism.highlightAll()
      })
    }
  },
  mounted() {
    this.parseHash()
    this.$bus.$off('markdownContent').$on('markdownContent', content => {
      this.content = content
    })
    Prism.highlightAll()
  }
}
</script>

