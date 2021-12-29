import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);

    this.showResetButton(false);
    this.bindEvents();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  bindEvents() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
    // TODO
    on(this.element, "submit", event => this.handleSubmit(event));
  }

  handleKeyup() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);
  }

  handleSubmit(event) {
    event.preventDefault(); // submit 시 브라우저의 기본 동작(새로고침)을 취소한다.
    console.log(tag, "handleSubmit");
    // SearchFormView의 역할은 Enter가 입력됐다는 것만 알고, 검색결과에 대한 로직은 다른 클래스에 위임하는 것이 낫다.
    // 그 때 사용할 이벤트를 만든다.
    const { value } = this.inputElement;
    this.emit("@submit", { value }); // emit은 View클래스의 메서드다. 커스텀함수라서 구분하기 위해 @ 붙였다.
  }
}
