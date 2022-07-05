import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getValue } from "@testing-library/user-event/dist/utils";

// export const getCitiesAsync = createAsyncThunk("call", async (city) => {
//   const resp = await fetch();
// `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${city}`;
//   if (resp.ok) {
//     const data = await resp.json();
//     console.log("ANXIOS", data);
//     return { data };
//   }
// });
// // console.log("anxios", data);

export const getEmAsync = createAsyncThunk("todos", async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${city}`
  );
  if (res.ok) {
    const dataJson = await res.json();
    return { dataJson };
  }
});

export const apiSlice = createSlice({
  name: "api",
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      const noviGrad = {
        city: action.payload.city,
        id: Date.now(),
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

    resetList: (state) => {
      return (state = []);
    },
    extraReducers: {
      [getEmAsync.fulfilled]: (state, action) => {
        return action.payload.dataJson;
      },
    },
  },
});

export const { addCity, toggleFav, deleteIt, resetList } = apiSlice.actions;

export default apiSlice.reducer;
