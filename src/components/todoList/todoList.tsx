import { useSelector } from "../../store/store";

import { TodoItem } from "../todoItem/todoItem";

export const TodoList = () => {
  const todos = useSelector((store) => store.actionTodo.list);
  const filter = useSelector((store) => store.actionTodo.filter);

  const filterTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ul>
      {filterTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
