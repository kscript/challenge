import { Component, Vue } from 'vue-property-decorator';
@Component({
})
export class Bus extends Vue { }
export const eventBus = new Bus()
export default {
  install() {
    Vue.prototype.$bus = eventBus
  }
}
