import { useState, useEffect, useRef, KeyboardEvent } from "react";

import { Button } from "./components/button/button";
import { Input } from "./components/input/input";

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
        <h1 className="header__title">todos</h1>
      </header>
      <main className="main">
        <Button
          title="add"
          isActive={false}
          onClick={() => console.log("Test click")}
        />
        <Input
          text={text}
          handleInputChange={setText}
          handleAddTodo={handleAddTask}
          inputRef={inputRef}
        />
      </main>
      <footer className="footer"></footer>
    </>
  );
};
