import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import HomeIcon from '@mui/icons-material/Home';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ 
        width: 500, 
        padding: 2 ,
        justifyContent: "center", 
        margin: "auto"
        }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
        label="Home" 
        icon={<HomeIcon />} 
        onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
        />
        <BottomNavigationAction 
        label="Landmarks" 
        icon={<ViewCarouselIcon />}
        onClick={() => document.getElementById("landmarks")?.scrollIntoView({ behavior: "smooth" })}
        />
        <BottomNavigationAction 
        label="About" 
        icon={<InfoIcon />} 
        onClick={() => window.location.hash = "#about"} />
      </BottomNavigation>
    </Box>
  );
}
