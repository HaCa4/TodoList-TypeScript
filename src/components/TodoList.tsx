import React from "react";

//CONSTANTS
import { TodoListProps } from "../constants/Constants";

//COMPONENTS
import SingleTodo from "./SingleTodo";

//CSS
import "./styles.css";

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
