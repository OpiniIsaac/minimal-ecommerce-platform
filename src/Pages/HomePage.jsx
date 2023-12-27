import { Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import Products from '../components/Products'
import { useSelector } from 'react-redux'

export default function HomePage() {
  const itemsList = useSelector(state=> state.cart.itemsList)
  console.log(itemsList)
  return (
    <>

<NavBar/>
<Products/>
    </>
  )
}
