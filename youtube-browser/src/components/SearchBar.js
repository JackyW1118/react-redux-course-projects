import React from "react";

class SearchBar extends React.Component {
  //default term
  state = { term: "react js" };
  //use default term to search
  componentDidMount() {
    this.onFormSubmit();
  }
  onFormSubmit = (e) => {
    if (e) e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input
              value={this.state.term}
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
