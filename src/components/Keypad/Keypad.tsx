import Button from "../Button/Button";

interface Props {
  onButtonClick: (label: string) => void;
}

const Keypad = ({ onButtonClick }: Props): JSX.Element => (
  <div className="keypad">
    <Button
      label="Clear"
      className="highlight"
      onClick={() => {
        onButtonClick("clear");
      }}
    />
    <Button
      label="C"
      className="highlight"
      onClick={() => {
        onButtonClick("backspace");
      }}
    />
    <Button
      label="÷"
      className="highlight"
      onClick={() => {
        onButtonClick("/");
      }}
    />
    <Button
      label="7"
      onClick={() => {
        onButtonClick("7");
      }}
    />
    <Button
      label="8"
      onClick={() => {
        onButtonClick("8");
      }}
    />
    <Button
      label="9"
      onClick={() => {
        onButtonClick("9");
      }}
    />
    <Button
      label="×"
      className="highlight"
      onClick={() => {
        onButtonClick("*");
      }}
    />
    <Button
      label="4"
      onClick={() => {
        onButtonClick("4");
      }}
    />
    <Button
      label="5"
      onClick={() => {
        onButtonClick("5");
      }}
    />
    <Button
      label="6"
      onClick={() => {
        onButtonClick("6");
      }}
    />
    <Button
      label="-"
      className="highlight"
      onClick={() => {
        onButtonClick("-");
      }}
    />
    <Button
      label="1"
      onClick={() => {
        onButtonClick("1");
      }}
    />
    <Button
      label="2"
      onClick={() => {
        onButtonClick("2");
      }}
    />
    <Button
      label="3"
      onClick={() => {
        onButtonClick("3");
      }}
    />
    <Button
      label="+"
      className="highlight"
      onClick={() => {
        onButtonClick("+");
      }}
    />
    <Button
      label="0"
      className="zero"
      onClick={() => {
        onButtonClick("0");
      }}
    />
    <Button
      label="."
      onClick={() => {
        onButtonClick(".");
      }}
    />
    <Button
      label="="
      className="highlight"
      onClick={() => {
        onButtonClick("=");
      }}
    />
  </div>
);

export default Keypad;
