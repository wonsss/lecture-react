class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    this.setState({
      searchKeyword,
    });
  }

  render() {
    // 조건부 렌더링 방법 1 - 엘리먼트 변수를 사용하는 방식
    let resetButton = null;

    if (this.state.searchKeyword.length > 0) {
      resetButton = <button type='reset' className='btn-reset'></button>;
    }
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
            {resetButton}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
