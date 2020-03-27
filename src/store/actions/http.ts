import { ActionTree } from 'vuex'
import StoreData from '@/store/state'
import axios from '@/axios'
const actions: ActionTree<StoreData, StoreData> = {
  question({ state, commit }, [{title = '', category = ''}, refresh = false]) {
    let fullTitle = ''
    if (/\.md$/.test(title)) {
      fullTitle = title
      title = title.slice(0, -3)
    } else {
      fullTitle = `${title}.md`
    }
    if (state.question.hasOwnProperty(title) && !refresh) {
      return state.question[title]
    }
    return axios({
      url: `/question/${category}/${fullTitle}`,
      method: 'get'
    }).then(({ data }) => {
      commit('question', { title, data })
      return data
    })
  },
  category({ state, commit }, category) {
    if (state.categorys.hasOwnProperty(category)) {
      return state.categorys[category]
    }
    return axios({
      url: `/question/${category}/list.json`,
      method: 'get'
    }).then(({ data }) => {
      commit('categoryMap', { category, data })
      return data
    })
  },
  categorys({ state, commit }) {
    if (state.categorys.length) {
      return state.categorys
    }
    return axios({
      url: `/question/categorys.json`,
      method: 'get'
    }).then(({ data }) => {
      commit('categorys', data)
      return data
    })
  }
}
export default actions
