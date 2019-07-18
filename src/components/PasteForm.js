import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const Input = styled.input`
  margin: 5px;
`;

function PasteForm() {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");

  function handleTitleChange(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(title, text);
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
        <textarea
          rows={8}
          placeholder="tell me more"
          value={text}
          onChange={handleTextChange}
          required={true}
        />
        <button>Add</button>
      </Form>
    </div>
  );
}

export default PasteForm;
