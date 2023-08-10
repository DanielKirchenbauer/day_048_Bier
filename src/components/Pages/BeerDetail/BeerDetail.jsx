import React from 'react'
import { useEffect, useState } from 'react'
import { beerApiBaseLink } from '../../../assets/utilities/api';
import { useParams } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';

const BeerDetail = () => {


    const [beerDetails, setBeerDetails] =  useState();
    const [isLoading, setIsLoading] = useState(true);

    const params= useParams();
    const beerId = params.id;

    useEffect(() => {
        fetch(`${beerApiBaseLink}/${beerId}`)
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
    }, [beerId])

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
      {/* {beers.map((beer) => ( */}
        <div>
            <img src={beerDetails.image_url} alt="" />
            <h1>{beerDetails.name}</h1>
            <p>{beerDetails.tagline}</p>
            <div>
                <p>First brewed: {beerDetails.first_brewed}</p>
                <p>Attentuation level: {beerDetails.attenuation_level}</p>
            </div>
            <p>{beerDetails.description}</p>
        </div>
      {/* ))} */}
    </div>
    </>
  )
}

export default BeerDetail
