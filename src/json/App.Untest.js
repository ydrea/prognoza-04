import React from "react";
import { render } from "@testing-library/react";
// import TestRenderer from "react-test-render";
import App from "../App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("With React Testing Library", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store, wrapper;

  it('Shows "Hello world!"', async () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText(/unesi/i)).not.toBeNull();
  });
});
