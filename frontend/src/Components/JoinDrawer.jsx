import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import style from '../CSS/Navbar.module.css'
import { FaUserLarge } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import artVideo from '../Assets/Artist_Video.mp4'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { registerFirstNameAction, registerConfirmPasswordAction, registerEmailAction, registerLastNameAction, registerPasswordAction, registerResetAction } from '../Redux/UserRegisterReducer/action';
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';



export const JoinDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const dispatch = useDispatch()
    // const ref = useRef(null)
    const [verify, setVerify] = useState("")
    const [errorPass, setErrorPass] = useState(false)
    const [errorConfirmPass, setErrorConfirmPass] = useState(false)
    const [confirmPassMessage, setConfirmPassMessage] = useState("")
    const [valuePass, setValuePass] = useState("")
    const [confirmValuePass, setConfirmValuePass] = useState("")
    const toast = useToast()
    const navigate = useNavigate()

    const { firstName, lastName, email, password, confirmPassword } = useSelector((store) => {
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

    const checkPasswordStrength = (pass) => {
        const alpha = "abcdefghijklmnopqrstuvwxyz"
        const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numeric = "0123456789";
        const specialChar = "!`@#$%^&*()_+=-{}[]|,.<>?/";
        if (pass.length >= 6) {
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
        else {
            return "Password length should be greater than 6"
        }

    }

    const passwordHandleChange = (e) => {
        // console.log(e.target.value);
        setValuePass(e.target.value)
        const result = checkPasswordStrength(e.target.value)
        if (result !== 'OK') {
            //    ref.current = result;
            setErrorPass(true)
            setVerify(result)
            console.log(errorPass, "errPass");
        }
        else {
            setVerify("Strong Password")
            setErrorPass(false)
            dispatch(registerPasswordAction(e.target.value))
        }

    }

    const confirmPasswordHandleChange = (e) => {

        setConfirmValuePass(e.target.value)
        if (password !== e.target.value) {
            setErrorConfirmPass(true)
            setConfirmPassMessage("Both Pasword Should Match")
        }
        else {
            dispatch(registerConfirmPasswordAction(e.target.value))
            setErrorConfirmPass(false)
            setConfirmPassMessage("Password Matched")
        }

    }

    const RegisterUserHandler = () => {
        const data = {
            firstName,
            lastName,
            email,
            password
        }

        axios.post('https://artists-kg0g.onrender.com/user/register', data)
            .then((res) => {
                console.log(res)
                toast({
                    title: 'Account created.',
                    description: `${res.data.msg}`,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                dispatch(registerResetAction())
                setValuePass("")
                setConfirmValuePass("")
                setVerify("")
                setConfirmPassMessage("")
                onClose()
                // return <Navigate to={'/'}/>
                
            })
            .catch((err) => {
                console.log(err);
            })

        console.log(data)


    }







    return (
        <DIV errorPass={errorPass}>
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
                            <Input placeholder='First name' value={firstName} onChange={(e) => { dispatch(registerFirstNameAction(e.target.value)) }} />

                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='Last name' value={lastName} onChange={(e) => { dispatch(registerLastNameAction(e.target.value)) }} />

                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' value={email} onChange={(e) => { dispatch(registerEmailAction(e.target.value)) }} />

                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    className='password'
                                    style={{
                                        border: errorPass ? '1px solid red' : 'none', // Set border to transparent when there is an error
                                        // Add other styles based on conditions
                                    }}
                                    value={valuePass}
                                    focusBorderColor={errorPass ? 'transparent' : ''}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    // value={password}
                                    onChange={passwordHandleChange}
                                // (e)=>{dispatch(registerPasswordAction(e.target.value))}
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
                            <div>
                                <Text color={errorPass ? 'red' : 'green'} fontSize={'x-small'}>{verify}</Text>
                            </div>


                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPasswordConfirm ? 'text' : 'password'}
                                    placeholder="Confirm Password"
                                    value={confirmValuePass}
                                    disabled={errorPass}

                                    onChange={confirmPasswordHandleChange}
                                />

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
                            <div>
                                <Text color={errorConfirmPass ? 'red' : 'green'} fontSize={'x-small'}>{errorConfirmPass ? confirmPassMessage : confirmPassMessage}</Text>
                            </div>

                        </FormControl>



                    </DrawerBody>

                    <DrawerFooter>
                        <Button className={style.negativeBtn} variant='none' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button className={style.submitBtn} variant={'none'} onClick={RegisterUserHandler} isDisabled={errorPass || errorConfirmPass}>Register</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </DIV>
    )
}


const DIV = styled.div`

.password{
    border-color: ${props => (props.errorPass ? "red" : "")};
}

.errorMessage{
    /* color:  ${props => (props.errorPass === true ? "red" : "")}; */
    color: red;
}
    
`