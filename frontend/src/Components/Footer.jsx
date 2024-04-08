import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import style from '../CSS/Footer.module.css'
import logo from '../Assets/Artist Logo.jpg'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Footer = () => {

  return (
    <DIV className={style.footerContainer}>

      <div>
        <div className={style.footerImg}>
          <img src={logo} alt="" />
        </div>

        <div className={style.icons}>
          <FaFacebookF fontSize={'20px'} className={style.facebook}/>
          <Link to="https://www.instagram.com/virat.kohli/">
            <FaInstagram fontSize={'20px'} className={style.instagram}/>
          </Link>
          
          <FaTwitter fontSize={'20px'} className={style.twitter}/>
        </div>
      </div>


      <div>
        

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          About
        </Heading>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Contact
        </Heading>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Core Membership
        </Heading>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
         Payments
        </Heading>

      </div>

      <div>
        

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Developers
        </Heading>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Advertise
        </Heading>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Terms of Service
        </Heading>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Etiquette
        </Heading>
      </div>


      <div>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Careers
        </Heading>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Privacy Policy
        </Heading>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Copyright Policy
        </Heading>

        <Heading className={`${style.heading} ${style.about}`} as='h4' size='sm'>
          Help and FAQ
        </Heading>


      </div>


      <div>
        <Text>Watch Team and join Community for news about features, events, and activities</Text>
      </div>

    </DIV>
  )

}

const DIV = styled.div`

.heading{
  margin-bottom: 20px
}
  
`
