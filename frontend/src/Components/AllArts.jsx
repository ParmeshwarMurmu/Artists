import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CardComponent } from './CardComponent'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAllArtsData } from '../Redux/AllArtsReducer/action'
import { HomePageLoader } from './HomePageLoader'

export const AllArts = () => {

  // const [data, setData] = useState([])

  const dispatch = useDispatch();



  const { isLoading, isError, isData, data } = useSelector((store) => {
    return {
      isLoading: store.AllArtsReducer.isLoading,
      isError: store.AllArtsReducer.isError,
      data: store.AllArtsReducer.data,
      isData: store.AllArtsReducer.isData,

    }
  }, shallowEqual)

  const { singlePageIsLoading} = useSelector((store) => {
    return {
      singlePageIsLoading: store.singlePageReducer.singlePageIsLoading,
    }
  }, shallowEqual)

  

  useEffect(() => {

    // axios.get(`http://localhost:8000/post/`)
    // axios.get(`https://artists-kg0g.onrender.com/post/`)
    //   .then((res)=>{
    //       console.log(res.data);
    //       setData(res.data.data)
    //   })
    //   .catch((err)=>{
    //       console.log(err);
    //   })

    dispatch(getAllArtsData())

  }, [])

  console.log("data", data)
  return (
    <DIV className="grid-container" isLoading={isLoading}>
      <section id="photos">
        {isLoading ? <HomePageLoader /> : data.map((el, index) => (
          <CardComponent key={index} {...el} />
        ))}
      </section>
    </DIV>
  )
}




const DIV = styled.div`

background-color: black;

.grid-container{
  padding-top: 20px;
  height: ${props => (props.isLoading  ? "600px" : "")};
}

  #photos {
    /* Prevent vertical gaps */
    line-height: 0;

    -webkit-column-count: 5;
    -webkit-column-gap: 5px;
    -moz-column-count: 5;
    -moz-column-gap: 5px;
    column-count: 5;
    column-gap: 10px;
  }

  #photos img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
  }





@media (max-width: 1200px) {
  #photos {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
  @media (max-width: 1000px) {
    #photos {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }
  @media (max-width: 800px) {
    #photos {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }
  @media (max-width: 400px) {
    #photos {
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
    filter: blur(2px); /* Blur the image on hover */
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
`;
