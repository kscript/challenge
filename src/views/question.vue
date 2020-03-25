<template>
  <el-main>
      <v-viewer></v-viewer>
  </el-main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import viewer from '@/components/viewer.vue'
@Component({
    components: {
        'v-viewer': viewer
    }
})
export default class Question extends Vue {}
</script>
