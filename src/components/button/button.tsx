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
        props.isActive ? "main__button main__button-active" : "main__button"
      }
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
