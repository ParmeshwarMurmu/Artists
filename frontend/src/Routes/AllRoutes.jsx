import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { NewArtSubmission } from './NewArtSubmission'
import { PrivateRoute } from './PrivateRoute'
import { SinglePage } from './SinglePage'
import { UserProfile } from '../Components/UserProfile'
import { UserPosts } from '../Components/UserPosts'
import { UserFavourites } from '../Components/UserFavourites'
import { SearchedData } from '../Components/SearchedData'


export const AllRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newSumbission' element={<PrivateRoute>
        <NewArtSubmission />
      </PrivateRoute>} />
      <Route path='/singlePage/:id' element={<SinglePage />} />
      <Route path='/userProfile' element={
        <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
      } />
      <Route path='/userPosts' element={
        <PrivateRoute>

          <UserPosts />
        </PrivateRoute>
      } />
      <Route path='/userFavourites' element={
        <PrivateRoute>

          <UserFavourites />
        </PrivateRoute>
      } />
      <Route path='/search' element={<SearchedData />} />
    </Routes>
  )
}
