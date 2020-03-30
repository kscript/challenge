<template>
  <el-main :class="'view-' + $route.name" v-if="title">
    <v-viewer :title="title" :content="content"></v-viewer>
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
  public content = {}
  @Watch('$route.params', { immediate: false })
  public onParamesChange() {
    const params = this.$route.params
    this.content = params.content
    this.title = params.title
    this.$nextTick(() => {
      if (params.title !== this.params.title || params.category !== this.params.category) {
        this.params = params
        this.$bus.$emit('valineUpdate')
      }
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
.el-main {
  padding-top: 0;
}

.valine-container {
  margin-top: 100px;
}
</style>
