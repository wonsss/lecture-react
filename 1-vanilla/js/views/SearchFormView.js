import View from "./View.js";
import { qs } from "../helpers.js";

export default class SearchFormView extends View {
  constructor() {
    // 부모의 컨스터럭터 호출 - super -> super() 괄호 사이 인자를 받아서 this.element에 담는다.
    super(qs("#search-form-view")); // this.element
    // qs 두번째 인자는 스코프, 어떤 엘리먼트 하위에서 찾을 것인가?
    this.resetElement = qs("[type=reset", this.element);
    this.showResetButton(false); // 초기값 false로 메서드 호출 -> 처음엔 리셋버튼 숨긴다
  }
  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }
}
