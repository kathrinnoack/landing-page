import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Fullscreen from "../components/Fullscreen";
import MainLogo from "../components/MainLogo";
import MainHeadline from "../components/MainHeadline";
import Section from "../components/Section";
import Divider from "../components/Divider";
import ButtonLink from "../components/ButtonLink";

function Landing() {
  return (
    <>
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2014/10/21/12/28/bills-496229_1280.jpg" />
        <MainLogo />
        <MainHeadline> Travel </MainHeadline>
      </Fullscreen>
      <Section>
        <h2>Let´s Travel</h2>
        <Divider />
        Countries
        <br />
        Tell me more!
        <br />
        🏖️
        <br />
        <ButtonLink to="/about">About me 🤔</ButtonLink>
      </Section>
    </>
  );
}

export default Landing;
