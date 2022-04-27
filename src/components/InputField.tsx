import React, { useRef } from "react";

//CONSTANTS
import { InputButton, InputFieldProps } from "../constants/Constants";

//CSS
import "./styles.css";

const InputField: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        className="inputBox"
        type="input"
        placeholder="Enter a task"
      />
      <button className="inputSubmit" type="submit">
        {InputButton}
      </button>
    </form>
  );
};

export default InputField;
