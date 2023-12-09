import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getMoreArtsData } from '../Redux/MoreArtsReducer/action';
import { Heading, Image, Stack } from '@chakra-ui/react';
import styled from 'styled-components';
import { getSggestedArtsData } from '../Redux/SuggestedArtsReducer/action';

export const MoreArts = () => {

    const { id } = useParams();
    // console.log("mortArts", id);
    const dispatch = useDispatch()


    const { isLoading, isError, isData, moreArts, suggestedArts } = useSelector((store) => {
        return {
            isLoading: store.MoreArtsReducer.isLoading,
            isError: store.MoreArtsReducer.isError,
            moreArts: store.MoreArtsReducer.moreArts,
            isData: store.MoreArtsReducer.isData,
            suggestedArts: store.SuggestedArtsReducer.suggestedArts,
        }
    }, shallowEqual)


    useEffect(() => {
        dispatch(getMoreArtsData(id))
        dispatch(getSggestedArtsData())

    }, [])

    // console.log("moreArts", moreArts);
    // console.log("moreArts", moreArts);
    // console.log("sArts", suggestedArts);



    return (
        <DIV >
            <Heading as='h6' size='sm' style={{ color: "white" }} mb={'15px'}>
                {isData && `More by ${moreArts[0].userName}`}
            </Heading>


            <div className='moreArtsContainer'>
                {
                    isData && moreArts.map((el) => (
                        <div className='arts' >
                            <Link to={`/singlePage/${el._id}`} >

                                <img className='artImg' src={el.image} alt='' />
                            </Link>
                        </div>
                    ))
                }


            </div>

            <Heading as='h6' size='sm' style={{ color: "white" }} mb={'15px'}>
                Suggested
            </Heading>

            <div className='moreArtsContainer'>
                {
                    isData && suggestedArts.map((el) => (
                        <div className='arts' >
                            <Link to={`/singlePage/${el._id}`} >
                                <img className='artImg' src={el.image} alt='' />
                            </Link>
                        </div>
                    ))
                }


            </div>
        </DIV>
    )
}


const DIV = styled.div`

.moreArtsContainer{
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px; */

    line-height: 0;

    -webkit-column-count: 3;
    -webkit-column-gap: 5px;
    -moz-column-count: 3;
    -moz-column-gap: 5px;
    column-count: 3;
    column-gap: 10px;
    margin-bottom: 40px
}

.moreArtsContainer img{
    width: 100% !important;
    height: auto !important;
}

.arts{
    /* border: 2px solid white; */
    margin: 8px;
    /* width: 80%; */
    /* height: 100px; */
}

.artImg{
    /* height: 100px; */
    /* width: 100%;     */


}


/* @media (max-width: 1200px) {
    .moreArtsContainer#photos {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
} */
  @media (max-width: 1000px) {
    .moreArtsContainer {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }


  @media (max-width: 800px) {
    .moreArtsContainer {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }


  @media (max-width: 400px) {
    .moreArtsContainer{
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  }
    
`