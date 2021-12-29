import { createNextId, createPastDate } from "./helpers.js";
import { TabType } from "./views/TabView.js";

const tag = "[Store]";

export default class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;

    this.searchKeyword = "";
    this.searchResult = [];
    this.selectedTab = TabType.KEYWORD;
  }

  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter(product =>
      product.name.includes(keyword)
    );
    // TODO
    this.addHistoryData(keyword);
  }

  addHistoryData(keyword) {
    for (let i = 0; i < this.storage.historyData.length; i++) {
      if (this.storage.historyData[i].keyword === keyword) {
        this.storage.historyData.splice(i, 1);
        break;
      }
    }

    const id = createNextId(this.storage.historyData);
    const date = createPastDate();
    const newData = { id, keyword, date };
    this.storage.historyData.push(newData);
  }

  getKeywordList() {
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(history1, history2) {
    return history2.date > history1.date;
  }

  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      history => history.keyword !== keyword
    );
  }

  // TODO
}
