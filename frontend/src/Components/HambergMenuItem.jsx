import { Button, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import style from '../CSS/Hamberg.module.css'
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";


export const HambergMenuItem = () => {
    return (
        <div>
            <Menu>
                <MenuButton className={style.hambergMenuButton}
                    as={IconButton}
                    aria-label='Options'
                    icon={<GiHamburgerMenu className={style.hambergIcon} color='white' fontSize={'30px'} />}
                    variant='none'

                />
                <MenuList className={style.menuList}>
                    <MenuItem >
                        <Tooltip hasArrow label='Upload your Art' bg='gray.300' color='black' placement='left'>
                            <Link to={'/newSumbission'}><Button className={style.submitBtn} variant={'none'}>
                                <div style={{ marginRight: "5px" }}>
                                    <IoMdAdd />
                                </div>
                                Submit
                            </Button>
                            </Link>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem command='⌘N'>
                        New Window
                    </MenuItem>
                    <MenuItem command='⌘⇧N'>
                        Open Closed Tab
                    </MenuItem>
                    <MenuGroup title='Help'>
                        <MenuItem>Docs</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    )
}
