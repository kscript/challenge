export default class StoreData {
  public mdFiles: anyObject<string> = {}
  public categorys: anyObject<string[][]> = {
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
