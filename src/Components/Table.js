import React from "react";
import "./Table.css";

function Table() {
    function sortName(prop){
        console.log(prop)
        
    }
  return (
    <table className="table">
        <thead>
            <tr>
                <th onClick={()=>sortName("image")} scope="col">Image</th>
                <th onClick={sortName} scope="col">Name</th>
                <th onClick={sortName} scope="col">Phone</th>
                <th onClick={sortName} scope="col">email</th>
                <th onClick={sortName} scope="col">D.O.B.</th>
            </tr>
        </thead>
    </table>
  );
}

export default Table;