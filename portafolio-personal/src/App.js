import React from "react";
import { Button } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <div className="App">
  
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Miguel Ángel Hernández Velasco
          </Typography>
          <Button color="inherit">Sobre mi</Button>
          <Button color="inherit">Proyectos</Button>
          <Button color="inherit">Contáctame</Button>
        </Toolbar>
      </AppBar>


    </div>  
  );
}

export default App;
