import React from "react";

class SearchBar extends React.Component {
  //controlled element: react side driving the data
  state = { term: "" };

  //regular function does not bind 'this'
  onFormSubmit = (event) => {
    //prevent native html form behavior
    event.preventDefault();
    //pass term back to parent
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
