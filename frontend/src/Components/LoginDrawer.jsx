import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text, Tooltip, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from '../CSS/Navbar.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export const LoginDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [showPassword, setShowPassword] = useState(false)
    // const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

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
                    <DrawerHeader>Welcome Back </DrawerHeader>

                    <DrawerBody>
                        <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Email' />


                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                        
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
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
