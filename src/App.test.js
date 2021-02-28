import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/Take Home Test/i);
  expect(linkElement).toBeInTheDocument();
});
