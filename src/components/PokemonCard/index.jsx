import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';
import { CardActionArea } from '@mui/material';

export default function PokemonCard({name, image, types}) {
  const typeHandle = () => {
    if (types[1]){
      return "Type: " + types[0].type.name + " and " + types[1].type.name;
    }
    return "Type: " + types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345, marginRight:"1em", marginBottom:"1em" }}>
      <CardActionArea>
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

          <Typography gutterBottom variant="caption" component="div">
            {typeHandle()}
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
    </CardActionArea>
    </Card>
    
  );
}