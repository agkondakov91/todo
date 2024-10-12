import { useState, useEffect, useRef, KeyboardEvent } from "react";

import { useDispatch } from "./store/store";
import { addTodo } from "./store/todoSlice";

import { Header } from "./components/header/header";
import { Input } from "./components/input/input";
import { TodoList } from "./components/todoList/todoList";
import { Control } from "./components/control/control";

export const App = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <>
      <header className="header">
        <Header title="todos" />
      </header>
      <main className="main">
        <section aria-label="todo list">
          <Input
            text={text}
            handleInputChange={setText}
            handleAddTodo={handleAddTask}
            inputRef={inputRef}
          />
          <TodoList />
          <Control />
        </section>
      </main>
      <footer className="footer"></footer>
    </>
  );
};
