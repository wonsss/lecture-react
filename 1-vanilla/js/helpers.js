// helper함수는 dom Api를 편하게 쓰기 위하여 wrapping한 것이다.

// qs는 document.querySelector를 줄인 함수이다.
export function qs(selector, scope = document) {
  if (!selector) throw "no selector";

  return scope.querySelector(selector);
}

export function qsAll(selector, scope = document) {
  if (!selector) throw "no selector";

  // querySelectorAll은 유사 배열을 반환하므로, 이를 다루기 쉽게 하기 위해 Array.from() 메서드로 배열로 변환한다.
  return Array.from(scope.querySelectorAll(selector));
}

// on함수는 addEventListener를 wrapping한다.
export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

// delegate함수는 on함수와 비슷하지만, 핸들러를 따로 wrapping하여 사용한다.
// 특정 엘리먼트 하위에 있는 자식 엘리먼트들의 이벤트를 처리할 때 사용한다.
export function delegate(target, eventName, selector, handler) {
  const emitEvent = event => {
    const potentialElements = qsAll(selector, target);
    // 이벤트를 발생시킨 엘리먼트를 찾아서 핸들러 함수를 호출한다.
    for (const potentialElement of potentialElements) {
      if (potentialElement === event.target) {
        return handler.call(event.target, event);
      }
    }
  };

  on(target, eventName, emitEvent);
}

// 이벤트를 발행할 때 사용하며, dispatchEvent를 호출한다.
// CustomEvent를 target 엘리먼트가 발행할 수 있도록 한다.
export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

//여기까지가 Dom Api를 Wrapping한 것이다.

// 아래부터는 유틸리티 함수들이다.

// Date객체를 받아서 상대 시간 문자열을 반환한다.
export function formatRelativeDate(date = new Date()) {
  const TEN_SECOND = 10 * 1000;
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;

  const diff = new Date() - date;

  if (diff < TEN_SECOND) return `방금 전`;
  if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 전`;
  if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 전`;
  if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 24)}시간 전`;
  return date.toLocaleString("ko-KR", {
    hour12: false,
    dateStyle: "medium",
  });
}

// 과거 날짜를 얻을 때 사용한다.
export function createPastDate(date = 1, now = new Date()) {
  if (date < 1) throw "date는 1 이상입니다";

  const yesterday = new Date(now.setDate(now.getDate() - 1));
  if (date === 1) return yesterday;

  return createPastDate(date - 1, yesterday);
}

// 숫자를 하나씩 올려가면서 ID를 만들기 위한 함수이다.
export function createNextId(list = []) {
  return Math.max(...list.map(item => item.id)) + 1;
}
