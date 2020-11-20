import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <Search className="col-4 d-inline">
        <form>
            <input
            value={props.value}
            onChange={props.handleInputChange}
            className="form-control mb-3" 
            type="text" 
            placeholder="Search for an Employee" 
            />
            <button
            onClick={props.handleFormSubmit}
            className="btn btn-primary mt-4">Search!</button>
            </form>
    </Search>
  );
}

export default Search;