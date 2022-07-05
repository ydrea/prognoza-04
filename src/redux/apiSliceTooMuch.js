import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

export const getCitiesAsync = createAsyncThunk("call", async () => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${city}`
  );
  if (resp.ok) {
    const data = await resp.json();
    console.log(data);
    return { data };
  }
});

export const addCityAsync = createAsyncThunk(
  "todos/addCityAsync",
  async (payload) => {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${city}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: payload.title }),
      }
    );

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

export const toggleFavAsync = createAsyncThunk("favAsync", async (payload) => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${payload.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fav: payload.fav }),
    }
  );

  if (resp.ok) {
    const todo = await resp.json();
    return { todo };
  }
});

export const deleteItAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${payload.id}`,
      {
        method: "DELETE",
      }
    );

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);

export const apiSlice = createSlice({
  name: "api",
  initialState: [{ id: "", city: "", fav: false }],
  reducers: {
    addCity: (state, action) => {
      const noviGrad = {
        id: action.payload.city.id,
        city: action.payload.city,
        fav: false,
      };
      state.push(noviGrad);
    },
    toggleFav: (state, action) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      state[index].fav = action.payload.fav;
    },
    deleteIt: (state, action) => {
      return state.filter((ii) => ii.id !== action.payload.id);
    },
    resetList: (state) => {
      return (state = []);
    },
  },
  extraReducers: {
    [getCitiesAsync.fulfilled]: (state, action) => {
      return action.payload.cities;
    },
    [addCityAsync.fulfilled]: (state, action) => {
      state.push(action.payload.city);
    },
    [toggleFavAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.api.id
      );
      state[index].completed = action.payload.api.fav;
    },
    [deleteItAsync.fulfilled]: (state, action) => {
      return state.filter((i) => i.id !== action.payload.api.id);
    },
  },
});

export const { addCity, toggleFav, deleteIt, resetList } = apiSlice.actions;

export default apiSlice.reducer;
