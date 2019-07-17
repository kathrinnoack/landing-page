import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Landing from "./pages/Landing";
import About from "./pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={Landing} />

        <Route path="/about" exact component={About} />
      </Router>
      <Footer>Made at 🏖️</Footer>
    </>
  );
}

export default App;
