import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import SearchResult from "./components/SearchResult.js";
import store from "./Store.js";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    };
  }

  handleChangeInput(searchKeyword) {
    if (searchKeyword.length <= 0) {
      this.handleReset();
    }
    this.setState({ searchKeyword });
  }

  search(searchKeyword) {
    console.log(searchKeyword);
    const searchResult = store.search(searchKeyword);
    console.log(searchResult);
    this.setState({
      searchResult,
      submitted: true,
    });
  }

  handleReset() {
    this.setState({
      searchKeyword: "",
      submitted: false,
      searchResult: [],
    });
    console.log("TODO: handleReset");
  }

  render() {
    const { searchKeyword, submitted, searchResult } = this.state;
    console.log(searchKeyword);

    return (
      <>
        <Header title='검색' />
        <div className='container'>
          <SearchForm
            value={searchKeyword}
            onChange={value => this.handleChangeInput(value)}
            onSubmit={() => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
          <div className='content'>
            {submitted && <SearchResult data={searchResult} />}
          </div>
        </div>
      </>
    );
  }
}
