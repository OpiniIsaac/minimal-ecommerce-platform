import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard() {

     const[data,setData] = React.useState('')
 



React.useEffect(()=>{


     const fetchProduct = async () => {

          try{
               const res =  await fetch('https://fakestoreapi.com/products/1');
               const data = await res.json()
               setData(data);
              
              }
           catch(error){
               console.log( error);
          }
     }

fetchProduct()

},[])

   
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt="green iguana"
          sx={
               {
                    objectFit:'contain'
               }
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Apples
          </Typography>
          <Typography variant="body2" color="text.secondary">
            UGX 10,000
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