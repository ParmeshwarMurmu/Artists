import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { store } from '../Redux/Store/store'
import { getSinglePageData } from '../Redux/SinglePageReducer/action'

export const SinglePage = () => {

    const {id} = useParams()
    console.log("singlePge ID", id);
    const dispatch = useDispatch()
    const {isLoading, isError, singleData} = useSelector((store)=>{
        return {
            isLoading: store.singlePageReducer.isLoading,
            isError: store.singlePageReducer.isError,
            singleData: store.singlePageReducer.singleData,
        }
    })

    useEffect(()=>{
        dispatch(getSinglePageData(id))

    }, [id])

    console.log("singleData", singleData);

  return (
    <div>
     <img src={singleData.image} alt="" />
    </div>
  )
}
