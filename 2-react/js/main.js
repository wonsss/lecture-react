class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  // 리액트에서 이벤트를 처리하는 핸들러 이름은 보통 앞에 handle로 시작하는 관례가 있다.
  handleChangeInput(event) {
    // 리액트 컴포넌트는 필요할 때만 render() 함수를 불러서 갱신한다.
    // 강제로 컴포넌트의 렌더함수를 돌게 하려면, forceUpdate를 호출해야 한다.
    // this.state.searchKeyword = event.target.value; // 직접 수정 방법(권장되지 않음)
    // this.forceUpdate();

    // 리액트 컴포넌트 스스로 state의 변화를 감지하고 render함수 호출할 수 있게 하려면, setState를 사용해야 한다.
    this.setState({
      searchKeyword: event.target.value,
    });
  }

  render() {
    return (
      <>
        <header>
          <h2 className='container'>검색</h2>
        </header>
        <div className='container'>
          <form>
            <input
              type='text'
              placeholder='검색어를 입력하세요'
              autoFocus
              value={this.state.searchKeyword}
              onChange={event => this.handleChangeInput(event)}
            />
            <button type='reset' className='btn-reset'></button>
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
