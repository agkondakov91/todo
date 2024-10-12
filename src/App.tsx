import { useState, useEffect, useRef, KeyboardEvent } from "react";

import { Header } from "./components/header/header";
import { Input } from "./components/input/input";
import { Control } from "./components/control/control";

export const App = () => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Test to add todo");
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
          <Control />
        </section>
      </main>
      <footer className="footer"></footer>
    </>
  );
};
