interface Props {
  label: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ label, className = "", onClick }: Props): JSX.Element => (
  <button className={`button ${className}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
