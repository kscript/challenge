<template>
  <el-container class="view-index" direction="vertical">
    <v-header />
    <el-main v-if="this.$route.name === name"></el-main>
    <router-view v-else></router-view>
    <v-footer />
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

@Component({
  components: {
    'v-header': header,
    'v-footer': footer
  }
})
export default class Index extends Vue {
  public name = 'index'
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
