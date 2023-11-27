import { Button, Image, Input, Stack, Text, Tooltip } from '@chakra-ui/react'
import style from '../CSS/Navbar.module.css'
import React from 'react'
import Logo from '../Assets/Artist Logo.jpg'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className={style.navbarContainer}>

      <div className={style.navbarContainerImage}>

        <div>
          <Stack direction='row'>
            <Link to={'/'}><Image
              // boxSize='100px'
              objectFit='cover'
              src={Logo}
              alt='Artist Logo'
            /></Link>

          </Stack>
        </div>

        {/* other stuff shop and search bar */}

        <div className={style.shopAndSearchContainer}>

          <div className={style.spanSection}>
            <span>|</span>
          </div>

          <div>
            <Text>Shop</Text>
          </div>

          <div className={style.spanSection}>
            <span>|</span>
          </div>

          {/* Search Bar */}

          <div className={style.navbarContainerSearchBar}>

            <div>

              <Input placeholder='Search' />
            </div>
            <div>
              <Button>
              <CiSearch fontSize={'20px'} />
              </Button>
              
            </div>


          </div>

        </div>


      </div>


      {/* Login section and other stuff */}
      <div className={style.navbarContainerLoginSection}>
        <div>Login</div>

        <div>
          <Tooltip hasArrow label='Submit your Art' bg='gray.300' color='black'>
          <Button className={style.submitBtn} variant={'none'}>
           <div style={{marginRight: "5px"}}>
           <IoMdAdd/>
           </div>
           Submit
          </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
