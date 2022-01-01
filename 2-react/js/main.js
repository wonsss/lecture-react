import store from "./js/Store.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({ searchResult });
  }

  handleReset() {
    console.log("TODO: handleResset");
    this.setState({ searchKeyword: "" });
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    this.setState({ searchKeyword });
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
          <div className='content'>
            {this.state.searchResult.length > 0 ? (
              <ul className='result'>
                {this.state.searchResult.map(item => {
                  return (
                    <li>
                      <img src={item.imageUrl} alt={item.name} />
                      <p>{item.name}</p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className='empty-box'>검색 결과가 없습니다</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
