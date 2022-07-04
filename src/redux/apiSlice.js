import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
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
    toggleFav: (state, action) => {
      const idX = state.findIndex((i) => i.id === action.payload.id);
      console.log(idX);
      state[idX].fav = action.payload.fav;
    },
    deleteIt: (state, action) => {
      return state.filter((ii) => ii.id !== action.payload.id);
    },

    // resetList: (state) => (state = {}),
  },
});

export const { addCity, toggleFav, deleteIt } = apiSlice.actions;

export default apiSlice.reducer;
