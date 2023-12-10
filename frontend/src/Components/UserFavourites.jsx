import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserFavouriteData } from '../Redux/UserFavouriteReducer/action'
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import styled from 'styled-components';


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
    <DIV style={{backgroundColor: "black", color: "white"}}>
      {/* spacing={3} templateColumns='repeat(4, minmax(250px, 1fr))' */}
      <SimpleGrid spacing={8} templateColumns='repeat(5, minmax(250px, 1fr))' >
        {
          userFavourite.map((el)=>(
            <Card key={el._id} style={{backgroundColor: "black"}}>
          <CardHeader style={{ color: "white"}}>
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
          
          <div style={{display: "flex", justifyContent: "center"}}>
          <Image
            // objectFit='cover'
            // width={'20%'}
            height={'180px'}
            src={`${el.post.image}`}
            alt='Chakra UI'
          />
          </div>

          <CardFooter
          display={'flex'}
            // justify='space-between'
            // flexWrap='wrap'

           
          >
            <Button color='white' flex='1' variant={'none'} leftIcon={<BiLike  />}>
              {`${el.post.likes}`}
            </Button>
            {/* leftIcon={<BiShare />} */}
            <Button color='white' flex='1' variant={'none'} leftIcon={<BiChat  />} >
              
            </Button>
            {/* <Button flex='1' variant='ghost' >
              Share
            </Button> */}
          </CardFooter>
        </Card>
          ))
        }
      </SimpleGrid>
    </DIV>
  )


}

const DIV = styled.div`
/* display: grid;
grid-template-columns: repeat(4, 1fr); */
  
  .photos {
    /* Prevent vertical gaps */
    line-height: 0;

    -webkit-column-count: 5;
    -webkit-column-gap: 5px;
    -moz-column-count: 5;
    -moz-column-gap: 5px;
    column-count: 5;
    column-gap: 10px;
  }

  .photos img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
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

  .bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
    opacity: 0; /* Initially not visible */
    transition: opacity 0.3s ease; /* Add transition for smooth effect */
    display: flex;
  }


.container {
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 8px;


}


  img:hover {
    /* filter: blur(2px); Blur the image on hover */
    cursor: pointer;
  }

  .container:hover .bottom-left-user,
  .container:hover .bottom-left,
  .container:hover .star,
  .container:hover .bottom-comment {
    opacity: 1; /* Increase opacity on hover */
  }

  .bottom-left-user {
    position: absolute;
    bottom: 80px;
    left: 16px;
    opacity: 0; /* Initially not visible */
    transition: opacity 0.3s ease; /* Add transition for smooth effect */
  }

  .bottom-comment {
    position: absolute;
    bottom: 68px;
    right: 16px;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
  }

  .star {
    position: absolute;
    bottom: 8px;
   right: 20px;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
  }

  .star:hover {
    color: #6def6d;
    cursor: pointer;
  }

  .bottom-comment:hover {
    color: #6def6d;
    cursor: pointer;
  }

`

