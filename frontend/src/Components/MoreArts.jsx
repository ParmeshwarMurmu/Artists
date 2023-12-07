import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getMoreArtsData } from '../Redux/MoreArtsReducer/action';

export const MoreArts = () => {

    const { id } = useParams();
    console.log("mortArts", id);
    const dispatch = useDispatch()

    
  const { isLoading, isError,  isData, moreArts  } = useSelector((store) => {
    return {
      isLoading: store.MoreArtsReducer.isLoading,
      isError: store.MoreArtsReducer.isError,
      moreArts: store.MoreArtsReducer.moreArts,
      isData: store.MoreArtsReducer.isData,
    }
  }, shallowEqual)


  useEffect(() => {
    dispatch(getMoreArtsData(id))

  }, [])

  console.log("moreArts",moreArts);



  return (
    <div>MoreArts</div>
  )
}
