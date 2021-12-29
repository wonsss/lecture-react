- [x] 검색 결과가 검색폼 아래 위치한다. 검색 결과가 없을 경우와 있을 경우를 구분한다.

SearchResultView에서 Template 클래스를 만들어서 활용하는 방법이 인상적이다.
아래 코드처럼 입력받은 배열 데이터에 map()메서드를 사용하여 data내부의 프로퍼티들을 넣은 마크업을 모두 만들어낸다.

```jsx
  getList(data = []) {
    return `
        <ul class="result">
            ${data.map(this._getItem).join("")}
        </ul>
    `;
  }

  _getItem({ imageUrl, name }) {
    return `
        <li>
            <img src="${imageUrl}" alt="${name}" />
            <p>${name}</p>
        </li>
    `;
  }
```
