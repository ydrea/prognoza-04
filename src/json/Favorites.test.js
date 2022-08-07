import React from "react";
import { renderWithProviders } from "../test-utils";
import { BrowserRouter } from "react-router-dom";
import Favorites from "../comps/Favorites";
import Card from "../comps/Card";
//
const MockFavs = ({ noOfFavs }) => {
  return (
    <BrowserRouter>
      <Favorites noOfFavs={noOfFavs} />
    </BrowserRouter>
  );
};
//
const MockCard = ({ props }) => {
  return (
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  );
};

test("initially renders a correct # of favs", async () => {
  renderWithProviders(<MockFavs noOfFavs={0} />, <MockCard />);
  // const inputEl =
});
