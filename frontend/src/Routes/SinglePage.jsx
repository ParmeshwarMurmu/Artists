import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { store } from '../Redux/Store/store'
import { getSinglePageData } from '../Redux/SinglePageReducer/action'
import singlePageStyle from '../CSS/SinglePage.module.css'
import styled from "styled-components"
import { FaRegStar } from "react-icons/fa";
import { Avatar, Button, Flex, Heading, Image, Input, Stack, Text, Textarea, Tooltip, Wrap, WrapItem, useToast } from '@chakra-ui/react'
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { appContent } from '../ContextApi/ContextApi'
import { postUserComment, userCommentAction } from '../Redux/CommentReducer/action'
import { UserComments } from '../Components/UserComments'
import Emoji from '../Components/Emoji'
import { MoreArts } from '../Components/MoreArts'
// import { Emoji } from '../Components/Emoji'

export const SinglePage = () => {

  const [isHeightGreater, setIsHeightGreater] = useState(false);
  const {isAuth} = useContext(appContent)
  const { id } = useParams()
  console.log("singlePge ID", id);
  const dispatch = useDispatch()
  const toast = useToast()

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [Comment, setComment] = useState('');

  const handleEmojiSelect = (commentWithEmoji) => {
    setComment(commentWithEmoji);
    console.log(commentWithEmoji); // Display the comment with emoji in the console
  };

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
  }, shallowEqual)

  const { comment } = useSelector((store) => {
    return {
      comment: store.CommentReducer.comment,
    }
  }, shallowEqual)

  // console.log("singleData", singleData);

  const handleImageLoad = (e) => {
    const image = e.target;
    console.log(image.naturalHeight, "height");
    console.log(image.naturalWidth, "width");
    if (image.naturalHeight > image.naturalWidth) {
      setIsHeightGreater(true);
    }
    else if (image.naturalHeight === image.naturalWidth) {
      setIsHeightGreater("equal");
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


  const copyLinkHandler = async () => {
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

  //comment handler
  const commentSubmitHandler = ()=>{
    dispatch(postUserComment(id, comment))

  }

  useEffect(() => {
    dispatch(getSinglePageData(id))

  }, [])


  // console.log(isData && singleData.createdAt.split("T")[0]);
  // console.log("comment", comment);





  return (
    <DIV isHeightGreater={isHeightGreater} className={singlePageStyle.singlePageConatiner}>

      {/* main image container */}

      <div style={{ width: "75%" }}>

        <div className={singlePageStyle.singlePageImage}>


          <div className={'singleImage'}>

            <img src={singleData.image} alt="" onLoad={handleImageLoad} />
          </div>

        </div>



        <div className={singlePageStyle.favouriteAndDownloadContainer}>

          {/* Favourite and comment */}
          <div>

            <Tooltip hasArrow label='Add to favourite' bg='gray.300' color='black'>
              <Button  className={singlePageStyle.favComBtn} variant={'none'}><span className={singlePageStyle.spanTag}><FaRegStar /></span> Add to Favourites</Button>
            </Tooltip>

            <Tooltip hasArrow label='Comment' bg='gray.300' color='black'>
              <Button  className={singlePageStyle.favComBtn} variant={'none'}><span className={singlePageStyle.spanTag}><FaRegCommentAlt /></span> Comment</Button>
            </Tooltip>
          </div>


          {/* download and copy link */}
          <div>
            <Tooltip hasArrow label='Download' bg='gray.300' color='black'>
              <Button className={singlePageStyle.favComBtn}  variant={'none'} onClick={downloadImageHandler}><IoMdDownload /></Button>
            </Tooltip>

            <Tooltip hasArrow label='Copy Link' bg='gray.300' color='black'>
              <Button className={singlePageStyle.favComBtn}  variant={'none'} onClick={copyLinkHandler}><FaRegCopy /></Button>
            </Tooltip>

          </div>


        </div>



        <div className={singlePageStyle.userPostTitleContainer}>


          {/* user image and post title section */}
          <div className={singlePageStyle.userAndTitle}>

            <div style={{}}>

              <Wrap>
                <WrapItem>
                  <Avatar size='lg' borderRadius={'10px'} name={isData && singleData.user.firstName} src={isData && singleData.user.image} alt={isData && singleData.user.firstName} />
                </WrapItem>
              </Wrap>
            </div>


            {/* post Title */}
            <div className={singlePageStyle.postTitle} style={{ marginLeft: "10px" }}>
              <Heading as='h1' size='lg'>
                {isData && singleData.title}
              </Heading>

              <div className={singlePageStyle.userCredit}>
                <Text>by <span style={{ fontSize: "20px", fontWeight: "bold" }}>{isData && singleData.user.firstName}</span></Text>

              </div>
            </div>

          </div>


          {/* published at */}
          <div>
            <Text color={'white'}>Published: {isData && singleData.createdAt.split("T")[0]}</Text>
          </div>
        </div>


        {/* Like comment and views */}

        <div>
          <Button variant={'none'}><AiFillLike color={'grey'} /> <span style={{color: "grey", marginLeft: "5px"}}>34</span></Button>
          <Button variant={'none'}><FaCommentAlt color={'grey'}/> <span style={{color: "grey", marginLeft: "5px"}}>17</span></Button>
          <Button variant={'none'}><FaEye color={'grey'}/> <span style={{color: "grey", marginLeft: "5px"}}>100k</span></Button>
        </div>




        {/* Comment Box Section */}

        <div  className={singlePageStyle.commentContainer}>
          <Text>Comment 17</Text>

          <div className={singlePageStyle.logoCommentArea}>


            {/* comment logo */}
            <div style={{marginRight: "10px"}}>
              <FaUserCircle fontSize={'50px'} />
            </div>


            {/* comment text area */}

            <div style={{width: "100%"}}>
              <Textarea className={singlePageStyle.textArea} isDisabled={isAuth===false} placeholder={isAuth === true ? "Write some thoughts about his post" : "Please Login To Comment"}
              onChange={(e)=>{dispatch(userCommentAction(e.target.value))}}
              value={comment}
              // value={comment + (selectedEmoji ? selectedEmoji.native : '')}
              />
              {/* <Emoji   /> */}
              {/* <Emoji onEmojiSelect={handleEmojiSelect} /> */}

              
            </div>


           

          </div>

           



          <div style={{display: "flex", flexDirection: "row-reverse", marginTop: "10px"}}>
          <Button variant={'none'} className={singlePageStyle.commentBtn} onClick={commentSubmitHandler}>Comment</Button>
          </div>
        </div>


        {/* user Cmmnts */}
        <UserComments />



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
  /* border: 4px solid red; */
  width:  ${props => (props.isHeightGreater === true ? "32%" : "100%")};
  /* height:  ${props => (props.isHeightGreater === true ? "400px" : "100%")}; */
  /* box-shadow: rgb(255, 255, 255) 0px 20px 30px -10px; */

  /* position: relative;
  cursor: pointer;
  transition: all .3s; */
  /* box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px; */
  /* box-shadow: rgba(168, 166, 166, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px; */
}

.singleImage:hover{
  /* transform: scale(0.9); */
}

img{
  /* border: 1px solid grey; */
  /* width: ${props => (props.isHeightGreater === true ? "" : "100%")}; */
  width: ${props => (
    props.isHeightGreater === true
      ? ""
      : props.isHeightGreater === "equal"
        ? "50%"
        : "100%"
  )};
  height:  ${props => (props.isHeightGreater === true ? "500px" : "")};
  position: relative;
  cursor: pointer;
  transition: all .3s;
  /* box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px; */
  box-shadow: rgba(168, 166, 166, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

img:hover{
  transform: scale(0.9);
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