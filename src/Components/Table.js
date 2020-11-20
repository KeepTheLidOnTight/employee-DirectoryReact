import React from "react";
import "./Table.css";


function Table(props) {
   
  return (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th onClick={props.handleSort} scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">email</th>
                <th scope="col">D.O.B.</th>
            </tr>
        </thead>      
        <tbody>
            {props.results.map((result, index) => {
                return ( 
                    <tr key={index}>
                        <td><img src={result.picture.thumbnail} alt="Profile"></img></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
  );
}


export default Table;