import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../Seachbar/Seachbar";
import unsplash from '../../api/unsplash'
import ImageList from '../ImageList/ImageList'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.state = {
      userInput: "",
      images: [],
    };
  }

  onChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  onSearchSubmit = async (term) => {
    // event.preventDefault();
    console.log(term);
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    console.log(response.data.results);
    this.setState({
      images: response.data.results,
    });
  };
  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: "40px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} Images
        </div>
        <ImageList images={this.state.images} />
      </>
    );
  }
}

export default App;
