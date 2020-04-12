<template>
  <el-footer class="text-center">
    Copyright &copy; 2020-present kscript
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