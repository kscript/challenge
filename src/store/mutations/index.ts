import { MutationTree } from 'vuex'
import StoreData from '@/store/state'

const mutations: MutationTree<StoreData> = {
    question(state, { title, data}) {
        state.question[title] = data
    }
}
export default mutations
