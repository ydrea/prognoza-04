import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "cities",
  initialState: [
    { id: 1, city: "city1", fav: false },
    { id: 2, city: "city2", fav: false },
    { id: 3, city: "city3", fav: false },
    { id: 4, city: "medo4", fav: true },
  ],
  reducers: {
    addCity: (state, action) => {
      const noviGrad = {
        city: action.payload.city,
        id: Date.now(),
        // id: action.payload.city.id,
        fav: false,
      };
      state.push(noviGrad);
    },
  },
});

export const { addCity } = apiSlice.actions;

export default apiSlice.reducer;
