import "./input.css";

type TInputProps = {
  text: string;
  inputRef: React.RefObject<HTMLInputElement>;
  handleInputChange: (str: string) => void;
  handleAddTodo: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = (props: TInputProps) => {
  return (
    <div className="todos__container">
      <div className="todos__icon"></div>
      <input
        type="text"
        className="todos__input"
        placeholder="What needs to be done?"
        value={props.text}
        ref={props.inputRef}
        onChange={(e) => props.handleInputChange(e.target.value)}
        onKeyDown={props.handleAddTodo}
      />
    </div>
  );
};
