const tag = '[Controller]';

// Controller 클래스는 생성 시점에 store(모델)와 views를 받는다.
export default class Controller {
  constructor(store, views) {
    console.log(tag);
    this.store = store;

    // TODO
  }
}
