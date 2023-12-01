import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text, Tooltip, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from '../CSS/Navbar.module.css'
import { FaUserLarge } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import artVideo from '../Assets/Artist_Video.mp4'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
export const JoinDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const dipatch = useDispatch()
    
    const {firstName, lastName, email, password, confirmPassword} = useSelector((store)=>{
        return {
            firstName: store.UserRegisterReducer.firstName
        }
    }, shallowEqual)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const confirmPassword = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
    }

    

    return (
        <>
            <Button ref={btnRef} variant={'none'} onClick={onOpen}>
                <Tooltip hasArrow label='New User ? Register Now' bg='gray.300' color='black'>
                    <Text className={style.text}>Join</Text>
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
                    <DrawerHeader>Create Your First Art</DrawerHeader>

                    <DrawerBody>

                        <div style={{ marginBottom: "20px" }}>
                            <video
                                autoPlay
                                loop
                                muted
                                style={{ width: '100%', height: 'auto' }}
                            >
                                <source src={artVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <FormControl isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder='First name' />

                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='First name' />

                            <FormLabel>Email</FormLabel>
                            <Input placeholder='First name' />

                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                />
                                <InputRightElement width="4.5rem">
                                    <IconButton
                                        variant={'none'}
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleTogglePassword}
                                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                                    />
                                </InputRightElement>
                            </InputGroup>


                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPasswordConfirm ? 'text' : 'password'}
                                    placeholder="Password"
                                />
                                <InputRightElement width="4.5rem">
                                    <IconButton
                                        variant={'none'}
                                        h="1.75rem"
                                        size="sm"
                                        onClick={confirmPassword}
                                        icon={showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
                                    />
                                </InputRightElement>
                            </InputGroup>

                        </FormControl>



                    </DrawerBody>

                    <DrawerFooter>
                        <Button className={style.negativeBtn} variant='none' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button className={style.submitBtn} variant={'none'}>Register</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
