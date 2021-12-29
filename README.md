```jsx
  bindEvents() {
    delegate(this.element, "click", "li", event => this.handleClick(event));
  }
```

위 아래 코드는 동일한 효과를 발생한다. delegate는 헬퍼함수로 아래 코드 같은 내용의 중복을 방지하고 간략하게 하였다.

```jsx
  bindEvents() {
    const emitEvent = event => {
      const potentialElements = qsAll("li", this.element);
      for (const potentialElement of potentialElements) {
        if (potentialElement === event.target) {
          this.handleClick(event);
        }
      }
    };

    this.element.addEventListener("click", emitEvent);
  }
```
