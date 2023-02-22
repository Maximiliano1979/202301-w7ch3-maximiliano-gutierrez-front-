import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  const onClickMock = jest.fn();
  describe("When is clicked on it", () => {
    test("should call onClick callback", () => {
      const label = "Click me!";
      const { getByText } = render(
        <Button label={label} className="test-class" onClick={onClickMock} />
      );

      const button = getByText(label);
      fireEvent.click(button);

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
