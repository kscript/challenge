<template>
  <div class="valine-content" v-if="active === num">
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
  public va: anyObject = {}
  public num = 0
  public active = 0
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
    this.num = Math.floor(Math.random() * Math.random() * 1e9)
    return Valine(Object.assign({}, this.defaultOptions, this.options))
  }
  public valineUpdate() {
    if (typeof this.va.setPath !== 'undefined') {
      this.va.setPath(location.pathname.replace(/index\.html?$/, ''))
      // this.va.init(Object.assign({}, this.defaultOptions, this.options))
    }
    this.va = this.createInstance()
    this.active = this.num
  }
  protected destroyed() {
    this.$bus.$off('valineUpdate', this.valineUpdate)
  }
  protected mounted() {
    this.$bus.$on('valineUpdate', this.valineUpdate)
  }
}
</script>