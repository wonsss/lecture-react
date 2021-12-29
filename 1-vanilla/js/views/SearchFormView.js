import { qs, on } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);

    this.showResetButton(false);
    // TODO
    this.bindEvent();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  bindEvent() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
  }

  handleKeyup() {
    console.log(tag, "handleKeyup", this.inputElement.value);
    const { value } = this.inputElement;
    // 검색어를 입력하면 x버튼이 보이고, 없으면 x 버튼을 숨긴다
    this.showResetButton(value.length > 0);
  }
}
