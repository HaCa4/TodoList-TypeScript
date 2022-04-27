export const AppText:string="Do be Do be Do "
export const InputButton:string="Add"

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

export type SingleTodoProps = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  };
export interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }
export interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
  }