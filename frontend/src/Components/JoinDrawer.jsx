import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text, Tooltip, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import style from '../CSS/Navbar.module.css'
import { FaUserLarge } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import artVideo from '../Assets/Artist_Video.mp4'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { registerFirstNameAction, registerConfirmPasswordAction, registerEmailAction, registerLastNameAction, registerPasswordAction } from '../Redux/UserRegisterReducer/action';
// import { registerConfirmPasswordAction, registerEmailAction, registerFirstNameAction, registerLastNameAction, registerPasswordAction } from '../Redux/UserRegistrationReducer/action';
export const JoinDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const dispatch = useDispatch()
    const ref = useRef(null)
    const [verify, setVerify] = useState("")
    
    const {firstName, lastName, email, password, confirmPassword} = useSelector((store)=>{
        return {
            firstName: store.UserRegistrationReducer.firstName,
            lastName: store.UserRegistrationReducer.lastName,
            email: store.UserRegistrationReducer.email,
            password: store.UserRegistrationReducer.password,
            confirmPassword: store.UserRegistrationReducer.confirmPassword,
        }
    }, shallowEqual)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const confirmPasswordToggle = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
    }

    const checkPasswordStrength = (pass)=>{
        const alpha = "abcdefghijklmnopqrstuvwxyz"
        const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numeric = "0123456789";
        const specialChar = "!`@#$%^&*()_+=-{}[]|,.<>?/";
        if(pass.length >= 6){
            let hasLowercase = false;
            let hasUppercase = false;
            let hasNumeric = false;
            let hasSpecialChar = false;
        
            for (let i = 0; i < pass.length; i++) {
                const char = pass[i];
        
                if (alpha.includes(char)) {
                    hasLowercase = true;
                } else if (ALPHA.includes(char)) {
                    hasUppercase = true;
                } else if (numeric.includes(char)) {
                    hasNumeric = true;
                } else if (specialChar.includes(char)) {
                    hasSpecialChar = true;
                }
            }
        
            // Check for lowercase letters
            if (!hasLowercase) {
                return "Password should contain at least one lowercase letter";
            }
        
            // Check for uppercase letters
            if (!hasUppercase) {
                return "Password should contain at least one uppercase letter";
            }
        
            // Check for numeric digits
            if (!hasNumeric) {
                return "Password should contain at least one numeric digit";
            }
        
            // Check for special characters
            if (!hasSpecialChar) {
                return "Password should contain at least one special character";
            }
        
            // Password meets all criteria
            return "OK"; 
        }

    }

    const RegisterUserHandler = ()=>{

        const result = checkPasswordStrength(password)
        // console.log("result", result);
        if(result!=='OK'){
        //    ref.current = result;
          setVerify(result)
        }

        console.log(ref.current)
    

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
                            <Input placeholder='First name' value={firstName} onChange={(e)=>{dispatch(registerFirstNameAction(e.target.value))}}  />

                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='Last name' value={lastName} onChange={(e)=>{dispatch(registerLastNameAction(e.target.value))}} />

                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' value={email} onChange={(e)=>{dispatch(registerEmailAction(e.target.value))}} />

                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>{dispatch(registerPasswordAction(e.target.value))}}
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
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e)=>{dispatch(registerConfirmPasswordAction(e.target.value))}}
                                />
                              <Text>{verify}</Text>
                                <InputRightElement width="4.5rem">
                                    <IconButton
                                        variant={'none'}
                                        h="1.75rem"
                                        size="sm"
                                        onClick={confirmPasswordToggle}
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
                        <Button className={style.submitBtn} variant={'none'} onClick={RegisterUserHandler}>Register</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
