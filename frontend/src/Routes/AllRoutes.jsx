import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { NewArtSubmission } from './NewArtSubmission'
import { PrivateRoute } from './PrivateRoute'
import { SinglePage } from './SinglePage'


export const AllRoutes = () => {

  return (
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/newSumbission' element={<PrivateRoute>
      <NewArtSubmission />
     </PrivateRoute>}/>
     <Route path='/singlePage/:id' element={<SinglePage/>} />
    </Routes>
  )
}
