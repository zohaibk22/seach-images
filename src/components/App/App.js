import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./Seachbar/Seachbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
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

  async onSearchSubmit(term) {
    // event.preventDefault();
    console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID kdifycNkYHWrAcyZnWLZ-V5TpShwiZvOrH_1pzLq_2o",
      },
    });
    // console.log(response.data.results);
    this.setState({
      images: response.data.results,
    });
  }
  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: "40px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} Images
        </div>
      </>
    );
  }
}

export default App;
