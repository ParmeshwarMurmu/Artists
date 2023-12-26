import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserFavouriteData } from '../Redux/UserFavouriteReducer/action'
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import styled from 'styled-components';
import { HomePageLoader } from './HomePageLoader';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FavNoItem } from './FavNoItem';
import { ThreeDotsUserFavourites } from './ThreeDotsUserFavourites';
import { APP_URL } from '../Variables/Variables';


export const UserFavourites = () => {
  const dispatch = useDispatch()


  const { isData, userFavourite, isError, isLoading } = useSelector((store) => {
    return {
      userFavourite: store.UserFavouriteReducer.userFavourite,
      isLoading: store.UserFavouriteReducer.isLoading,
      isError: store.UserFavouriteReducer.isError,
      isData: store.UserFavouriteReducer.isData,

    }
  }, shallowEqual)


  useEffect(() => {
    dispatch(getUserFavouriteData())

  }, [])

  // console.log("userFavourite", userFavourite);


  return (
    <DIV style={{ backgroundColor: "black", color: "white" }} isLoading={isLoading}>
      {/* spacing={3} templateColumns='repeat(4, minmax(250px, 1fr))' */}
      {isLoading ? <HomePageLoader /> : userFavourite.length ===0 ? <FavNoItem /> : <SimpleGrid spacing={8} className='simpleGrid' >
        {
          isData && userFavourite.map((el) => (
            <Card className='card' key={el._id} style={{ backgroundColor: "black" }}>
              <CardHeader style={{ color: "white" }}>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={`${el.post.user.firstName} ${el.post.user.lastName}`} src={`${  el.post.user.image}`} />

                    <Box>
                      <Heading size='sm'>{ `${el.post.user.firstName} ${ el.post.user.lastName}`}</Heading>
                      <Text>Creator</Text>
                    </Box>
                  </Flex>
                  {/* <IconButton
                    variant='none'
                    colorScheme='gray'
                    aria-label='See menu'

                    icon={<ThreeDotsUserFavourites id={el._id} />}
                  /> */}
                  <ThreeDotsUserFavourites id={el._id} />
                  
                </Flex>
              </CardHeader>
              <CardBody >
                <Text color='white'>
                  {`${el.post.title}`}
                </Text>

                {/* <ThreeDotsUserFavourites id={el._id} /> */}
              </CardBody>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to={`/singlePage/${el.post._id}`}><Image
                className='image'
                  // objectFit='cover'
                  // width={'20%'}
                  height={'180px'}
                  src={`${APP_URL}/Arts/${el.post.image}`}
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
                  {`${el.post.likes}`}
                </Button>
                {/* leftIcon={<BiShare />} */}
                <Button color='white' flex='1' variant={'none'} leftIcon={<BiChat />} >

                </Button>

                <Button color='white' flex='1' variant={'none'} leftIcon={<FaEye />} >
                {`${el.post.views}`}
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

  
`

