import Controller from './Controller.js';
import Store from './store.js';
import storage from './storage.js';

const tag = '[main]';

// DOM이 로딩되었을 때, main함수를 호출한다.
document.addEventListener('DOMContentLoaded', main);

// MVC패턴에서 각 계층의 객체를 초기화한다.
function main() {
  console.log(tag, 'main');
  const store = new Store(storage); // 모델 생성

  const views = {
    // TODO
  };

  new Controller(store, views); // 컨트롤러 클래스를 만든다.
}
