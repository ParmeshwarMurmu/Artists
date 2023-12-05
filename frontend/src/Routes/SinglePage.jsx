import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { store } from '../Redux/Store/store'
import { getSinglePageData } from '../Redux/SinglePageReducer/action'
import singlePageStyle from '../CSS/SinglePage.module.css'
import { MoreArts } from './MoreArts'
import styled from "styled-components"

export const SinglePage = () => {

  const [isHeightGreater, setIsHeightGreater] = useState(false);
  const { id } = useParams()
  console.log("singlePge ID", id);
  const dispatch = useDispatch()
  const { isLoading, isError, singleData, isData } = useSelector((store) => {
    return {
      isLoading: store.singlePageReducer.isLoading,
      isError: store.singlePageReducer.isError,
      singleData: store.singlePageReducer.singleData,
      isData: store.singlePageReducer.isData,
    }
  })

  console.log("singleData", singleData);

  const handleImageLoad = (e) => {
    const image = e.target;
    console.log(image.naturalHeight, "height");
    console.log(image.naturalWidth, "width");
    if (image.naturalHeight > image.naturalWidth) {
      setIsHeightGreater(true);
    }
  };



  useEffect(() => {
    dispatch(getSinglePageData(id))

  }, [id])



  return (
    <DIV isHeightGreater={isHeightGreater} className={singlePageStyle.singlePageConatiner}>

      {/* main image container */}

      <div className={singlePageStyle.singlePageImage}>

        {/* <StyledMainImage aspectRatio={aspectRatio}> */}
        <div className={'singleImage'}>

          <img src={singleData.image} alt="" onLoad={handleImageLoad} />
        </div>
        {/* </StyledMainImage> */}
      </div>


      {/* More Arts */}
      <div className={singlePageStyle.moreArts}>
        <MoreArts />
      </div>

    </DIV>
  )
}

const DIV = styled.div`
background-color: black;
color: white;

.singleImage{
  width:  ${props => (props.isHeightGreater === true ? "32%" : "100%")};
  display: flex;
  justify-content: center;
}

img{
  border: 1px solid grey;
}
  
`


const StyledMainImage = styled.div`
  width: ${(props) => `${props.aspectRatio * 100}%`};
  /* Adjust height as needed, or you can use 'auto' for dynamic height */
  height: 0;
  padding-bottom: ${(props) => `${100 / props.aspectRatio}%`};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* or object-fit: contain; depending on your preference */
  }
`