import * as React from "react";
import { useState, useEffect } from "react";
import DescriptionTile from "../Component/DescriptionTile/DescriptionTile";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

const RandomDrink = () => {
  const [ResponseRandomDrink, setResponseRandomDrink] = useState(false);
  useEffect(() => {
    GetRandomDrink();
  }, []);
  const GetRandomDrink = async () => {
    const res = await axios.get(
      "https://cocktail-api.azurewebsites.net/api/CocktailRandomRecipe"
    );
    setResponseRandomDrink(res.data.drinks[0]);
  };

  if (ResponseRandomDrink) {
    return <DescriptionTile data={ResponseRandomDrink} />;
  } else {
    return (  <LinearProgress />);
  }
};

export default RandomDrink;
