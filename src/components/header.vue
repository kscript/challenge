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
          class="left"
          :default-active="this.activeMenu"
          mode="horizontal"
          text-color="#eee"
          active-text-color="#fff"
          background-color="#333333"
          @select="handleSelect"
        >
          <el-menu-item v-for="(vo) in menu" :key="vo.name" :index="vo.name" >{{vo.label}}</el-menu-item>
        </el-menu>
        <el-input
          class="left"
          size="small"
          placeholder="请输入关键词"
          suffix-icon="el-icon-search"
          v-model="keyword">
        </el-input>
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
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({})
export default class Header extends Vue {
  public keyword = ''
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
  @Watch('$route.name')
  public onMenuNameChange() {
    if (!this.$route.name || this.$route.name === 'index') {
      this.activeMenu = ''
    } else {
      this.activeMenu = this.$route.name.split('_')[0]
    }
  }
  public handleSelect(name: string) {
    if (this.activeMenu !== name || this.$route.name !== name) {
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
  public setActiveMenu(name: string = '') {
    const nameStrs = (this.$route.name || '').split('_')
    if (name) {
      this.activeMenu = name
    } else {
      if (nameStrs[0]) {
        if (this.menuMap[nameStrs[0]]) {
          this.activeMenu = nameStrs[0]
        } else {
          this.activeMenu = ''
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
  .el-input {
    width: auto;
    margin-left: 40px;
    ::v-deep input{
      color: #ccc;
      border-color: rgba(255,255,255,.2);
      background: rgba(0,0,0,0);
    }
  }
  .icon-github {
    font-size: 50px;
    color: $header_color;
  }
}
</style>
