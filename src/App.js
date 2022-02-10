import React from "react";
import { Box } from "@material-ui/core";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Home from "./components/home/Home";
import DetailView from "./components/post/DetailView";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/details" component={DetailView} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
