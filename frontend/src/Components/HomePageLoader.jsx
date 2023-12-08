import { Box,  Skeleton } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'


export const HomePageLoader = () => {

  return (
        <DIV>

            <div id='loader'>

                {/* <div> */}
                    <Skeleton  height='400px' width='200px' margin={2} />
                    <Skeleton  height='400px' width='200px' margin={2} />
                    <Skeleton  height='400px' width='200px' margin={2} />
                    <Skeleton  height='400px' width='200px' margin={2} />
                    <Skeleton  height='400px' width='200px' margin={2} />
                    <Skeleton  height='400px' width='200px' margin={2} />
                    <Skeleton  height='400px' width='200px' margin={2} />
                    
                {/* </div> */}

                {/* <div> */}
                    <Skeleton  height='370px' width='180px'   margin={2}/>
                    <Skeleton  height='370px' width='180px'   margin={2}/>
                    <Skeleton  height='370px' width='180px'   margin={2}/>
                    <Skeleton  height='370px' width='180px'   margin={2}/>
                    <Skeleton  height='370px' width='180px'   margin={2}/>
                    <Skeleton  height='370px' width='180px'   margin={2}/>
                    <Skeleton  height='370px' width='180px'   margin={2}/>
                    
                {/* </div> */}



                

            </div>

            
            
        </DIV>
    )
}


const DIV = styled.div`

/* background-color: black; */
    
    #loader {
    /* Prevent vertical gaps */
    /* line-height: 0; */

    -webkit-column-count: 6;
    -webkit-column-gap: 2px;
    -moz-column-count: 6;
    -moz-column-gap: 2px;
    column-count: 6;
    column-gap: 2px;
  }

  #loader .img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
  }




  @media (max-width: 1200px) {
    #loader {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
  @media (max-width: 1000px) {
    #loader {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }
  @media (max-width: 800px) {
    #loader {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }
  @media (max-width: 400px) {
    #loader{
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  }

`