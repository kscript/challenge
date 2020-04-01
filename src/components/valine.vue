<template>
  <div class="valine-content">
    <div id="valine"></div>
  </div>
</template>
<script lang="ts">
// @ts-ignore
import AV = require('leancloud-storage')
// @ts-ignore
import Valine from 'valine'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({})
export default class Viewer extends Vue {
  public va: anyObject | null = null
  public defaultOptions = {
      el: '#valine',
      appId: '59FOptHpcNJMwYdlLXwYBelP-gzGzoHsz',
      appKey: 'lhVI2ym7wgSKo6O7AYGm8wzf',
      notify: false,
      verify: false,
      avatar: 'mp',
      placeholder: '发表评论'
    }
  @Prop({
    type: Object,
    required: false,
    default() {
      return {}
    }
  })
  public options!: anyObject
  public createInstance() {
    const options = Object.assign({}, this.defaultOptions, this.options)
    return new Valine(options)
  }
  public valineUpdate(done?: () => void) {
    if (this.va && typeof this.va.setPath !== 'undefined') {
      this.va.setPath(location.pathname.replace(/index\.html?$/, ''))
    } else {
      // @ts-ignore
      if (window.VA) {
        // @ts-ignore
        window.VA.setPath(location.pathname.replace(/index\.html?$/, ''))
      }
    }
    this.$nextTick(() => {
      this.va = this.createInstance()
      if (done) {
        done()
      }
    })
  }
  protected destroyed() {
    this.$bus.$off('valineUpdate', this.valineUpdate)
  }
  protected mounted() {
    this.$bus.$on('valineUpdate', this.valineUpdate)
  }
}
</script>
<style lang="scss" scoped>
.valine-content {
  padding-top: 100px;
  max-width: 800px;
}
</style>