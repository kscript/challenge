import { ActionTree } from 'vuex'
import StoreData from '@/store/state'
import http from '@/store/actions/http'
const actions: ActionTree<StoreData, StoreData> = Object.assign({}, http)
export default actions
