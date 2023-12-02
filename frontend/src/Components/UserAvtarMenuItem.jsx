import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { UserAvtar } from './UserAvtar'
import { appContent } from '../ContextApi/ContextApi'
import { FaUser, FaUserEdit } from "react-icons/fa";

export const UserAvtarMenuItem = () => {

    const {userData} = useContext(appContent)

    return (
        <Menu>
            <MenuButton as={Button} variant={'none'} colorScheme='pink'>
                <UserAvtar/>
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile'>
                    <MenuItem><span style={{marginRight: "5px"}}><FaUserEdit /></span> {`${userData.firstName} ${userData.lastName}`}</MenuItem>
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}
