import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../context/carSlice';

export default function ProductCard({name,price,id,image}) {
     const dispatch = useDispatch()
    
const maxLength = 10;
     const truncatedTitle = name.length > maxLength
     ? `${name.substring(0, maxLength)}...`
     : name;
   const addToCart=()=>{
dispatch( cartActions.addToCart({
     price,
     name,
     id
}))


   }
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          sx={
               {
                    objectFit:'contain'
               }
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {truncatedTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            UGX {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button  color="primary" variant='contained' onClick={addToCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}