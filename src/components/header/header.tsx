import "./header.css";

type THeaderProps = {
  title: string;
};

export const Header = (props: THeaderProps) => {
  return <h1 className="header__title">{props.title}</h1>;
};
