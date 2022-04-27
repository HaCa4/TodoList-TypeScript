import React, { useState } from "react";

//CSS
import "./App.css";

//COMPONENTS
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

//CONSTANTS
import { AppText } from "./constants/Constants";
import { Todo } from "./constants/Constants";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  //ONCLICK HANDLER (ADD BUTTON)
  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">{AppText}</span>
      <InputField setTodo={setTodo} todo={todo} handleAdd={handleAdd} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
