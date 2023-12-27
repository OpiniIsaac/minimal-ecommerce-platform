import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard({product}) {
const maxLength = 10;
     const truncatedTitle = product.title.length > maxLength
     ? `${product.title.substring(0, maxLength)}...`
     : product.title;
   
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
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
            UGX {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button  color="primary" variant='contained'>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}