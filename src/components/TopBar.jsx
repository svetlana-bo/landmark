import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


export default function TopBar() {
  return (
    <Box id="home" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Landmarks Page
          </Typography>
          <Button color="inherit" onClick={() => document.getElementById("cards")?.scrollIntoView({ behavior: "smooth" })}>
            Landmarks
          </Button>
          <Button color="inherit" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
