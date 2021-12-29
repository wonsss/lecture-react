## 이벤트 생성

1. SearchFormView.js (View의 메서드 상속) @submit 이벤트
   emit 메서드 사용

```jsx
this.emit("@submit", { value });
```

2. View.js : emit 메서드

```jsx
emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
}
```

3. helper.js : emit 함수

```jsx
export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}
```

이벤트 생성(target에 @submit 이벤트 )

## 이벤트 핸들러 붙이기

1. Controller.js : searchFormView의 on 메서드 실행

```jsx
  subscribeViewEvents() {
    this.searchFormView.on("@submit", event => this.search(event.detail.value)); // CustomEvent의 detail 객체 접근
  }
```

2. View.js : on 메서드

```jsx
  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }
```

3. helper.js : on 함수

```jsx
export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}
```

생성된 이벤트에 handler를 붙인다.

- 커스텀 이벤트 참고
  https://developer.mozilla.org/ko/docs/Web/API/CustomEvent/CustomEvent

https://ko.javascript.info/dispatch-events#ref-489

- 디스패치이벤트 참고
  https://developer.mozilla.org/ko/docs/Web/API/EventTarget/dispatchEvent

https://ko.javascript.info/dispatch-events#ref-486
