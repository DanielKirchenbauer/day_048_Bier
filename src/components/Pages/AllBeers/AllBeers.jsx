import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../../shared/Navbar/Navbar'
import { beerApiBaseLink } from '../../../assets/utilities/api';
import { Link, Route, Routes } from 'react-router-dom'
import App from '../../../App';


const AllBeers = () => {

    const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch(`${beerApiBaseLink}`)
    .then((response) => {
      if(!response.ok) {
        throw Error("Fetch went wrong!");
      }
      return response.json();
    })

      .then((beerData) => setBeers(beerData))
      .catch((error) => console.log(error.message));

    }, [])


  return (
    <>
        <Navbar/>
        <div>
        {beers.map((beer) => (
          <div key={beer._id}>
            <h1>{beer.name}</h1>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.description}</p>
            <p>Attentuation level: {beer.attenuation_level}</p>
            <Link to={`/beerdetail/${beer._id}`}>Details</Link>
          </div> 
          ))}
            <h1>Hallo from All Beers</h1>
        </div>
    </>
  )
}

export default AllBeers
