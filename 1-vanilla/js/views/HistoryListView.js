// 목록에서 x 버튼을 클릭하면 선택된 검색어가 목록에서 삭제된다
// HistoryListView는 "목록에서 x 버튼을 클릭하면"과 같이 이벤트를 받는 거 까지 역할이다.

import { delegate, formatRelativeDate, qs } from "../helpers.js";
import KeywordListView from "./KeywordListView.js";

const tag = "[HistoryListView]";

export default class HistoryListView extends KeywordListView {
  constructor() {
    super(qs("#history-list-view"), new Template());
  }

  bindEvents() {
    delegate(this.element, "click", "button.btn-remove", event =>
      this.handleClickRemoveButton(event)
    );
    super.bindEvents();
  }

  handleClickRemoveButton(event) {
    console.log(tag, "handleClickRemoveButton", event.target);
    const value = event.target.parentElement.dataset.keyword;
    this.emit("@remove", { value });
  }
}

class Template {
  getEmptyMessage() {
    return `
      <div class="empty-box">
        검색 이력이 없습니다
      </div>
    `;
  }

  getList(data = []) {
    return `
      <ul class="list">
        ${data.map(this._getItem).join("")}
      </ul>
    `;
  }

  _getItem({ keyword, date }) {
    return `
      <li data-keyword="${keyword}">
        ${keyword}
        <span class="date">${formatRelativeDate(date)}</span>
        <button class="btn-remove"></button>
      </li>
    `;
  }
}
