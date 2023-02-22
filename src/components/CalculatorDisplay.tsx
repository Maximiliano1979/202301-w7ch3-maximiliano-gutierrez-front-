interface Props {
  value: string;
}

const CalculatorDisplay = ({ value }: Props) => (
  <input type="text" value={value} readOnly />
);

export default CalculatorDisplay;
