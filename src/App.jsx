import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import AllBeers from './components/Pages/AllBeers/AllBeers'
import Navbar from './components/shared/Navbar/Navbar'
import BeerDetail from './components/Pages/BeerDetail/BeerDetail'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/allbeers' element={<AllBeers/>}/>
      <Route path='/beerdetail' element={<BeerDetail/>}/>
    </Routes>
    </>
  )
}

export default App
