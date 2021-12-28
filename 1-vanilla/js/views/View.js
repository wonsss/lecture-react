import { emit, on } from '../helpers.js';

const tag = '[View]';

export default class View {
  constructor(element) {
    if (!element) throw 'no element';

    this.element = element;
    this.originalDisplay = this.element.style.dispaly || '';

    return this;
  }

  hide() {
    this.element.style.display = 'none';
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  // view는 사용자와도 인터렉션을 한다.
  // on과 emit 메서드는 helper.js 내부에 있는 유틸리티 함수다.
  // on은 이벤트를 구독하는 메서드이다.
  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  // 이벤트를 발행하는 메서드
  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}
