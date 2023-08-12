import React from 'react'
import { useEffect, useState } from 'react'
import { beerApiBaseLink } from '../../../assets/utilities/api';
import { useParams } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';

const BeerDetail = () => {


    const [beerDetails, setBeerDetails] =  useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params= useParams();
    // const beerId = params.id;

    useEffect(() => {
        fetch(`${beerApiBaseLink}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error("Fetch went wrong!")
            }
            return response.json();
        })
        .then((beerDetailsData) => {
            setBeerDetails(beerDetailsData);
            setIsLoading(false);
        })
        .catch((error) => console.log(error.message));
    }, [beerDetails])

    const filteredBeer = beerDetails.filter((beer) => {
        return beer._id === params.id
    })

    // const [beers, setBeers] = useState([]);

    // useEffect(() => {
    //     fetch(`${beerApiBaseLink}`)
    //     .then((response) => {
    //       if(!response.ok) {
    //         throw Error("Fetch went wrong!");
    //       }
    //       return response.json();
    //     })
    
    //       .then((beerData) => setBeers(beerData))
    //       .catch((error) => console.log(error.message));
    
    //     }, [])

    if(isLoading) {
        return <p>...loading</p>
    }
  return (
    <>
    <Navbar/>
    <div>
      {filteredBeer.map((beer) => (
        <div key={beer._id}>
            <img src={beer.image_url} alt="" />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <div>
                <p>First brewed: {beer.first_brewed}</p>
                <p>Attentuation level: {beer.attenuation_level}</p>
            </div>
            <p>{beer.description}</p>
        </div>
       ))} 
       </div>
    </>
  )
}

export default BeerDetail
