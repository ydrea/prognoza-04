import { renderWithProviders } from "../test-utils";
import { render, screen } from "@testing-library/react";
import Nav from "../comps/Nav";
import Login from "../comps/Login";

//
describe("unit tests", () => {
  it("not redux, not routed", async () => {
    render(<Nav />);
    const hElement = screen.getByText(/nav/i);
    expect(hElement).toBeInTheDocument();
  });
  //
  it("redux!", async () => {
    renderWithProviders(<Login />);
    const hElement = screen.getByPlaceholderText(/e-mail/i);
    expect(hElement).toBeInTheDocument();
  });
});
