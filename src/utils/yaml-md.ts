// @ts-ignore
import jsyaml from 'js-yaml'
export const parseConfig = (yaml: string = '') => {
  return jsyaml.load(yaml.slice(3, -3)) || {}
}
export const extract = (content: string = '', type?: string) => {
  const str = '---'
  const index = content.indexOf(str)
  const nextIndex = content.slice(index + 1).indexOf(str)
  const resObj: anyObject<string> = {
    markdown: nextIndex < 0 ? content : content.slice(nextIndex + str.length),
    yaml: nextIndex < 0 ? '' : content.slice(index, nextIndex + str.length + 1)
  }
  return type ? resObj[type] || resObj.markdown : resObj
}
