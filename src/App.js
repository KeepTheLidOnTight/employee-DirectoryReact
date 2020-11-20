import React from "react";
import Jumbotron from "./Components/Jumbotron";
import Search from "./Components/Search";
import Wrapper from "./Components/Wrapper";

// Originally had a header and table file but editing to make use of wrapper
function App() {
    document.title = "Find an Employee";
    return (
        <Wrapper>
            <Jumbotron />
            <Search />
        </Wrapper>
    );
};

export default App;
