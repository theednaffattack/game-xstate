import App from "../App";
import { render } from "@testing-library/react";

// Tests
test("Renders main page correctly", async () => {
  // Setup
  const rtl = render(<App />);
  // const buttonCount = await screen.findByRole("button");
  const buttonCount = await rtl.findByRole("button");
  // Pre Expecations
  expect(buttonCount.innerHTML).toBe("count is: 0");
  // Init

  // Post Expectation
  expect(true).toBeTruthy();
});
