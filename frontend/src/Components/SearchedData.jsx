import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSearchedQueryData, searchQueryResetAction } from '../Redux/SearchReducer/action';
import { HomePageLoader } from './HomePageLoader';
import { CardComponent } from './CardComponent';
import { NoItem } from './NoItem';
import styled from 'styled-components';

export const SearchedData = () => {

  const dispatch = useDispatch();
  const [serachParams, setSearchParams] = useSearchParams()


  const initialSearch = serachParams.get("query")
  console.log("initialSearch", initialSearch);

  const { Data, isLoading, isData, isError } = useSelector((store) => {
    return {

      Data: store.SearchReducer.Data,
      isData: store.SearchReducer.isData,
      isError: store.SearchReducer.isError,
      isLoading: store.SearchReducer.isLoading,

    }
  }, shallowEqual)




  useEffect(() => {
    if (initialSearch) {
      dispatch(getSearchedQueryData(initialSearch));
    }
  }, [dispatch, initialSearch]);


  console.log(Data);


  return (
    <DIV isLoading={isLoading}>
      {
        isLoading === true ? <HomePageLoader /> : Data.length === 0 ? <NoItem /> : <div className="Searchcontainer" >
          <section id="searchImg">

            {Data.map((el, index) => (
              <CardComponent key={index} {...el} />
            ))}
        
          </section>
        </div>

      }
    </DIV>
  )
}

const DIV = styled.div`

height: ${props => (props.isLoading ? "600px" : "")};

  .Searchcontainer{
  padding-top: 20px;
  /* height: ${props => (props.isLoading ? "600px" : "")}; */
}

  #searchImg {
    /* Prevent vertical gaps */
    line-height: 0;

    -webkit-column-count: 5;
    -webkit-column-gap: 5px;
    -moz-column-count: 5;
    -moz-column-gap: 5px;
    column-count: 5;
    column-gap: 10px;
  }

  #searchImg img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
  }





@media (max-width: 1200px) {
  #searchImg {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
  @media (max-width: 1000px) {
    #searchImg {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }
  @media (max-width: 800px) {
    #searchImg {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }
  @media (max-width: 400px) {
    #searchImg {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
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

img{
  /* position: relative; */
  transition: all .3s;
  /* box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px; */
  /* box-shadow: rgba(168, 166, 166, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px; */

  }

  img:hover {
    /* filter: blur(2px); Blur the image on hover */
    transform: scale(0.9);
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