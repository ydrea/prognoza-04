import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { memoize } from "proxy-memoize";

export const useDispatchApi = () => useDispatch();

export const useSelectorApi = useSelector;

export const selectFav = memoize((state) =>
  state.api.filter((i) => i.fav === true)
);

export const selectlist = memoize((state) => state.api.map((i) => i.city.list));
