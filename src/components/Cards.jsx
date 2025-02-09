import React, { useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import LandmarkDetail from "./LandmarkDetail";

import Meteora from "../assets/meteora.jpeg";
import SaoTome from "../assets/sao_tome.jpeg";
import Versailles from "../assets/Versailles.webp";
import Castle from "../assets/castle.webp";
import Petra from "../assets/petra.jpg";
import Machu from "../assets/machu.jpeg";
import Angkor from "../assets/Angkor.jpg";
import Santorini from "../assets/santorini.avif";
import Wall from "../assets/wall.jpeg";


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
    },
    {
      name: "Neuschwanstein Castle",
      description: "A fairy-tale castle in Bavaria, Germany, known for inspiring Disney’s Sleeping Beauty Castle.",
      image: Castle,
      details: {
        history: "Commissioned by King Ludwig II of Bavaria in 1869, but never fully completed.",
        facts: "Over 1.3 million people visit Neuschwanstein Castle each year."
      }
    },
    {
      name: "Petra",
      description: "An ancient city in Jordan, carved into pink sandstone cliffs and known as the 'Rose City'.",
      image: Petra,
      details: {
        history: "Established around the 4th century BC by the Nabataeans, it served as a major trade hub.",
        facts: "Petra was rediscovered by Swiss explorer Johann Burckhardt in 1812."
      }
    },
    {
      name: "Machu Picchu",
      description: "A well-preserved Incan citadel in the Andes Mountains of Peru.",
      image: Machu,
      details: {
        history: "Believed to have been built in the 15th century as an estate for Emperor Pachacuti.",
        facts: "Machu Picchu was hidden from the outside world until its rediscovery by Hiram Bingham in 1911."
      }
    },
    {
      name: "Angkor Wat",
      description: "The largest religious monument in the world, located in Cambodia.",
      image: Angkor,
      details: {
        history: "Originally built in the early 12th century as a Hindu temple, later transformed into a Buddhist site.",
        facts: "Angkor Wat appears on the national flag of Cambodia, symbolizing its cultural pride."
      }
    },
    {
      name: "Santorini",
      description: "A stunning Greek island known for its whitewashed houses, blue domes, and volcanic landscapes.",
      image: Santorini,
      details: {
        history: "Santorini was shaped by a massive volcanic eruption around 1600 BC, which led to its unique caldera.",
        facts: "The island’s famous sunsets in Oia attract thousands of visitors daily."
      }
    },
    {
      name: "Great Wall of China",
      description: "An extensive wall system built to protect China’s northern borders from invasions.",
      image: Wall,
      details: {
        history: "Construction began in the 7th century BC and continued through the Ming Dynasty (1368-1644).",
        facts: "The Great Wall stretches over 21,000 km and can be seen from space under specific conditions."
      }
    }
  ];

  return (
    <div id="landmarks">
      <Grid container spacing={2} justifyContent="center" sx={{ marginTop:1}}>
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
    </div>
  );
}
