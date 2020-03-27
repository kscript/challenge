<template>
  <el-container direction="vertical">
    <v-header />
    <el-main class="view-index-main">
      <el-row>
        <el-col :span="4" v-for="(vo, index) in categorys" :key="index">
          <router-link :to="{
            path: '/question/' + vo[0] + '/'
          }">
            <section>
              <h3 :data-content="vo[0]">{{ vo[0] }}</h3>
              <p>{{ vo[1] || '' }}</p>
            </section>
          </router-link>
        </el-col>
      </el-row>
    </el-main>
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
  public categorys: string[][] = []
  public async getCategorys() {
    this.categorys = await this.$store.dispatch('categorys')
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
  padding: 50px;
  .el-row{
    width: 1200px;
    margin: 0 auto;
    .el-col {
      padding: 10px 12px;
    }
    section {
      height: 220px;
      border-top: 1px solid #f8f8f8;
      border-bottom: 1px solid #f8f8f8;
      border-radius: 5px;
      box-shadow: 0px 1px 1px #d6d6d6, 3px 2px 4px #eee;
      color: #111;
      background-image: linear-gradient(to bottom, #fbfbf1 0%, #fbfbf1 50%, #d3c8eb 50%,#d3c8eb 100%);
      h3 {
        height: 45px;
        padding: 50px 0 15px;
        margin-bottom: 5px;
        position: relative;
        font-size: 22px;

        font-weight: 400;
        color: transparent;
        background: -webkit-gradient(linear, left top, left bottom, from(#999cfc), to(#1b999c));
        background: linear-gradient(#999cfc, #1b999c);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        &::before{
          position: absolute;
          content: attr(data-content);
          z-index: -1;
          text-shadow: 0.031em 0.031em #cdcdcd;
        }
      }
      p{
        overflow: hidden;
        height: 100px;
        line-height: 18px;
        padding: 0 15px;
        margin: 10px 0;
        font-size: 14px;
        letter-spacing: .5px;
        color: #fff;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
    }
  }
}
</style>
