import React from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper/Wrapper";
import Search from "./components/Search/Search";

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
