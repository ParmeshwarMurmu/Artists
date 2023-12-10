import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserFavouriteData } from '../Redux/UserFavouriteReducer/action'

export const UserFavourites = () => {
  const dispatch = useDispatch()


  const { isData, userFavourite, isError,  isLoading } = useSelector((store) => {
    return {
      userFavourite: store.UserFavouriteReducer.userFavourite,
      isLoading: store.UserFavouriteReducer.isLoading,
      isError: store.UserFavouriteReducer.isError,
      isData: store.UserFavouriteReducer.isData,

    }
}, shallowEqual)

useEffect(()=>{
  dispatch(getUserFavouriteData())

}, [])

console.log("userFavourite", "userFavourite");


  return (
    <div>UserFavourites</div>
  )


}
