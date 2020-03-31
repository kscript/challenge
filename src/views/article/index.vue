<template>
  <el-container :class="'view-' + $route.name" direction="vertical">
    <el-main v-if="this.$route.name === name"></el-main>
    <router-view v-else></router-view>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
})
export default class Article extends Vue {
  public name = 'article'
  public categorys: anyObject[] = []
  public async getCategorys() {
    this.categorys = await this.$store.dispatch('categorys', {
      name: this.name
    })
  }
  protected mounted() {
    this.getCategorys()
  }
}
</script>
<style lang="scss" scoped>
.el-container{
  height: 100%;
}
.el-main {
  height: 100%;
}
</style>