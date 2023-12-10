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

  console.log("userFavourite", userFavourite);


  return (
    <DIV style={{ backgroundColor: "black", color: "white" }}>
      {/* spacing={3} templateColumns='repeat(4, minmax(250px, 1fr))' */}
      {isLoading ? <HomePageLoader /> : <SimpleGrid spacing={8} className='simpleGrid' >
        {
          userFavourite.map((el) => (
            <Card key={el._id} style={{ backgroundColor: "black" }}>
              <CardHeader style={{ color: "white" }}>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={`${el.post.user.firstName} ${el.post.user.lastName}`} src={`${el.post.user.image}`} />

                    <Box>
                      <Heading size='sm'>{`${el.post.user.firstName} ${el.post.user.lastName}`}</Heading>
                      <Text>Creator</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant='none'
                    colorScheme='gray'
                    aria-label='See menu'

                    icon={<BsThreeDotsVertical color='white' />}
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text color='white'>
                  {`${el.post.title}`}
                </Text>
              </CardBody>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to={`/singlePage/${el.post._id}`}><Image
                className='image'
                  // objectFit='cover'
                  // width={'20%'}
                  height={'180px'}
                  src={`${el.post.image}`}
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
  
  


@media (max-width: 1200px) {
  .photos {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}


  @media (max-width: 1000px) {
    .photos {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }


  @media (max-width: 800px) {
    .photos {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
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

