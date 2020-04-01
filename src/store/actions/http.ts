import { ActionTree } from 'vuex'
import StoreData from '@/store/state'
import axios from '@/axios'
import { runtime } from '@/config'
// @ts-ignore
import path from 'path'

const cacheInfo = runtime.store.cache
const cacheable = (key: string) => {
  if (cacheInfo instanceof Object) {
    return cacheInfo.hasOwnProperty(key) ? !!runtime.store[key] : true
  } else {
    return !!cacheInfo
  }
}

const actions: ActionTree<StoreData, StoreData> = {
  // 取md文件 只需要路径即可
  mdFiles({ state, commit }, {
    path: fullPath,
    refresh = false
  }) {
    fullPath = path.join(fullPath)
    if (cacheable('mdFiles') && state.mdFiles.hasOwnProperty(fullPath) && !refresh) {
      return state.mdFiles[fullPath]
    }
    return axios({
      url: fullPath,
      method: 'get'
    }).then(({ data }) => {
      commit('mdFiles', { path: fullPath, data })
      return data
    })
  },
  // 取某一分类下的md文件列表 需要知道是什么栏目(name)下的哪个分类(category)
  category({ state, commit }, { name = 'question', category }) {
    const categoryMap: anyObject = state.category[name]
    if (cacheable('category') && categoryMap && categoryMap.hasOwnProperty(category)) {
      return categoryMap[category]
    }
    return axios({
      url: `/${name}/${category}.json`,
      method: 'get'
    }).then(({ data }) => {
      commit('category', { name, category, data })
      return data
    })
  },
  // 取分类列表 知道栏目即可
  categorys({ state, commit }, { name = 'question' }) {
    const categorys: anyObject[] = state.categorys[name]
    if (cacheable('categorys') && categorys && categorys.length) {
      return categorys
    }
    return axios({
      url: `/${name}/categorys.json`,
      method: 'get'
    }).then(({ data }) => {
      commit('categorys', { name, data })
      return data
    })
  },
  // 某一栏目的时间线 知道栏目即可
  timeline({ state, commit }, { name = 'question' }) {
    const timeline: anyObject[] = state.timeline[name]
    if (cacheable('timeline') && timeline && timeline.length) {
      return timeline
    }
    return axios({
      url: `/${name}/list.json`,
      method: 'get'
    }).then(({ data }) => {
      commit('timeline', { name, data })
      return data
    })
  }
}
export default actions
