import { Button, Input, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import style from '../CSS/Navbar.module.css'

export const SearchBar = () => {

    return (
        <>

            <div className={style.searchBarAndIcon}>
                <Tooltip hasArrow label='Search you favourite artist and arts' bg='gray.300' color='black'>
                    <Input className={style.input} placeholder='Search' />
                </Tooltip>
            </div>
            <div className={style.searchBarAndIcon}>
                <Button className={style.submitBtn} variant={'none'}>
                    <CiSearch fontSize={'20px'} />
                </Button>

            </div>

        </>
    )
}
