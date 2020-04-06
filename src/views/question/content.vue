<template>
  <el-main class="view-question_content" v-if="title">
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
export default class QuestionContent extends Vue {
  public params: anyObject = {}
  public title = ''
  public content = {}
  @Watch('$route.params', { immediate: false })
  public onParamesChange() {
    const params: anyObject = this.$route.params
    this.content = params.content instanceof Object ? params.content : JSON.parse(params.content)
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
.el-main{
  text-align: left;
}
</style>