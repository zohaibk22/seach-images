import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./Seachbar/Seachbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }

  onChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  onSearchSubmit = (term) => {
    // event.preventDefault();
    console.log(term);
    axios.get("https://api.unsplash.com/search/photos", {
      params:{},
      headers: {
        Authorization: "Client-ID kdifycNkYHWrAcyZnWLZ-V5TpShwiZvOrH_1pzLq_2o",
      },
    });
  };
  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: "40px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      </>
    );
  }
}

export default App;
