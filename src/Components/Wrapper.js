import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
    //rest operator with the props 
  return <main className="wrap" {...props} />;
}
export default Wrapper;