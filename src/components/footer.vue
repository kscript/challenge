<template>
  <el-footer class="text-center">
    &copy;kscript 2020-
  </el-footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
})
export default class Footer extends Vue {}
</script>
<style lang="scss" scoped>
.el-footer{
  line-height: 60px;
  border-top: 1px solid #ddd;
  // color: $footer_color;
  // background: $footer_bg;
  a{
    // color: $footer_color;
    padding: 0 5px;
    margin-right: 10px;
  }
}
</style>