import React from "react";
//import custom axios client
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

//value of 'this' is whatever  on the left of dot of the function
//use constructor function to bind, use arrow func, wrap function in arrow func

class App extends React.Component {
  //state.images is an array of images fetched from api
  state = { images: [] };
  //grab the search term from search bar using this callback func
  //use async to use await or use promise.then
  onSearchSubmit = async (term) => {
    //get request to get images
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* pass function as prop to search bar to execute it */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
