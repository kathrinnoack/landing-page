import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Landing from "./pages/Landing";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NewPaste from "./pages/NewPaste";
import NotFound from "./pages/NotFound";
import PasteDetails from "./pages/PasteDetails";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" exact component={About} />
          <Route path="/paste" exact component={NewPaste} />
          <Route pathe="paste/:id" excat component={PasteDetails} />
          <Route component={NotFound} />
        </Switch>
        <Footer>Made at 🏖️</Footer>
      </Router>
    </>
  );
}

export default App;
