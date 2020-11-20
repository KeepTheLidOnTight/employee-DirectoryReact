import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <search className="col-4 d-inline">
      <input
            value={props.value}
            onChange={props.handleInputChange}
            className="form-control mb-3" 
            type="text" 
            placeholder="Search for an Employee" 
            />
    </search>
  );
}

export default Search;