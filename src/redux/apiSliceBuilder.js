// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const pokemonApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.openweathermap.org/data/2.5/', //?&q=${city}',

//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`)
//     }

//     return headers
//   },
// })
//   }), //appid=53af3d2fdf27c517f767ade373c0734c

// endpoints: (builder) => ({
//   getPokemonByName: builder.query({
//     query: (name) => `forecast ${name}`, //city
//     // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur
//   }),
//   updatePokemon: builder.mutation({
//     query: ({ name, patch }) => ({
//       url: `pokemon/${name}`,
//       method: 'PATCH',
//       body: patch, // fetchBaseQuery automatically adds `content-type: application/json` to the Headers and calls `JSON.stringify(patch)`
//     }),
//   }),
// }),
