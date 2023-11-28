import { Button, Image, Input, Stack, Text, Tooltip } from '@chakra-ui/react'
import style from '../CSS/Navbar.module.css'
import React from 'react'
import Logo from '../Assets/Artist Logo.jpg'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";

import { IoMdAdd } from "react-icons/io";
import { JoinDrawer } from '../Components/JoinDrawer'
import { LoginDrawer } from '../Components/LoginDrawer'
import { SearchBar } from '../Components/SearchBar'
import { HambergMenuItem } from '../Components/HambergMenuItem'

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
            <Text className={style.text}>Shop</Text>
          </div>

          <div className={style.spanSection}>
            <span>|</span>
          </div>

          {/* Search Bar */}

          <div className={style.navbarContainerSearchBar}>

            <div style={{ display: "flex" }}>
              <SearchBar />
            </div>

            <div className={`${style.spanSection} ${style.upgradeSpanSection}`}>
              <span>|</span>
            </div>

            <div className={style.upgradeContainer}>
              <Tooltip hasArrow label='Purchase Membership' bg='gray.300' color='black'>

                <Text className={style.upgradeToCore}>Upgrade to Core</Text>
              </Tooltip>
            </div>


          </div>

        </div>


      </div>


      {/* Login section and other stuff */}


      <div className={style.navbarContainerLoginSection}>



        <div>
          <JoinDrawer />
        </div>

        <div className={style.spanSection}>
          <span>|</span>
        </div>

        <div>
          <LoginDrawer />
        </div>

        <div className={`${style.spanSection} ${style.upgradeSpanSection}`}>
          <span>|</span>
        </div>

        <div className={style.submitBtnContainer}>
          <Tooltip hasArrow label='Upload your Art' bg='gray.300' color='black'>
            <Link to={'/newSumbission'}><Button className={style.submitBtn} variant={'none'}>
              <div style={{ marginRight: "5px" }}>
                <IoMdAdd />
              </div>
              Submit
            </Button>
            </Link>
          </Tooltip>
        </div>

        {/* <div className={`${style.spanSection} ${style.upgradeSpanSection}`}>
          <span>|</span>
        </div> */}


        {/* Hamberg */}
        <div className={style.hambergContainer}>
          <HambergMenuItem />
        </div>

      </div>
    </div>
  )
}
