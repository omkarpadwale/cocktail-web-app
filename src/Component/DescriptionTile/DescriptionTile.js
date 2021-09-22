import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const DescriptionTile=(data)=>{
    console.log(data.data)
    let ResponseRandomDrink=data.data;
    const AllSteps = () => {
    let steps = ResponseRandomDrink.strInstructions;
    return steps;
  };

  const AllIngredients = () => {
    let ingridient = "";
    if (ResponseRandomDrink.strIngredient1) {
      ingridient +=
        ResponseRandomDrink.strIngredient1 +
        " : " +
        ResponseRandomDrink.strMeasure1;
    }
    if (ResponseRandomDrink.strIngredient2) {
      ingridient +=
        "," +
        ResponseRandomDrink.strIngredient2 +
        " : " +
        ResponseRandomDrink.strMeasure2;
    }
    if (ResponseRandomDrink.strIngredient3) {
      ingridient +=
        "," +
        ResponseRandomDrink.strIngredient3 +
        " : " +
        ResponseRandomDrink.strMeasure3;
    }
    if (ResponseRandomDrink.strIngredient4) {
      ingridient +=
        "," +
        ResponseRandomDrink.strIngredient4 +
        " : " +
        ResponseRandomDrink.strMeasure4;
    }
    return ingridient;
  };

  return (
    <div>
    <header className="App-header">
    <Card
      sx={{ maxWidth: 650 }}
      style={{ padding: "50px"}}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="400px"
          width="700px"
          image={ResponseRandomDrink.strDrinkThumb}
          alt={ResponseRandomDrink.strDrink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ResponseRandomDrink.strDrink}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <b>Ingridient List :</b> {AllIngredients()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Procedure :</b> {AllSteps()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </header>
    </div>
  );}

  export default DescriptionTile