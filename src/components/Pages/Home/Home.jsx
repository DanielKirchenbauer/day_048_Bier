import React, { useEffect, useState } from 'react'
import { beerApiBaseLink } from '../../../assets/utilities/api';
import AllBeers from '../AllBeers/AllBeers';
import { Link, Route, Routes } from 'react-router-dom'
import BeerPic from '../../../assets/images/BeerPic1.png'

const Home = () => {

    
  return (
    <>
      <h1>Home</h1>
    <section>
      <img src={BeerPic} alt="Bottles behind the Bar" />
      <div>
        <Link to='/allbeers' >Allbeers</Link>
      </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at accusantium minus reprehenderit non eos dolore quas laborum, ipsum illum.
    </section>
    <section>

    </section>
    </>
  )
}

export default Home
