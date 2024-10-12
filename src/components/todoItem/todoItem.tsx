import "./todoItem.css";

import { useDispatch } from "../../store/store";
import { TTodo, toggleTodoCompleted } from "../../store/todoSlice";

export const TodoItem = (props: TTodo) => {
  const dispatch = useDispatch();

  return (
    <li className="main__list-item">
      <label>
        <input
          className="visually-hidden"
          type="checkbox"
          checked={props.completed}
          onChange={() => dispatch(toggleTodoCompleted(props.id))}
        />
        <span></span>
        <p className="main__list-item-text"></p>
      </label>
    </li>
  );
};
