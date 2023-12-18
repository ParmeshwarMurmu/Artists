
import React from 'react'
import notFound from '../Assets/searchNot Found.jpg'
import { Heading, Highlight, Image } from '@chakra-ui/react'
import styled from 'styled-components'
import { BiSad } from "react-icons/bi";

export const UserPostNoItem = () => {
    return (
        <DIV>

            <div className='notFoundSearch'>

                <BiSad fontSize={'100px'} />

                <div className='head'>
                    <div>

                        <Heading as='h5' size='md'>
                            {/* <Highlight
                                query={['Sorry']}
                                styles={{  bg: 'teal.100' }}
                            > */}
                                No Favourites.
                            {/* </Highlight> */}
                        </Heading>

                        <Heading as='h5' size='md' mt={'10px'}>
                            Add Your First Art To Your Favourites.
                        </Heading>
                    </div>
                </div>
            </div>
        </DIV>
    )
}




const DIV = styled.div`

/* width: 100%; */
/* border: 2px solid black; */
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
color: white;

.notFoundSearch{
    /* border: 2px solid red; */
    display: flex;
    /* justify-content: center;
    align-items: center; */
}

.head{
    display: flex;
     justify-content: center;
    align-items: center;
    margin-left: 10px
}


@media screen and (max-width: 425px) {
  
    .notFoundSearch{
        flex-direction: column;
    }

}
    
`