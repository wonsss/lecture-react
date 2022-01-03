// jsx 문법을 쓰면 react를 import하여야 한다.
import React from "react";

// 리액트 엘리먼트를 반환하는 Header라는 함수
const Header = () => {
  return (
    <header>
      <h2 className='container'>검색</h2>
    </header>
  );
};

export default Header;
