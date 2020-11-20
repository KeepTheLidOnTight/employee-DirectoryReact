import React from "react";
import "./Usersearch.css";

// this is the search bar
function SearchInput(props){
    return (
        <div>
            <span><p>Enter a Name to Search </p>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="Usersearch"
                placeholder="Enter a name to search"
                id="search"
            />
            </span>
        </div>
    )
}

export default SearchInput;