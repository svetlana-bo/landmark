import React, { useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import LandmarkDetail from "./LandmarkDetail";

import Meteora from "../assets/meteora.jpeg";
import SaoTome from "../assets/sao_tome.jpeg";
import Versailles from "../assets/Versailles.webp";

export default function Cards() {
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (landmark) => {
    setSelectedLandmark(landmark);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLandmark(null);
  };

  const landmarks = [
    {
      name: "Meteora Village",
      description: "A breathtaking rock formation in central Greece, home to ancient monasteries.",
      image: Meteora,
      details: {
        history: "Meteora's monasteries were built by monks seeking solitude and protection during the 14th century.",
        facts: "The rock pillars reach heights of up to 400 meters and are a UNESCO World Heritage site."
      }
    },
    {
      name: "Pico de São Tomé",
      description: "The highest peak in São Tomé and Príncipe, covered in dense rainforest.",
      image: SaoTome,
      details: {
        history: "Formed by volcanic activity, this mountain has been a key landmark for centuries.",
        facts: "It stands at 2,024 meters and is home to rare endemic species."
      }
    },
    {
      name: "Versailles",
      description: "A grand palace in France, symbolizing the absolute monarchy of the Ancien Régime.",
      image: Versailles,
      details: {
        history: "Originally a hunting lodge, it was transformed into a royal palace by Louis XIV in the 17th century.",
        facts: "It has over 2,300 rooms and the famous Hall of Mirrors, which was the site of the Treaty of Versailles in 1919."
      }
    }
  ];

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {landmarks.map((landmark, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }} onClick={() => handleOpen(landmark)}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={landmark.image} alt={landmark.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5">{landmark.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{landmark.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Landmark Detail Modal */}
      <LandmarkDetail open={open} onClose={handleClose} landmark={selectedLandmark} />
    </>
  );
}
