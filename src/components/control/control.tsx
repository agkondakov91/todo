import "./control.css";

import { useDispatch, useSelector } from "../../store/store";
import { removeTodosCompleted, setFilter } from "../../store/todoSlice";

import { Button } from "../button/button";

export const Control = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.actionTodo.list);
  const currentFilter = useSelector((store) => store.actionTodo.filter);

  const activeTodos = todos.filter((todo) => !todo.completed).length;

  const itemsLeftText =
    currentFilter === "completed"
      ? "0 items left"
      : `${activeTodos} items left`;

  const handleClearCompleted = () => {
    dispatch(removeTodosCompleted());
  };

  return (
    <div className="main__control">
      <span>{itemsLeftText}</span>
      <div>
        <Button
          title="All"
          isActive={currentFilter === "all"}
          onClick={() => dispatch(setFilter("all"))}
        />
        <Button
          title="Active"
          isActive={currentFilter === "active"}
          onClick={() => dispatch(setFilter("active"))}
        />
        <Button
          title="Completed"
          isActive={currentFilter === "completed"}
          onClick={() => dispatch(setFilter("completed"))}
        />
      </div>
      <Button
        title="Clear completed"
        isActive={false}
        onClick={handleClearCompleted}
      />
    </div>
  );
};
