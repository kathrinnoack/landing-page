import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PasteForm() {
  return (
    <div>
      <Form>
        <input type="text" />
        <textarea />

        <button>Add</button>
      </Form>
    </div>
  );
}

export default PasteForm;
