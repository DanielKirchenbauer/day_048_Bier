import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import AllBeers from './components/Pages/AllBeers/AllBeers'
import Navbar from './components/shared/Navbar/Navbar'
import BeerDetail from './components/Pages/BeerDetail/BeerDetail'
import { beerApiBaseLink } from './assets/utilities/api';

function App() {

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
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/allbeers' element={<AllBeers/>}/>
      <Route path={`/beerdetail/:id/`} element={<BeerDetail/>}/>
    </Routes>
    </>
  )
}

export default App
