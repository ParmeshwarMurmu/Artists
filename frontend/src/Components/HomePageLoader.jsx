import { Box,  Skeleton } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'


export const HomePageLoader = () => {

  return (
    <LoaderContainer>
    <Loader />
  </LoaderContainer>
    )
}


const DIV = styled.div`
/* background-color: white; */

`




const LoaderContainer = styled.div`
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

const Loader = styled.div`
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