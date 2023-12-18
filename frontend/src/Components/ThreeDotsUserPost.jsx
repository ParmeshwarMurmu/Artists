import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getUserPostData } from '../Redux/UserPostReducer/action';
import { APP_URL } from '../Variables/Variables';


export const ThreeDotsUserPost = ({ id }) => {

    const token = localStorage.getItem('Artist-Token')
    const userId = localStorage.getItem('Artist-UserId')
    const toast = useToast();
    const dispatch = useDispatch()

    const headers = {
        Authorization: `bearer ${token}`,
    };

    const DeleteUserPost = () => {
    
        // axios.get(`https://again-art.onrender.com/post/userPost`, {headers})
        axios.delete(`${APP_URL}/post/userPost/delete/${id}`, { headers })
            .then((res) => {
                console.log(res);
                toast({
                    title: 'Delete Post',
                    description: `${res.data.msg}`,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                dispatch(getUserPostData())
                
            })
            .catch((err) => {
                toast({
                    title: 'Delete Post',
                    description: `${err.data.msg}`,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
                
            })
    }

    return (
        <DIV>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<BsThreeDotsVertical color='white' />}
                    variant='none'
                />
                <MenuList style={{ padding: "0px", margin: "0px" }}>
                    <MenuItem as={Button} className='threeDots' onClick={DeleteUserPost}>
                        Delete <span style={{ marginLeft: '10px' }}><MdDelete /></span>
                    </MenuItem>

                </MenuList>
            </Menu>
        </DIV>
    )
}

const DIV = styled.div`
.threeDots{
    background-color: rgb(17, 222, 123);
}


.threeDots:hover{
    background-color: rgb(80, 239, 112);
}
    
`