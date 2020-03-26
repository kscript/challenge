import { ActionTree } from 'vuex'
import StoreData from '@/store/state'
import axios from '@/axios'
const actions: ActionTree<StoreData, StoreData> = {
  question({ state, commit }, [{title = '', category = ''}, refresh = false]) {
    if (state.question[title] && refresh) {
      return state.question[title]
    }
    return axios({
      url: `/question/${category}/${title}`,
      method: 'get'
    }).then(({ data: { data } }) => {
      commit('question', { title, data })
      return data
    })
  },
  category({ state, commit }, category) {
    if (state.categorys[category]) {
      return state.categorys[category]
    }
    return axios({
      url: `/question/category`,
      method: 'get'
    }).then(({ data: { data } }) => {
      commit('categoryMap', { category, data })
      return data
    })
  },
  categorys({ state, commit }) {
    if (state.categorys.length) {
      return state.categorys
    }
    return axios({
      url: `/question/categorys`,
      method: 'get'
    }).then(({ data: { data } }) => {
      commit('categorys', data)
      return data
    })
  }
}
export default actions
