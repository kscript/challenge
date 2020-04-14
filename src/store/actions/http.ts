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
      const { data: { data } } = await axios({
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
  // 取某一分类下的md文件列表 需要知道是什么栏目(name)下的哪个分类(category)
  async category({ state, commit }, { name = 'question', category, pageno = 1 }) {
    const nameState = state.category[name] || {}
    const categoryMap: anyObject = (nameState[category] || {})
    if (cacheable('category') && categoryMap[pageno]) {
      return categoryMap[pageno]
    }
    const { data } = await axios({
      url: `/${name}/${category}/category${pageno ? '_' + pageno : ''}.json`,
      method: 'get'
    })
    commit('category', { name, category, data })
    return data
  },
  // 某一栏目的时间线 知道栏目即可
  async timeline({ state, commit }, { name = 'question', pageno = 1 }) {
    const links: anyObject = {}
    const timeline: anyObject = state.timeline[name]
    if (cacheable('timeline') && timeline && timeline.data) {
      return timeline
    }
    try {
      const { data } = await axios({
        url: `/${name}/timeline${pageno ? '_' + pageno : ''}.json`,
        method: 'get'
      })
      data.data.forEach((item: anyObject, index: number) => {
        links[item.path] = (data.pageno - 1) * data.size + index
      })
      commit('timeline', { name, data, pageno })
      commit('toggleLinks', { name, data, pageno, links })
      return data
    } catch (err) {
      // 当尝试取下一页的时候会得到404
      return {
        err,
        data: []
      }
    }
  },
  async toggleLinks({ state, dispatch }, { name = 'question', path: fullPath = ''}) {
    // 先取出自己的索引
    const links = state.toggleLinks[name] || {}
    const index = links[fullPath]
    // 取出state里要用到的数据
    const info = state.info as anyObject
    const size = info.page.timeline || info.page.size
    const timeline = state.timeline[name]
    // 根据索引计算上下篇
    const pageno = ~~(index / size) + 1
    const current = timeline[pageno].data || {}
    const result = [current[index % size - 1] || {}, current[index % size + 1] || {}]
    // 如果对索引取size的余数为0, 说明是当前分页的第一篇
    if (index % size === 0) {
      // 如果索引大于size, 说明不是第一页, 那么可以去取上一页
      if (index >= size) {
        await dispatch('timeline', {
          name,
          pageno: pageno - 1
        })
        // 取上一页最后一篇
        result[0] = (timeline[pageno - 1].data || {})[size - 1] || {}
      }
    // 下一篇的逻辑基本同上一篇, 不过由于没有总数, 只能尝试去取
    } else if (index % size === size - 1) {
      await dispatch('timeline', {
        name,
        pageno: pageno + 1
      })
      result[1] = ((timeline[pageno + 1] || {}).data || {})[0] || {}
    }
    return result
  }
}
export default actions
