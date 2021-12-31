// 엔터를 입력하면 검색 결과가 보인다
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("TODO: handleSubmit", this.state.searchKeyword);
  }

  handleReset() {
    // setState는 항상 비동기로 작동한다. setState호출했다하더라도 해당 변화가 다음 코드에 바로 반영되지 않고 늦게 반영된다.
    // 그러므로 아래처럼 setState 내부에 다음 코드도 집어 넣어 작성해야 동기적으로 작동된다.
    this.setState(
      () => {
        return { searchKeyword: "" };
      },
      () => {
        console.log("TODO: handleReset", this.state.searchKeyword);
      }
    );
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    this.setState({
      searchKeyword,
    });
    if (searchKeyword.length <= 0) {
      return this.handleReset();
    }
  }

  render() {
    return (
      <>
        <header>
          <h2 className='container'>검색</h2>
        </header>
        <div className='container'>
          <form
            onSubmit={event => this.handleSubmit(event)}
            onReset={() => this.handleReset()}
          >
            <input
              type='text'
              placeholder='검색어를 입력하세요'
              autoFocus
              value={this.state.searchKeyword}
              onChange={event => this.handleChangeInput(event)}
            />
            {this.state.searchKeyword.length > 0 && (
              <button type='reset' className='btn-reset'></button>
            )}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
