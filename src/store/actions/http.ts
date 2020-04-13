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
  // 由于没有后端服务器
  // 考虑到分页以及后期功能的扩展
  // 因此生成静态数据的脚本, 增加了一个收集信息的功能
  // 这个action用于获取该信息, 最好是在挂载前触发一次
  async info({ state, commit }, refresh = false) {
    if (!state.info && !refresh) {
      const { data } = await axios({
        url: '/info.json',
        method: 'get'
      })
      commit('info', data)
    }
  },
  // 取md文件 只需要路径即可
  async mdFiles({ state, commit }, {
    path: fullPath,
    refresh = false
  }) {
    fullPath = path.join(fullPath)
    if (cacheable('mdFiles') && state.mdFiles.hasOwnProperty(fullPath) && !refresh) {
      return state.mdFiles[fullPath]
    }
    const { data } = await axios({
      url: fullPath,
      method: 'get'
    })
    commit('mdFiles', { path: fullPath, data })
    return data
  },
  // 取某一分类下的md文件列表 需要知道是什么栏目(name)下的哪个分类(category)
  async category({ state, commit }, { name = 'question', category }) {
    const categoryMap: anyObject = state.category[name]
    if (cacheable('category') && categoryMap && categoryMap.hasOwnProperty(category)) {
      return categoryMap[category]
    }
    const { data } = await axios({
      url: `/${name}/${category}/category.json`,
      method: 'get'
    })
    commit('category', { name, category, data })
    return data
  },
  // 取分类列表 知道栏目即可
  async categorys({ state, commit }, { name = 'question' }) {
    const categorys: anyObject[] = state.categorys[name]
    if (cacheable('categorys') && categorys && categorys.length) {
      return categorys
    }
    const { data } = await axios({
      url: `/${name}/categorys.json`,
      method: 'get'
    })
    commit('categorys', { name, data })
    return data
  },
  // 某一栏目的时间线 知道栏目即可
  async timeline({ state, commit }, { name = 'question', pageno = 1 }) {
    const links: anyObject = {}
    const timeline: anyObject[] = state.timeline[name]
    if (cacheable('timeline') && timeline && timeline.length) {
      return timeline
    }
    const { data } = await axios({
      url: `/${name}/timeline.json`,
      method: 'get'
    })
    data.forEach((item: anyObject, index: number) => {
      links[item.path] = [
        data[index - 1] || {},
        data[index + 1] || {}
      ]
    })
    commit('timeline', { name, data })
    commit('pagenos', { name, pageno })
    commit('toggleLinks', { name, links })
    return data
  },
  toggleLinks({ state }, { name = 'question', path: fullPath = ''}) {
    const lists = state.toggleLinks[name] || {}
    if (lists[fullPath]) {
      return lists[fullPath]
    }
    return []
    // 预留 如果没有找到next, 那么list可能做了分页, 这时候需要请求下一页
  }
}
export default actions
