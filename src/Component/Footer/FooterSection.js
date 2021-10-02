import React from 'react'
import { AppBar, Typography,Toolbar,Container } from "@material-ui/core";


const FooterSection = (props) => {
    return (
      <AppBar position="static" style={{ background: '#EEEEEE' }}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="primary">
              Made by, Omkar
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>   
    )
  }
  
  export default FooterSection