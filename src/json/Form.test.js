import { renderWithProviders } from "../test-utils";
import { BrowserRouter } from "react-router-dom";
import List from "../comps/List";
import Card from "../comps/Card";
import Form from "../comps/Form";
import { fireEvent, screen } from "@testing-library/react";

import { rest } from "msw";
import { setupServer } from "msw/node";
//
const url = `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&units=metric&q=`;

export const handlers = [
  rest.get(url + "Rome", (req, res, ctx) => {
    return res(ctx.json("Rome"), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
//
const MockForm = () => {
  return (
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
};
const MockList = () => {
  return (
    <BrowserRouter>
      <List />
    </BrowserRouter>
  );
};

const MockCard = () => {
  return (
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  );
};

//
describe("input", () => {
  it("input field rendered", () => {
    renderWithProviders(<MockForm />);
    const inputEl = screen.getByPlaceholderText(/city/i);
    expect(inputEl).toBeInTheDocument();
  });
  it("input rendered", async () => {
    renderWithProviders(<MockForm />);
    const inputEl = screen.getByPlaceholderText(/city/i);
    const buttonEl = screen.getByRole("button", { type: /submit/i });
    // fireEvent.change(inputEl, { target: { value: /min/i } });
    fireEvent.click(buttonEl);
    renderWithProviders(<MockList />);
    renderWithProviders(<MockCard />);
    const cardListEl = await screen.findByTestId("test-0");
    expect(cardListEl).toBeInTheDocument();
    expect(inputEl.value).toBe("");
  });
});
