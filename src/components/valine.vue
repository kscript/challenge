<template>
  <div id="valine"></div>
</template>
<script lang="ts">
// @ts-ignore
import AV = require('leancloud-storage')
// @ts-ignore
import Valine from 'valine'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({})
export default class Viewer extends Vue {
  public va: anyObject = {}
  @Prop({
    type: Object,
    required: false,
    default() {
      return {}
    }
  })
  public options!: anyObject
  public createInstance() {
    return new Valine(Object.assign({
      el: '#valine',
      appId: '59FOptHpcNJMwYdlLXwYBelP-gzGzoHsz',
      appKey: 'lhVI2ym7wgSKo6O7AYGm8wzf',
      notify: false,
      verify: false,
      avatar: 'mp',
      placeholder: '发表评论'
    }, this.options))
  }
  public valineUpdate() {
    if (typeof this.va.setPath !== 'undefined') {
      this.va.setPath(location.pathname.replace(/index\.html?$/, ''))
    }
    this.va = this.createInstance()
  }
  protected mounted() {
    this.$bus.$on('valineUpdate', this.valineUpdate)
  }
}
</script>