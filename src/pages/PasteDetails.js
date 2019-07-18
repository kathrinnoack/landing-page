import React from "react";
import Section from "../components/Section";
import Subtitle from "../components/Subtitle";
import Divider from "../components/Divider";
import Content from "../components/Content";
import { getPaste } from "../utils/pasteApi";

const tempData = {
  1: {
    title: "some paste title",
    text: "some paste text"
  },
  2: {
    title: "another title",
    text: " more Text\nand another row"
  }
};

function PasteDetails({ match }) {
  const { id } = match.params;
  const [paste, setPaste] = React.useState(null);

  //sobald sich die ID ändert, dann ruf useEffect() auf
  React.useEffect(() => {
    getPaste(id)
      .then(paste => {
        setPaste(paste);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <Section>
      {!paste && <div>Paste {id} not found </div>}
      {paste && (
        <div>
          <Subtitle>{paste.title}</Subtitle>
          <Divider />
          <Content> {paste.text}</Content>
        </div>
      )}
    </Section>
  );
}

export default PasteDetails;
