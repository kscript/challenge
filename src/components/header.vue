<template>
  <el-header>
    <el-row>
      <el-col class="text-center" :span="5" :offset="1">
        <router-link :to="{name: 'index'}">
          <img src="@/assets/logo.png" alt class="logo" />
          <span class="title">前端知识技能考查</span>
        </router-link>
      </el-col>
      <el-col :span="12">
        <el-menu
          :default-active="this.activeMenu"
          mode="horizontal"
          text-color="#eee"
          active-text-color="#fff"
          background-color="#333333"
          @select="handleSelect"
        >
          <el-menu-item v-for="(vo) in menu" :key="vo.name" :index="vo.name" >{{vo.label}}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="5" class="text-right">
        <a href="/">
          <i class="iconfont icon-github"></i>
        </a>
      </el-col>
    </el-row>
  </el-header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Header extends Vue {
  public activeMenu = ''
  public menuMap: anyObject = {}
  public menu = [
    {
      label: '面试题',
      name: 'question'
    },
    // {
    //   label: '知识点',
    //   name: 'knowledge'
    // },
    {
      label: '文章',
      name: 'article'
    }
  ]
  public handleSelect(name: string) {
    if (this.activeMenu !== name) {
      this.$router.push({
        name
      })
    }
    this.setActiveMenu(name)
  }
  public updateMenuMap() {
    this.menu.forEach(item => {
      this.menuMap[item.name] = item
    })
  }
  public setActiveMenu(index: string = '') {
    if (index) {
      this.activeMenu = index
    } else {
      const name = (this.$route.name || '').split('_')[0]
      if (name) {
        if (this.menuMap[name]) {
          this.activeMenu = name
        } else {
          this.activeMenu = name
          // this.activeMenu = (this.menu[0] || {}).name
        }
      }
    }
  }
  protected mounted() {
    // this.activeMenu = this.$route.params.
    this.updateMenuMap()
    this.setActiveMenu()
  }
}
</script>
<style lang="scss" scoped>
.el-header {
  line-height: 60px;
  text-align: left;
  color: $header_color;
  background: $header_bg;
  a {
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
  .el-menu {
    background: none;
    ::v-deep .el-menu-item.is-disabled {
      opacity: .9;
    }
  }
  .icon-github {
    font-size: 50px;
    color: $header_color;
  }
}
</style>
