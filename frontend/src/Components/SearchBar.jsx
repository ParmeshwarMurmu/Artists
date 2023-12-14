import { Button, Input, Tooltip } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import style from '../CSS/Navbar.module.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSearchedQueryData, searchQuerySuccessAction } from '../Redux/SearchReducer/action';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

export const SearchBar = () => {

    const dispatch = useDispatch();
    const [serachParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const { query} = useSelector((store) => {
        return {
            query: store.SearchReducer.query,
            
        }
    }, shallowEqual)


    const handleKeyPress = (event) => {
        // Check if the Enter key is pressed (key code 13)
        // const params = {
        //     query
        // }

        // setSearchParams(params)

        if (event.key === 'Enter') {
            // console.log(event.key);
            // dispatch(getSearchedQueryData(query))
            // return <Navigate to='/search' />
            navigate('/search')
        }
        
    };

    const handleSearchQuery = (e)=>{
        // console.log(e.target.value);
        dispatch(searchQuerySuccessAction(e.target.value))
        // navigate('/search')
    }

    const handleSearchIcon = ()=>{
        
        // dispatch(getSearchedQueryData(query))
        navigate('/search')
    }

    // useEffect(()=>{

    //     const params = {
            
    //     }

    //     query && (params.query = query)

    //     query && setSearchParams(query)

    //     setSearchParams(params)
        
    // }, [serachParams])


    useEffect(() => {
        const params = {};
        query && (params.query = query);
        setSearchParams(params);
      }, [query, setSearchParams]);

    

   

    return (
        <>

            <div className={style.searchBarAndIcon}>
                <Tooltip hasArrow label='Search you favourite artist and arts' bg='gray.300' color='black'>
                    <Input className={style.input} placeholder='Search'
                    value={query}
                    onChange={handleSearchQuery}
                    onKeyDown={handleKeyPress}
                     />
                </Tooltip>
            </div>
            <div className={style.searchBarAndIcon}>
                <Button className={style.submitBtn} onClick={handleSearchIcon} variant={'none'}>
                    <CiSearch fontSize={'20px'} />
                </Button>

            </div>

        </>
    )
}
