import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, IconButton, Image, Input, InputGroup, InputRightElement, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import style from '../CSS/Navbar.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loginVideo from '../Assets/Artist_Login_Video.mp4';
import { FaHandsClapping } from "react-icons/fa6";
import communityWallpaper from '../Assets/Login_Community.png'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loginEmailAction, loginPasswordAction, loginResetAction } from '../Redux/UserLoginReducer/action';
import axios from 'axios';
import { appContent } from '../ContextApi/ContextApi';


export const LoginDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [showPassword, setShowPassword] = useState(false)
    // const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const {setIsAuth} = useContext(appContent)
    const toast = useToast()
    const dispatch = useDispatch()
    const { email, password } = useSelector((store) => {
        return {
            email: store.UserLoginReducer.email,
            password: store.UserLoginReducer.password,
        }
    }, shallowEqual)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const LoginHandler = ()=>{
        let data = {
            email,
            password
        }

        axios.post('http://localhost:8000/user/login', data)
        .then((res)=>{
            console.log(res);
            toast({
                // title: 'Account created.',
                description: `${res.data.msg}`,
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            onClose()
            setIsAuth(true)
            localStorage.setItem("Artist-Token", res.data.token)
            localStorage.setItem('Artist-UserId', res.data.userId)
        })
        .catch((err)=>{
            console.log(err);
        })

        console.log(data);
        dispatch(loginResetAction())
    }

    return (
        <>
            <Button ref={btnRef} variant={'none'} onClick={onOpen}>
                <Tooltip hasArrow label='Registered User' bg='gray.300' color='black'>
                    <Text className={style.text}>Login</Text>
                </Tooltip>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Welcome Back!</DrawerHeader>

                    <DrawerBody>

                        <div style={{marginBottom: "30px"}}>
                            <video
                                autoPlay
                                loop
                                // muted
                                defaultMuted
                                style={{ width: '100%', height: 'auto' }}
                                // controls
                            >
                                <source src={loginVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email'
                            onChange={(e)=>{dispatch(loginEmailAction(e.target.value))}}
                            value={email}
                             />


                            <FormLabel>Password</FormLabel>
                            <InputGroup>

                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>{dispatch(loginPasswordAction(e.target.value))}}
                                />
                                <InputRightElement width="4.5rem">
                                    <IconButton variant={'none'}
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleTogglePassword}
                                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                                    />
                                </InputRightElement>
                            </InputGroup>

                        </FormControl>

                        <div style={{marginTop: "30px"}}>
                            <Box >
                                <Image src={communityWallpaper} alt='Community Wallpaper' />
                            </Box>
                        </div>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button className={style.negativeBtn} variant='none' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button className={style.submitBtn} variant={'none'} onClick={LoginHandler}>Login</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
