import React, { Component } from "react";
import SearchInput from "./Components/Usersearch";
import SearchResults from "./Components/Results";
import API from "../Utils/API";

// class component
class SearchContainer extends Component {

    //setting results to empty array
    state = {
        search: "",
        empResult: []
    };

    //component did mount
    componentDidMount(){
        API.getAllEmployees()
        .then(res => {
            const cleanData = res.data.results.map(emp => ({
                ...emp,
                fullName : emp.name.first + " " + emp.name.last,
                age: emp.dob.age
            }))
            this.setState({empResult : cleanData})
        })
    
        .catch(err => console.log(err));
    };

    // handler for searching
    handleInputChange = event => {
        let value = event.target.value;
        console.log("handleInputChange function running");
   
        this.setState({ 
            search : value 
        }, () => console.log("this state: " + this.state)
        
        );
    }

    // function to sort by name
    handleSortName = event => {
        this.setState({
            empResult : this.state.empResult.sort((x,y) => (x.fullName > y.fullName ? 1 : -1))
        })
     }
     //age
    handleSortAge = event => {
        this.setState({
            empResult : this.state.empResult.sort((x,y) => (x.age > y.age ? 1 : -1))
        })
    }
    //tele numba
    handleSortPhone = event => {
        this.setState({
            empResult : this.state.empResult.sort((x,y) => (x.cell > y.cell ? 1 : -1))
        })
    }

    //now render
    render(){
        console.log("this.state.search: ", this.state.search);
        console.log("this.handleInputchange: ", this.handleInputChange);

        return (
            <div>
                <SearchInput
                  search={this.state.search}                       
                  handleInputChange={this.handleInputChange}
                />
                <SearchResults 
                    search={this.state.search}                      
                    empResults={this.state.empResult}
                    handleSortName={this.handleSortName}
                    handleSortAge={this.handleSortAge}
                    handleSortPhone={this.handleSortPhone}
                />
            </div>
        );
    }
}

export default SearchContainer;