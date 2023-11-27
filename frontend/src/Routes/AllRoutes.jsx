import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { NewArtSubmission } from './NewArtSubmission'


export const AllRoutes = () => {

  return (
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/newSumbission' element={<NewArtSubmission />}/>
    </Routes>
  )
}
