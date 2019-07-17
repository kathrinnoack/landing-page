import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Landing from "./pages/Landing";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />

          <Route path="/about" exact component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer>Made at 🏖️</Footer>
    </>
  );
}

export default App;
