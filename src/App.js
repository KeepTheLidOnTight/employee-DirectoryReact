import React from "react";
import Header from "./Components/Header";
import Table from "./Components/Table";
import Search from "./Components/Search";

// component
function App() {
  return (
    <div className="container-fluid pl-0 pr-0">
      <Header></Header>
      <Search></Search>
      <Table></Table>
    </div>
  );
}

export default App;
