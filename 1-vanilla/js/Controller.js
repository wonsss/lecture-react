const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag, "constructor");

    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    // 체이닝 가능, 발행된 이벤트를 받아서 실행
    this.searchFormView
      .on("@submit", event => this.search(event.detail.value))
      .on("@reset", () => this.reset());
  }

  search(searchKeyword) {
    console.log(tag, "search", searchKeyword);
  }

  reset() {
    console.log(tag, "reset");
  }
}
