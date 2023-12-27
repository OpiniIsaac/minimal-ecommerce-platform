import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard'; 

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Grid container spacing={2} sx={{padding:5}}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
