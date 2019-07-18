import React from "react";
import Section from "../components/Section";
import Headline from "../components/Headline";
import Divider from "../components/Divider";
import PasteForm from "../components/PasteForm";

function Paste() {
  return (
    <Section>
      <Headline> Add a new expense</Headline>
      <Divider />
      <PasteForm />
    </Section>
  );
}
export default Paste;
