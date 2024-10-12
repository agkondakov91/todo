import "./button.css";

type TButtonProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

export const Button = (props: TButtonProps) => {
  return (
    <button
      className={
        props.isActive ? "todos__button todos__button-active" : "todos__button"
      }
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
