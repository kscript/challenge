<template>
  <el-container class="home" direction="vertical">
    <v-header />
    <el-container>
      <v-aside />
      <router-view />
    </el-container>
    <v-footer />
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import header from '@/components/header.vue'
import aside from '@/components/aside.vue'
import footer from '@/components/footer.vue'
@Component({
  components: {
    'v-header': header,
    'v-aside': aside,
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
