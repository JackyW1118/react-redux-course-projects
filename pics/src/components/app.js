import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  //grab the search term from search bar using this callback func
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
