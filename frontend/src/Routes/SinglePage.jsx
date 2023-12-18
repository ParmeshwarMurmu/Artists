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
import { HomePageLoader } from '../Components/HomePageLoader'
// import { Emoji } from '../Components/Emoji'
import { Link } from 'react-scroll'
import AUdio from '../Assets/Like_Audio.mp3'
import { patchUserLikes } from '../Redux/LikesReducer/action'
import { addToFavouriteData } from '../Redux/AddToFavouriteReducer/action'
import { APP_URL } from '../Variables/Variables'

export const SinglePage = () => {

  const [isHeightGreater, setIsHeightGreater] = useState(false);
  const { isAuth } = useContext(appContent)
  const { id } = useParams()
  console.log("singlePge ID", id);
  const dispatch = useDispatch()
  const toast = useToast()
  const [like, setLike] = useState(0)

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



  const { comment, commentLoading } = useSelector((store) => {
    return {
      comment: store.CommentReducer.comment,
      commentLoading: store.CommentReducer.commentLoading,
    }
  }, shallowEqual)


  const { postComments } = useSelector((store) => {
    return {
      postComments: store.UserCommentReducer.postComments

    }
  }, shallowEqual)


  const { totalLikes, isLiked } = useSelector((store) => {
    return {
      totalLikes: store.LikesReducer.totalLikes,
      isLiked: store.LikesReducer.isLiked,
    }
  }, shallowEqual)


  const { msg, isAddedToFavourite } = useSelector((store) => {
    return {
      isAddedToFavourite: store.AddToFavouriteReducer.isAddedToFavourite,
      msg: store.AddToFavouriteReducer.msg,
    }
  }, shallowEqual)

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
      link.setAttribute('download', `${singleData.image}`);
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
  const commentSubmitHandler = () => {
    dispatch(postUserComment(id, comment))

  }

  const likeHandler = () => {
    setLike((prev) => prev + 1)

    const audio = new Audio(AUdio);
    audio.playbackRate = 1.30;
    audio.play();
    dispatch(patchUserLikes(id))

  }


  const token = localStorage.getItem('Artist-Token')
  const userId = localStorage.getItem('Artist-UserId')

  const headers = {
    Authorization: `bearer ${token}`,
  };

  const favouriteHandler = () => {
    if (isAuth) {
      // dispatch(addToFavouriteData(id))
      axios.post(`${APP_URL}/post/addToFavoutrite`, { id }, { headers })
        .then((res) => {
          console.log(res.data);
          // dispatch(addToFavouriteSuccessAction(res.data.msg))
          if(res.data.msg === 'Added to your Favourites'){
            toast({
              // title: '',
              description: `${res.data.msg}`,
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
          }
          else{
            toast({
              // title: '',
              description: `${res.data.msg}`,
              status: 'warning',
              duration: 4000,
              isClosable: true,
            })
          }
        })
        .catch((err) => {
          console.log(err);
          toast({
            // title: '',
            description: `Something went wrong`,
            status: 'warning',
            duration: 4000,
            isClosable: true,
          })
        })
    }
    else {
      toast({
        // title: '',
        description: `Please Login.`,
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
  }

 

  const views = ()=>{
    axios.patch(`${APP_URL}/post/views/${id}`)
            .then((res) => {
                console.log(res);
               
                
            })
            .catch((err) => {
                console.log(err);
                
            })
  }


  useEffect(() => {
    dispatch(getSinglePageData(id))
    views()
  }, [id])




  return (
    <DIV isLoading={isLoading} isHeightGreater={isHeightGreater} className={singlePageStyle.singlePageConatiner}>

      {/* main image container */}

      {isLoading ? <HomePageLoader /> : isData &&

        <div className={singlePageStyle.singlePageMainContainer}>

          <div className={singlePageStyle.singlePageImage}>


            <div className={'singleImage'}>

              <img className='mainImage' src={singleData.image} alt="" onLoad={handleImageLoad} />
            </div>

          </div>



          <div className={singlePageStyle.favouriteAndDownloadContainer}>

            {/* Favourite and comment */}
            <div>

              <Tooltip hasArrow label='Add to favourite' bg='gray.300' color='black'>
                <Button
                  onClick={favouriteHandler}
                  className={singlePageStyle.favComBtn} variant={'none'}><span className={singlePageStyle.spanTag}><FaRegStar /></span> Add to Favourites</Button>
              </Tooltip>

              <Link to='userComment' smooth={true} duration={500} offset={-50} >
                <Tooltip hasArrow label='Comment' bg='gray.300' color='black'>

                  <Button className={singlePageStyle.favComBtn} variant={'none'}><span className={singlePageStyle.spanTag}><FaRegCommentAlt /></span> Comment</Button>
                </Tooltip>
              </Link>
            </div>


            {/* download and copy link */}
            <div>
              <Tooltip hasArrow label='Download' bg='gray.300' color='black'>
                <Button className={singlePageStyle.favComBtn} variant={'none'} onClick={downloadImageHandler}><IoMdDownload /></Button>
              </Tooltip>

              <Tooltip hasArrow label='Copy Link' bg='gray.300' color='black'>
                <Button className={singlePageStyle.favComBtn} variant={'none'} onClick={copyLinkHandler}><FaRegCopy /></Button>
              </Tooltip>

            </div>


          </div>



          <div className={singlePageStyle.userPostTitleContainer}>


            {/* user image and post title section */}
            <div className={singlePageStyle.userAndTitle}>

              <div style={{}}>

                <Wrap>
                  <WrapItem>
                    <Avatar size='lg'  name={isData && singleData.user.firstName} src={isData && singleData.user.image} alt={isData && singleData.user.firstName} />
                  </WrapItem>
                </Wrap>
              </div>


              {/* post Title */}
              <div className={singlePageStyle.postTitle} style={{ marginLeft: "10px" }}>
                <Heading as='h1' size={{base: 'sm'}}>
                  {isData && singleData.title}
                </Heading>

                <div className={singlePageStyle.userCredit}>
                  <Text>by <span style={{ fontSize: "20px", fontWeight: "bold" }}>{isData && singleData.user.firstName}</span></Text>

                </div>
              </div>

            </div>


            {/* published at */}
            <div className={singlePageStyle.published}>
              <Text color={'white'}>Published: {isData && singleData.createdAt.split("T")[0]}</Text>
            </div>
          </div>


          {/* Like comment and views */}

          <div className={singlePageStyle.commentAndViews}>
            <Button variant={'none'} onClick={likeHandler}><AiFillLike color={isLiked ? 'rgb(17, 222, 123)' : 'grey'} /> <span style={{ color: "grey", marginLeft: "5px" }}>{totalLikes || singleData.likes}</span></Button>
            <Button variant={'none'}><FaCommentAlt color={'grey'} /> <span style={{ color: "grey", marginLeft: "5px" }}>{postComments.length > 0 && postComments.length}</span></Button>
            <Button variant={'none'}><FaEye color={'grey'} /> <span style={{ color: "grey", marginLeft: "5px" }}>{singleData.views > 0 && singleData.views} views</span></Button>
          </div>




          {/* Comment Box Section */}

          <div className={singlePageStyle.commentContainer}>
            {/* <Text>Comment 17</Text> */}

            <div className={singlePageStyle.logoCommentArea}>


              {/* comment logo */}
              <div style={{ marginRight: "10px" }}>
                <FaUserCircle fontSize={'50px'} />
              </div>


              {/* comment text area */}

              <div style={{ width: "100%" }}>
                <Textarea className={singlePageStyle.textArea} isDisabled={isAuth === false} placeholder={isAuth === true ? "Write some thoughts about his post" : "Please Login To Comment"}
                  onChange={(e) => { dispatch(userCommentAction(e.target.value)) }}
                  value={comment}


                />



              </div>




            </div>





            <div style={{ display: "flex", flexDirection: "row-reverse", marginTop: "10px" }}>
              <Button isDisabled={isAuth === false || comment.length === 0} variant={'none'} className={singlePageStyle.commentBtn} onClick={commentSubmitHandler}>Comment</Button>
            </div>
          </div>


          {/* user Cmmnts */}
          <div>
            {
              commentLoading ? <CommentLoaderContainer>
                <CommentLoader />
              </CommentLoaderContainer> : <UserComments />
            }
          </div>




        </div>
      }


      {/* More Arts */}
      {
        isLoading ? <HomePageLoader /> :

          <div className={singlePageStyle.moreArts}>
            <MoreArts />
          </div>
      }



    </DIV>
  )
}

const DIV = styled.div`
background-color: black;
color: white;
/* isLoading */
height:  ${props => (props.isLoading === true ? "700px" : "")};
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

.mainImage{
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

.mainImage:hover{
  transform: scale(0.9);
}



@media all and (min-width: 320px) and (max-width: 600px) {
  .mainImage{
    height:  ${props => (props.isHeightGreater === true ? "300px" : "")};
  }
    
}
  
`






const CommentLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Darkened background */
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 1000; Higher z-index to appear on top of other elements */
`;

const CommentLoader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;