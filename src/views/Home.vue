<template>
  <div class="home">
    <v-header />
    <v-aside />
    <router-view />
    <v-footer />
  </div>
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
