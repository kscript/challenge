import { MutationTree } from 'vuex'
import StoreData from '@/store/state'

const mutations: MutationTree<StoreData> = {
    question(state, { title, data }) {
        state.question[title] = data
    },
    categorys(state, data) {
        state.categorys = data
    }
}
export default mutations
