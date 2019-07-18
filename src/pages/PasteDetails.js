import React from "react";
import Section from "../components/Section";
import Subtitle from "../components/Subtitle";
import Divider from "../components/Divider";
import Content from "../components/Content";
import { getPaste } from "../utils/pasteApi";

function PasteDetails({ match }) {
  const { id } = match.params;
  const [paste, setPaste] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  //sobald sich die ID ändert, dann ruf useEffect() auf
  React.useEffect(() => {
    getPaste(id)
      .then(paste => {
        setPaste(paste);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <Section>
      {!loading && !paste && <div>Paste {id} not found </div>}
      {!loading && paste && (
        <div>
          <Subtitle>{paste.title}</Subtitle>
          <Divider />
          <Content> {paste.text}</Content>
        </div>
      )}
      {loading && <div>Loading...</div>}
    </Section>
  );
}

export default PasteDetails;
