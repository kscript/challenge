<template>
  <el-header>
    <el-row>
      <el-col class="text-center" :span="5">
        <router-link :to="{name: 'index'}">
          <img src="@/assets/logo.png" alt="" class="logo">
          <span class="title">
            前端面试题
          </span>
        </router-link>
      </el-col>
    </el-row>
  </el-header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
})
export default class Header extends Vue {}
</script>
<style lang="scss" scoped>
.el-header {
  line-height: 60px;
  text-align: left;
  color: $header_color;
  background: $header_bg;
  a{
    color: $header_color;
  }
  .logo {
    height: 50px;
    vertical-align: middle;
  }
  .title {
    vertical-align: middle;
    font-size: 20px;
    margin-left: 10px;
  }
}
</style>
