import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { UserAvtar } from './UserAvtar'
import { appContent } from '../ContextApi/ContextApi'
import { FaUser, FaUserEdit } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import styled from 'styled-components'
import { SlLogout } from "react-icons/sl";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const UserAvtarMenuItem = () => {

    const {userData, setIsAuth} = useContext(appContent)
    const toast = useToast()

    const logoutHandler = ()=>{
        localStorage.removeItem('Artist-Token')
        localStorage.removeItem('Artist-UserId')
        setIsAuth(false)
        toast({
            // title: 'Account created.',
            description: "Logout Successfully",
            status: 'success',
            duration: 4000,
            isClosable: true,
        })


    }

    return (
        <DIV>
        <Menu>
            <MenuButton as={Button} variant={'none'} colorScheme='pink'>
                <UserAvtar/>
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile'>
                    <Link to={'/userProfile'}><MenuItem><span style={{marginRight: "5px"}}><FaUserEdit /></span> {`${userData.firstName} ${userData.lastName}`}</MenuItem></Link>
                    <Link to={'/userPosts'}><MenuItem><span style={{marginRight: "5px"}}><FaFileImage /></span>Your Posts</MenuItem></Link>
                    <Link to={'/userFavourites'}><MenuItem><span style={{marginRight: "5px"}}><FaFileImage /></span>Your Favourites</MenuItem></Link>
                    <MenuItem><span style={{marginRight: "5px"}}><MdOutlinePayment /></span>Payments</MenuItem>
                   
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                    
                    <MenuItem><span style={{marginRight: "5px"}}><SlDocs /></span>Docs</MenuItem>
                    <MenuItem><span style={{marginRight: "5px"}}><FaQuestionCircle /></span>FAQ</MenuItem>
                   
                </MenuGroup>
                <MenuDivider />
                    <MenuItem as={Button} onClick={logoutHandler} variant={'none'} className='logoutBtn'><span style={{marginRight: "5px"}}><SlLogout color='black' /></span>Logout</MenuItem>
            </MenuList>
        </Menu>
        </DIV>
    )
}

const DIV = styled.div`

.logoutBtn{
  padding: 0px;
  margin: 0px;
  background-color: #3182ce;
  width: 100%;
}

.logoutBtn:hover{
    background-color: #63B3ED;
    cursor: pointer;
}
    
`