import React from "react";
import styled from "styled-components";
import { postPaste } from "../utils/pasteApi";
import { Redirect } from "react-router-dom";
import { StyledButton } from "../components/ButtonLink";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const Input = styled.input`
  font-size: 18px;
  width: 80vw;
  margin: 5px;
`;

const Textarea = styled.textarea`
  font-size: 15px;
  width: 80vw;
  margin: 5px;
`;

function PasteForm() {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false); //weil Button erst lädt wenn geklickt
  const [paste, setPaste] = React.useState(null);

  function handleTitleChange(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    const newPaste = {
      title: title, // wenn gleich kann man auch nur title schreiben
      text: text
    };

    postPaste(newPaste)
      .then(paste => {
        setPaste(paste);
      })
      .catch(error => {
        console.error(error);
      });
  }

  //wenn state gesetzt, dann gib ihn zurück
  if (paste) {
    return <Redirect to={`/paste/${paste.id}`} />;
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Give it a title"
          value={title}
          onChange={handleTitleChange}
          required={true}
        />
        <Textarea
          rows={8}
          placeholder="tell me more"
          value={text}
          onChange={handleTextChange}
          required={true}
        />
        <StyledButton disabled={loading}>
          {loading ? "Loading..." : "Add"}
        </StyledButton>
      </Form>
    </div>
  );
}

export default PasteForm;
