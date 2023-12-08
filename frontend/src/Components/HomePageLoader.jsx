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


`