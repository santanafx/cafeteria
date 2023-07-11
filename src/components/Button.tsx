interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <div className="buttonContainer">
      <a href="">{text}</a>
    </div>
  );
};
