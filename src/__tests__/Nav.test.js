import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../comps/Nav";

const MockNav = () => {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
};

test("alo", () => {
  render(<Nav />);
  const hElement = screen.getByText(/nav/i);
  expect(hElement).toBeInTheDocument();
});
