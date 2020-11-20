import React from "react";
import "./Results.css";

// Functional component for displaying the Employee Information in Table Form
// Props were passed down from SearchContainer Class Component
function Result(props) {

    console.log("Props: ", props);
    // render the rows
    const renderRow = (result) => {
        return (
            <tr key={result.id.value}>
                <td><img src={result.picture.thumbnail} alt={result.name.first} className="img-fluid" style={{ margin: "0 auto" }}/></td>
                <td>{result.fullName}</td>
                <td>{result.age}</td>
                <td>{result.cell}</td>
                <td>{result.email}</td>
                <tb>{result.dob}</tb>
            </tr>
        )
    }


    
    return (
        <table className="employees">
            <thead>
                <tr>
                    <th>Image</th>
                    <th onClick={props.handleSortName}><span>Name: </span><i className="fa fa-sort-down"></i></th>
                    <th onClick={props.handleSortAge}><span>Age: </span><i className="fa fa-sort-down"></i></th>
                    <th onClick={props.handleSortPhone}><span>Phone: </span> <i className="fa fa-sort-down"></i></th>
                    <th>Email</th>
                    <th>D.O.B.</th>
                </tr>
            </thead>
            <tbody>
                {props.empResults.filter(emp => emp.fullName.toLowerCase().includes(props.search.toLowerCase())).map(result =>  //filtering
                    renderRow(result)   
                )}
            </tbody>
        </table>
    );

}

export default Result;