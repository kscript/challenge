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
        const pageno = data.pageno
        const naState = state.category[name] = state.category[name] || []
        const caState = naState[category] = naState[category] || {}
        caState[pageno] = data
    },
    categorys(state, {
        name,
        data
    }) {
        if (state.categorys.hasOwnProperty(name)) {
            state.categorys[name] = data
        }
    },
    toggleLinks(state, { name, links, pageno }) {
        state.toggleLinks[name] = links
    },
    timeline(state, {
        name,
        data
    }) {
        const pageno = data.pageno
        state.timeline[name] = state.timeline[name] || []
        state.timeline[name][pageno] = data
    },
    info(state, value) {
        state.info = value
    }
}
export default mutations
