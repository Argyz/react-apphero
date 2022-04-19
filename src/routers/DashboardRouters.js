import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { Hero } from '../components/hero/Hero';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';



export const DashboardRouters = () => {

  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route exact path='/' element={<MarvelScreen />}></Route>
          <Route exact path='marvel' element={<MarvelScreen />}></Route>
          <Route exact path='dc' element={<DcScreen />}></Route>
          <Route exact path='search' element={<SearchScreen />}></Route>
          <Route exact path='hero/:heroId' element={<Hero />}></Route>{/* para pasarle un id */}
          <Route path='*' element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
      
    </>
  )
}
