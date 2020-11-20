import React, { Component } from "react";
import Header from "../Components/Header";
import Table from "../Components/Table";
import Search from "../Components/Search";
import API from "../API";

class Index extends Component {
  state = {
    search: "",
    results: [],
    resultsFilter: [],
  };

  //component did mount
  componentDidMount() {
    API.getEmployeeData()
      .then((res) => {
        this.setState({
          allResults: res.data.results,
          filteredResults: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  // handles search input, adjusts value on the fly
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // filter on click search button, returns employees by name containing search term
  handleFormSubmit = (event) => {
    event.preventDefault();
    const filtered = this.state.allResults.filter((result) => {
      return (
        result.name.first.includes(this.state.search) ||
        result.name.last.includes(this.state.search)
      );
    });

    this.setState({ filteredResults: filtered });
  };

  // sorting results by name
  handleSort = (event) => {
    event.preventDefault();

    if (this.state.sort === "AZ name.first") {
      const sorted = this.state.filteredResults.sort((a, b) => {
        if (a.name.first > b.name.first) return -1;
        else return 1;
      });
      this.setState({ filteredResults: sorted, sort: "ZA name.first" });
    } else {
      const sorted = this.state.filteredResults.sort((a, b) => {
        if (a.name.first < b.name.first) return -1;
        else return 1;
      });
      this.setState({ filteredResults: sorted, sort: "AZ name.first" });
    }
  };

  // render
  render() {
    return (
      <div>
        <Header></Header>
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Table
          results={this.state.filteredResults}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default Index;