import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { store } from '../Redux/Store/store'
import { getSinglePageData } from '../Redux/SinglePageReducer/action'
import singlePageStyle from '../CSS/SinglePage.module.css'
import { MoreArts } from './MoreArts'
import styled from "styled-components"
import { FaRegStar } from "react-icons/fa";
import { Button, Tooltip, useToast } from '@chakra-ui/react'
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";

export const SinglePage = () => {

  const [isHeightGreater, setIsHeightGreater] = useState(false);
  const { id } = useParams()
  console.log("singlePge ID", id);
  const dispatch = useDispatch()
  const toast = useToast()

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenClick = () => {
    setIsFullScreen(!isFullScreen);
  };


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

  const downloadImageHandler = async () => {
    try {
      const response = await axios({
        url: singleData.image,
        method: 'GET',
        responseType: 'blob', // important: responseType should be 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${singleData.title}.jpg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
      // Handle error, e.g., show a message to the user
    }
  };

  
  const copyLinkHandler = async()=>{
    try {
      await navigator.clipboard.writeText(singleData.image);
      // You can show a success message to the user if needed
      
      toast({
        // title: 'Account created.',
        description: `Link Copied to your Clipboard`,
        status: 'success',
        duration: 4000,
        isClosable: true,
    })
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      toast({
        // title: 'Account created.',
        description: `Cannot Copy Link`,
        status: 'error',
        duration: 4000,
        isClosable: true,
    })
      // Handle error, e.g., show an error message to the user
    }
  }

  useEffect(() => {
    dispatch(getSinglePageData(id))

  }, [id])






  return (
    <DIV isHeightGreater={isHeightGreater} className={singlePageStyle.singlePageConatiner}>

      {/* main image container */}

      <div style={{width: "75%"}}>

        <div className={singlePageStyle.singlePageImage}>


          <div className={'singleImage'}>

            <img src={singleData.image} alt="" onLoad={handleImageLoad} />
          </div>

        </div>

        <div className={singlePageStyle.favouriteAndDownloadContainer}>
          
          {/* Favourite and comment */}
          <div>
          <Button><span><FaRegStar /></span> Add to Favourites</Button>
          <Button><span><FaRegCommentAlt /></span> Comment</Button>
          </div>
           

           {/* download and copy link */}
          <div>
          <Tooltip hasArrow label='Download' bg='gray.300' color='black'>
          <Button onClick={downloadImageHandler}><IoMdDownload /></Button>
          </Tooltip>

          <Tooltip hasArrow label='Copy Link' bg='gray.300' color='black'>
          <Button onClick={copyLinkHandler}><FaRegCopy /></Button>
          </Tooltip>

          </div>
        </div>

      </div>


      {/* More Arts */}
      <div className={singlePageStyle.moreArts}>
        <MoreArts />
      </div>

    </DIV>
  )
}

const DIV = styled.div`
/* background-color: black;
color: white; */

.singleImage{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid red;
  width:  ${props => (props.isHeightGreater === true ? "32%" : "100%")};
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