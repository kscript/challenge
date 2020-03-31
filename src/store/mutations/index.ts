import { MutationTree } from 'vuex'
import StoreData from '@/store/state'
// @ts-ignore
import path from 'path'
const mutations: MutationTree<StoreData> = {
    mdFiles(state, { path: path$1, data }) {
        state.mdFiles[path.join(path$1)] = data
    },
    category(state, {
        name,
        category,
        data
    }) {
        if (state.category.hasOwnProperty(name)) {
            state.category[name][category] = data
        }
    },
    categorys(state, {
        name,
        data
    }) {
        if (state.categorys.hasOwnProperty(name)) {
            state.categorys[name] = data
        }
    }
}
export default mutations
