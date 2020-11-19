import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header ml-0">
      <h1>Employee Directory</h1>
      <p>Click on a carrot to filter by heading or use the search box to narrow your results.</p>
    </header>
  );
}

export default Header;