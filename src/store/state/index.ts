export default class StoreData {
  public info: null | anyObject = null
  public pagenos: anyObject<anyObject<number>> = {}
  public toggleLinks: anyObject = {}
  public mdFiles: anyObject<string> = {}
  public categorys: anyObject<string[][]> = {
    question: [],
    article: [],
    knowledge: [],
  }
  public timeline: anyObject<string[][]> = {
    question: [],
    article: [],
    knowledge: [],
  }
  public category: anyObject<anyObject<anyObject[]>> = {
    question: {},
    article: {},
    knowledge: {},
  }
  public constructor() {}
  [prop: string]: any;
}
