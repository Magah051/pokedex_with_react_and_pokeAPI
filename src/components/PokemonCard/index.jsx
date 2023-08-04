import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';

export default function PokemonCard({name, image}) {
  return (
    <Card sx={{ maxWidth: 345, marginRight:"1em", marginBottom:"1em" }}>
      <CardMedia
        sx={{ height: "auto", paddingTop: "100%" }}
        image={image}
        title={name}
      />
      <CardContent>
      <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "clamp(0.5rem, 2vw, 1rem)",
            lineHeight: "1.2",
            overflow: "hidden",
          }}
        >
          {name}
        </Typography>
        
        {/*<Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>*/}
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
    </CardActions>*/}
    </Card>
  );
}