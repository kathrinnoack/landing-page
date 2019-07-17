import React from "react";
import ButtonLink from "../components/ButtonLink";
import Section from "../components/Section";
import Headline from "../components/Headline";
import Divider from "../components/Divider";
import Avatar from "../components/Avatar";

function About() {
  return (
    <>
      <Section>
        <Headline>About me:</Headline>
        <Divider />
        <Avatar src="Lou.jpg" />
        <ButtonLink to="/">Back</ButtonLink>
      </Section>
    </>
  );
}

export default About;
