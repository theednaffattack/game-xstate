import App from "../App";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";

// Tests
test("Renders main page correctly", async () => {
  // Setup
  const rtl = render(<App />);
  // const buttonCount = await screen.findByRole("button");
  const buttonCount = await rtl.findByRole("button");
  const codeCount = rtl.queryByText(/The count is now:/);

  // Pre Expecations
  expect(buttonCount.innerHTML).toBe("count is: 0");

  // Instead of:
  // expect(codeCount).toBeNull();
  expect(codeCount).not.toBeInTheDocument();

  // Init
  user.click(buttonCount);
  user.click(buttonCount);

  // Post Expectation
  // expect(true).toBeTruthy();
  expect(rtl.queryByText(/The count is now:/)).toBeInTheDocument();
});
