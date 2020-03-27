<template>
  <el-container direction="vertical">
    <v-header />
    <router-view></router-view>
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
    'v-footer': footer,
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.el-container{
  height: 100%;
}
</style>