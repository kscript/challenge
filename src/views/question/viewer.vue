<template>
  <v-viewer></v-viewer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import viewer from '@/components/viewer.vue'
@Component({
  components: {
    'v-viewer': viewer
  }
})
export default class QuestionViewer extends Vue {}
</script>
