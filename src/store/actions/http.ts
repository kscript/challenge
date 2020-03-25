import { ActionTree } from 'vuex'
import StoreData from '@/store/state'
import axios from '@/axios'
const actions: ActionTree<StoreData, StoreData> = {
    question({ state, commit }, [title = '', refresh = false]) {
        if (state.question[title] && refresh) {
            return state.question[title]
        }
        return axios({
            url: `/question/${title}`,
            method: 'get'
        }).then(({ data }) => {
            commit('question', { title, data })
            return data
        })
    }
}
export default actions
