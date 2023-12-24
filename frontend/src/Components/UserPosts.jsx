import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserPostData } from '../Redux/UserPostReducer/action'
import { Button, Card, CardBody, CardFooter, IconButton, Image, SimpleGrid, Text } from '@chakra-ui/react'
import styled from 'styled-components'

import { BiLike } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { HomePageLoader } from './HomePageLoader'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { ThreeDotsUserPost } from './ThreeDotsUserPost'
import { UserPostNoItem } from './UserPostNoItem'
import { APP_URL } from '../Variables/Variables'


export const UserPosts = () => {

  const dispatch = useDispatch()

  const { isData, userPost, isError, isLoading } = useSelector((store) => {
    return {
      userPost: store.UserPostReducer.userPost,
      isLoading: store.UserPostReducer.isLoading,
      isError: store.UserPostReducer.isError,
      isData: store.UserPostReducer.isData,

    }
  }, shallowEqual)

  console.log("userPost", userPost);

  useEffect(() => {
    dispatch(getUserPostData())

  }, [])

  return (
    <DIV style={{ backgroundColor: "black", color: "white" }} isLoading={isLoading}>
      {/* spacing={3} templateColumns='repeat(4, minmax(250px, 1fr))' */}
      {isLoading ? <HomePageLoader /> : userPost.length === 0 ? <UserPostNoItem /> : <SimpleGrid spacing={8} className='simpleGrid' >
        {
          isData && userPost.map((el) => (
            <Card className='card' key={el._id} style={{ backgroundColor: "black" }}>

              <CardBody style={{display: "flex", justifyContent: 'space-between'}}>
                <Text color='white'>
                  {`${el.title}`}
                </Text>

                <ThreeDotsUserPost id={el._id} />

              </CardBody>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to={`/singlePage/${el._id}`}><Image
                  className='image'
                  // objectFit='cover'
                  // width={'20%'}
                  height={'180px'}
                  src={`${APP_URL}/Arts/${el.image}`}
                  alt='Chakra UI'
                />
                </Link>
              </div>

              <CardFooter
                display={'flex'}
              // justify='space-between'
              // flexWrap='wrap'


              >
                <Button color='white' flex='1' variant={'none'} leftIcon={<BiLike />}>
                  {`${el.likes}`}
                </Button>
                {/* leftIcon={<BiShare />} */}
                <Button color='white' flex='1' variant={'none'} leftIcon={<BiChat />} >

                </Button>

                <Button color='white' flex='1' variant={'none'} leftIcon={<FaEye />} >
                  {`${el.views}`}
                </Button>
                {/* <Button flex='1' variant='ghost' >
            Share
          </Button> */}
              </CardFooter>
            </Card>
          ))
        }
      </SimpleGrid>
      }
    </DIV>
  )
}

const DIV = styled.div`

padding: 30px;
height:  ${props => (props.isLoading === true ? "700px" : "")};

.card{
  border: 1px solid #353740;

}
.simpleGrid{

display: grid;
grid-template-columns: repeat(4, 1fr);
/* border: 1px solid #353740; */
}

.image{
position: relative;
transition: all .3s;
/* box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px; */
box-shadow: rgba(168, 166, 166, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.image:hover{
cursor: pointer;
transform: scale(0.9);
}




@media (max-width: 1200px) {
.photos {
-moz-column-count:    4;
-webkit-column-count: 4;
column-count:         4;
}
}

@media all and (min-width: 768px) and (max-width: 1024px) {
  .simpleGrid{
display: grid;
grid-template-columns: repeat(3, 1fr);
}

    
}


@media all and (min-width: 500px) and (max-width: 767px) {
  .simpleGrid{

display: grid;
grid-template-columns: repeat(2, 1fr);
}
    
}


@media all and (min-width: 320px) and (max-width: 500px) {
  .simpleGrid{

display: grid;
grid-template-columns: repeat(1, 1fr);
}
    
}


@media (max-width: 400px) {
  .photos {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}


  
`
