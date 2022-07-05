import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateCity = createAsyncThunk("update", async () => {
  const response = await axios.post(
    `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${city}`
  );
  return response.data;
});

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    city: {
      id: "",
      city: "",
      fav: false,
    },
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.city = action.payload;
      state.pending = false;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;
