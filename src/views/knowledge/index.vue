<template>
  <el-container direction="vertical">
    <el-main v-if="this.$route.name === name"></el-main>
    <router-view v-else></router-view>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
@Component({
  components: {
    'v-header': header,
    'v-footer': footer,
  }
})
export default class Knowledge extends Vue {
  public name = 'knowledge'
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