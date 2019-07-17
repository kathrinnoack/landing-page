import React from "react";
import logo from "./logo.svg";
import GlobalStyle from "./components/GlobalStyle";
import BackgroundImage from "./components/BackgroundImage";
import Fullscreen from "./components/Fullscreen";

function App() {
  return (
    <>
      <GlobalStyle />
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2016/11/22/21/43/adventure-1850713_1280.jpg" />
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello</h1>
        </header>
      </Fullscreen>
    </>
  );
}

export default App;
