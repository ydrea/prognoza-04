import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
// import { Api } from "./apiCall";

export const getEmAsync = createAsyncThunk("callEm", async (payload) => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?appid=53af3d2fdf27c517f767ade373c0734c&q=${payload.city}`, {
      // 
    }
      );
  if (resp.ok) {
    const city = await resp.json();
    // console.log("FETCHED", data);
    return { city };
  } else {
    return "anxios";
  }
});

export const apiSlice = createSlice({
  name: "api",
  initialState: [

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

    resetList: (state) => {
      return (state = []);
    },
  },extraReducers:{
[getEmAsync.pending]: (state, action)=>{
  console.log('vozi...')
},
    [getEmAsync.fulfilled]: (state, action)=>{
    //  state.push(action.payload.city) 
    const noviGrad = {
      city: action.payload.city,
      // id: Date.now(),
      id: action.payload.city.city.id,
      ime: action.payload.city.city.name,
      fav: false,
    };
    state.push(noviGrad);


    //  return action.payload.city
    },
    [getEmAsync.rejected]: (state, action)=>{
      console.log('yilch')
    }
  }
//   extraReducers: (builder) => {
//     builder.addCase(fetchByName.fulfilled, (state, action) => {
//       // console.log(payload);
//       return action.payload.data;
//       // state.cities.push(action.payload);
//     }),
//    builder.addCase(fetchByName.rejected), (state, action) => {
// state.status = 'failed';
// state.error = action.error.message;
//    }
//   },
});



export const { addCity, toggleFav, deleteIt, resetList } = apiSlice.actions;

export default apiSlice.reducer;
