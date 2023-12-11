import React from 'react'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'
import { Footer } from '../Components/Footer'
import { Text } from '@chakra-ui/react'
import { RiCopyrightLine } from "react-icons/ri";
import style from '../CSS/Main.module.css'
import { SearchBar } from '../Components/SearchBar'

export const Main = () => {
  return (
    <div>
      <div>
        <Navbar />

      </div>

      


      <div className={style.allRoutesContainer}>
        <AllRoutes />

      </div>

      <div >
        <Footer />

        <div style={{ display: "flex", justifyContent: "center", marginTop: '50px', paddingBottom: "50px" }}>
          {/* <RiCopyrightLine color='white' style={{border: '2px solid red'}} /> */}
          <Text color='white' style={{ display: "flex", justifyContent: "center" }} ><RiCopyrightLine fontSize={'20px'} color='white' style={{ marginTop: "2px", marginRight: "5px" }} />  2023 Artist  <span style={{ marginLeft: '10px', marginRight: "10px" }}>|</span> All rights reserved</Text>
        </div>

      </div>
    </div>
  )
}
