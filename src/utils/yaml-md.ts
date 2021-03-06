// @ts-ignore
import jsyaml from 'js-yaml'
export const parseConfig = (yaml: string = '') => {
  return jsyaml.load(yaml) || {}
}
export const extract = (content: string = '', type?: string) => {
  const strs = (' ' + content).split('---')
  const resObj: anyObject<string> = {
    markdown: strs.slice(0, 1).concat(strs.slice(2).join('---')).join('').slice(1),
    yaml: strs[1] || ''
  }
  return type ? resObj[type] || resObj.markdown : resObj
}
