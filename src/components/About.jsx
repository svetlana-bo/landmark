import Paper from '@mui/material/Paper';

export default function About() {
    return (
<Paper id="about" elevation={2} sx={{
    paddingBottom: 3,  
    marginTop:3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    }}>
  <h3>About</h3>
  This page was created as a part of the school asignment 
</Paper>
    )
};