import React from 'react'
import { AppBar, Typography,Toolbar,Container } from "@material-ui/core";


const FooterSection = (props) => {
    return (
      <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="Ambience White">
              Made with love, Omkar
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>   
    )
  }
  
  export default FooterSection