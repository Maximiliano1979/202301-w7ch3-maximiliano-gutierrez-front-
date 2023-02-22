import { render, screen } from "@testing-library/react";
import CalculatorDisplay from "./CalculatorDisplay";

describe("Given a CalculatorDisplay", () => {
  describe("When clik on the buttons '4' and '2'", () => {
    test("Then it should display the number 42", () => {
      const value = 42;

      render(<CalculatorDisplay value={value} />);

      expect(screen.getByRole("textbox")).toHaveValue(value.toString());
    });
  });
});
