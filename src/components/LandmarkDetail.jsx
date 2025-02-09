import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, CardMedia } from "@mui/material";

export default function LandmarkDetail({ open, onClose, landmark }) {
  if (!landmark) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{landmark.name}</DialogTitle>
      <DialogContent>
        <CardMedia
          component="img"
          height="200"
          image={landmark.image}
          alt={landmark.name}
          sx={{ borderRadius: 1, mb: 2 }}
        />
        <Typography variant="body1" gutterBottom>
          {landmark.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          History
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {landmark.details.history}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Interesting Facts
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {landmark.details.facts}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
