import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import BackgroundImage from "./components/BackgroundImage";
import Fullscreen from "./components/Fullscreen";
import MainLogo from "./components/MainLogo";
import Headline from "./components/Headline";

function App() {
  return (
    <>
      <GlobalStyle />
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2016/11/22/21/43/adventure-1850713_1280.jpg" />
        <MainLogo />
        <Headline>Travel</Headline>
      </Fullscreen>
    </>
  );
}

export default App;
