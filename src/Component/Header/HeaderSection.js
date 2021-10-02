import React from "react";
import { Box, Button } from "@material-ui/core";

const buttonStyle = {
  padding: "10px",
};

const HeaderSection = (props) => {
  return (
    <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
      <Button style={buttonStyle} color="primary" href="/">
        {" "}
        Get New Drink{" "}
      </Button>
      <Box>
        <Button style={buttonStyle} color="secondary" href="/randomdrink">
          Random Drink
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderSection;
