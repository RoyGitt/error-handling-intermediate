import { useState } from "react";
import "./Form.css";
import Button from "../Button/Button";
import styled from "styled-components";

const FormControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  & .form__title {
    color: ${(props) => {
      return props.validity ? "#333" : "#ee5253";
    }};
    margin-top: 20px;
    font-size: 40px;
  }
  & .form__input {
    border: 2px solid
      ${(props) => {
        return props.validity ? "transparent" : "#ee5253";
      }};
    font-size: 1.6rem;
    outline: none;
    width: 80%;
    transition: all 0.2s;
  }
`;
const Form = (props) => {
  const [text, setText] = useState("");
  const [valid, setValid] = useState(true);
  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (text.trim().length === 0) {
      setValid(false);
      return;
    }
    setValid(true);
    const listItemData = {
      id: Math.random().toString(16),
      text: text.slice(0, 49),
    };
    props.onTextInput(listItemData);
    setText("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <FormControls validity={valid}>
        <h2 className="form__title">Course Goal</h2>
        <input
          type="text"
          onChange={inputHandler}
          value={text}
          className="form__input"
          placeholder={
            valid
              ? "Your goals go here...(50 words only)"
              : "No goals?(50 Words only)"
          }
        />
        <Button className="form__button">Add Goal</Button>
      </FormControls>
    </form>
  );
};

export default Form;
