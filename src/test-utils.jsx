import React from 'react'
import {render} from '@testing-library/react'
import {setupStore} from './redux/store'
import { Provider } from 'react-redux'
import userReducer from './redux/userSlice' 
import apiReducer from './redux/apiSlice' 


export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore({ reducer: { user: userReducer, api:apiReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

// re-export everything
// export * from '@testing-library/react'
