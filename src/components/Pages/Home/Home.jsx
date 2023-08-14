import React, { useEffect, useState } from 'react'
import { beerApiBaseLink } from '../../../assets/utilities/api';
import AllBeers from '../AllBeers/AllBeers';
import { Link, Route, Routes } from 'react-router-dom'
import BeerPic from '../../../assets/images/BeerPic1.png'
import BeerPic2 from '../../../assets/images/BeerPic2.jpeg'

const Home = () => {
  const [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {

    fetch(`${beerApiBaseLink}/random`)
    .then((response) => {
      if(!response.ok) {
        throw new Error("Random beer fetch went wrong!")
      }
      return response.json();
    }) 
    .then((randomBeerData) => setRandomBeer(randomBeerData))
    .catch((error) => console.log(error.message));
  }, [])
    console.log(randomBeer);
    
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
      <div className="beer_picture">
      {/* <img src={BeerPic2} alt="Beer at the Bar" /> */}
      <div>
        <Link to={`/beerdetail/${randomBeer._id}`} >Random Beer</Link>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse veritatis veniam doloremque inventore adipisci sit voluptate ullam corporis nisi!
      </div>
    </section>
    </>
  )
}

export default Home
