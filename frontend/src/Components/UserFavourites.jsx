import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserFavouriteData } from '../Redux/UserFavouriteReducer/action'
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { BiChat } from "react-icons/bi";


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
    <div style={{backgroundColor: "black", color: "white"}}>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
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
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'

                icon={<BsThreeDotsVertical color='white' />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
            {`${el.post.title}`}
            </Text>
          </CardBody>
          <Image
            objectFit='cover'
            src={`${el.post.image}`}
            alt='Chakra UI'
          />

          <CardFooter
          display={'flex'}
            // justify='space-between'
            // flexWrap='wrap'

           
          >
            <Button flex='1' variant={'none'} leftIcon={<BiLike />}>
              {`${el.post.likes}`}
            </Button>
            {/* leftIcon={<BiShare />} */}
            <Button flex='1' variant={'none'} leftIcon={<BiChat />} >
              
            </Button>
            {/* <Button flex='1' variant='ghost' >
              Share
            </Button> */}
          </CardFooter>
        </Card>
          ))
        }
      </SimpleGrid>
    </div>
  )


}
