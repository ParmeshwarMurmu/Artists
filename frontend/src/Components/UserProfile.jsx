import { Avatar, Button, FormControl, FormLabel, IconButton, Image, Input, InputGroup, InputRightElement, Text, Tooltip, Wrap, WrapItem, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { appContent } from '../ContextApi/ContextApi'
import { LiaEdit } from "react-icons/lia";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import style from '../CSS/UserProfile.module.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { updateCityAction, updateFirstNameAction, updateLastNameAction, updatePasswordAction, updateStateAction } from '../Redux/UserProfileUpdateReducer/action';
import axios from 'axios';

export const UserProfile = () => {
    const { userData, userProfileLoading } = useContext(appContent)
    const fileInput = React.createRef();
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
    const stateInputRef = useRef(null);
    const cityInputRef = useRef(null);

    const [isEditing, setIsEditing] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [firstNameEdit, setFirstNameEdit] = useState(false);
    const [lastNameEdit, setLastNameEdit] = useState(false);
    const [stateEdit, setStateEdit] = useState(false);
    const [cityEdit, setCityEdit] = useState(false);

    const [valuePass, setValuePass] = useState("")
    const [verify, setVerify] = useState("")
    const [errorPass, setErrorPass] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const [confirmValuePass, setConfirmValuePass] = useState("")
    const [errorConfirmPass, setErrorConfirmPass] = useState(false)
    const [confirmPassMessage, setConfirmPassMessage] = useState("")
    const [refresh, setRefesh] = useState("")

    const token = localStorage.getItem('Artist-Token')
    const userId = localStorage.getItem('Artist-UserId')

    const toast = useToast()


    const dispatch = useDispatch();

    const { firstName, lastName, email, password, confirmPassword, state, city } = useSelector((store) => {
        return {
            firstName: store.UserProfileUpdateReducer.firstName,
            lastName: store.UserProfileUpdateReducer.lastName,
            state: store.UserProfileUpdateReducer.state,
            city: store.UserProfileUpdateReducer.city,
            password: store.UserProfileUpdateReducer.password,
            confirmPassword: store.UserProfileUpdateReducer.confirmPassword,
        }
    }, shallowEqual)



    // Handler for updating the first name
    const handleFirstNameChange = (e) => {
        // setUserData({
        //   ...userData,
        //   firstName: e.target.value,
        // });
        console.log(e.target.value,);
    };



    const onChange = (e) => {
        const file = e.target.files[0];
        console.log("Files", file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            // Set imageUrl in your component's state or wherever it's needed
            console.log("imageUrl");
            console.log(imageUrl);
            setImageURL(imageUrl);
        }


    };


    const handleEditClick = () => {
        setFirstNameEdit(true);

    };

    const handleLastNameEditClick = () => {
        setLastNameEdit(true);
    }


    const handleStateEdit = () => {
        setStateEdit(true)
    }

    const handleCityEdit = () => {
        setCityEdit(true)
    }


    // pASS

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

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
            dispatch(updatePasswordAction(e.target.value))
        }

    }


    const confirmPasswordHandleChange = (e) => {

        setConfirmValuePass(e.target.value)
        if (password !== e.target.value) {
            setErrorConfirmPass(true)
            setConfirmPassMessage("Both Pasword Should Match")
        }
        else {
            dispatch(updatePasswordAction(e.target.value))
            setErrorConfirmPass(false)
            setConfirmPassMessage("Password Matched")
        }

    }

    const confirmPasswordToggle = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
    }



    // let data = {
    //     firstName,
    //     lastName,
    //     state,
    //     city,
    //     password,

    // }



    // console.log(data);
    console.log(cityEdit);

    const updateUserHandler = (e) => {
        let data = {}
        // console.log(fileInput.current.files);
        // console.log(fileInput.current.files.length);

        const formData = new FormData();

        if (fileInput.current.files.length > 0) {

            formData.append("userImage", fileInput.current.files[0]);
            console.log(fileInput.current.files[0], "))))))");
            console.log(formData);
            data.image = formData
        }

        if (firstName) {
            // formData.firstName = firstName
            formData.append("firstName", firstName);

        }

        if (lastName) {
            // data.lastName = lastName
            formData.append("lastName", lastName);
        }

        if (state) {
            // data.state = state
            formData.append("state", state);
        }

        if (city) {
            // data.city = city
            formData.append("city", city);
        }

        if (password) {
            // data.password = password
            formData.append("password", password);
        }

        console.log("+++++++++++++++")
        console.log(formData);

        const headers = {
            Authorization: `bearer ${token}`,
        };

        axios.patch('http://localhost:8000/user/userProfileUpdate', formData, { headers })
            .then((res) => {
                console.log(res);
                toast({
                    title: 'Profile',
                    description: `Profile Updated Successfully`,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                toast({
                    title: 'Profile',
                    description: `Something Went Wrong`,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            })



    }

    useEffect(() => {
        if (firstNameEdit && firstNameInputRef.current) {
            firstNameInputRef.current.focus();
        }
    }, [firstNameEdit]);

    useEffect(() => {
        if (lastNameEdit && lastNameInputRef.current) {
            lastNameInputRef.current.focus();
        }
    }, [lastNameEdit]);

    useEffect(() => {
        if (stateEdit && stateInputRef.current) {
            stateInputRef.current.focus();
        }
    }, [stateEdit]);


    useEffect(() => {
        if (cityEdit && cityInputRef.current) {
            cityInputRef.current.focus();
        }
    }, [cityEdit]);



    useEffect(() => {

    }, [refresh]);




    return (

        
        <div className={style.userProfileContainer}>
            <div>
                <div className={style.uploadFile}>
                    {/* <Avatar size='2xl' name={`${userData.firstName} ${userData.lastName}`} src={userData.image} /> */}
                    <div>
                        <Wrap className={style.upload}>
                            <WrapItem>
                                <Avatar size='xl' name={userData.firstName} src={imageURL || userData.image} alt={userData.firstName} />
                            </WrapItem>
                        </Wrap>

                        <Text className={style.upload} mb={4}>Upload Image</Text>

                        <div className={style.uploadInput}>

                            <Input  type='file'
                                name="userImage"
                                ref={fileInput}
                                onChange={onChange}
                                borderRadius={'20px'}
                                variant={'none'}

                                // width={'20%'}
                                enctype="multipart/form-data"
                            />

                        </div>

                    </div>


                </div>

                <FormControl isRequired>

                    <FormLabel className={style.formLabel}>First Name</FormLabel>

                    <InputGroup className={style.inputGroup}>
                        <Input

                            placeholder="First Name"
                            value={firstNameEdit ? firstName : userData.firstName}
                            disabled={!firstNameEdit}
                            onChange={(e) => { dispatch(updateFirstNameAction(e.target.value)) }}
                            ref={firstNameInputRef}

                        />

                        <InputRightElement width="4.5rem">
                            <IconButton
                                variant={'none'}
                                h="1.75rem"
                                size="sm"
                                icon={
                                    firstNameEdit ?
                                        <>
                                            {/* <Tooltip hasArrow label='Close' bg='gray.300' color='black'> */}
                                            <IoIosClose style={{ marginRight: '20px' }} fontSize={'20px'} onClick={() => {
                                                dispatch(updateFirstNameAction(""))
                                                setFirstNameEdit(false)

                                            }} />

                                            {/* </Tooltip> */}

                                            {/* <Tooltip hasArrow label='OK' bg='gray.300' color='black'> */}
                                            <TiTick style={{ marginRight: '10px' }} fontSize={'20px'} />
                                            {/* </Tooltip> */}


                                        </>
                                        :

                                        <LiaEdit fontSize={'20px'} onClick={handleEditClick} />}
                            />
                        </InputRightElement>
                    </InputGroup>


                    <FormLabel className={style.formLabel}>Last Name</FormLabel>

                    <InputGroup className={style.inputGroup}>
                        <Input

                            placeholder="Last Name"
                            value={lastNameEdit ? lastName : userData.lastName}
                            disabled={!lastNameEdit}
                            onChange={(e) => { dispatch(updateLastNameAction(e.target.value)) }}
                            ref={lastNameInputRef}

                        />

                        <InputRightElement width="4.5rem">
                            <IconButton
                                variant={'none'}
                                h="1.75rem"
                                size="sm"
                                icon={lastNameEdit ? <IoIosClose fontSize={'20px'} onClick={() => {
                                    dispatch(updateLastNameAction(""))
                                    setLastNameEdit(false)
                                }} />
                                    : <LiaEdit fontSize={'20px'} onClick={handleLastNameEditClick} />}
                            />
                        </InputRightElement>
                    </InputGroup>



                    <FormLabel className={style.formLabel}>Email</FormLabel>
                    <Input placeholder='Email'
                        value={userData.email}
                        disabled
                        style={{ marginBottom: "10px" }}
                    // value={email} 
                    // onChange={(e) => { dispatch(registerEmailAction(e.target.value)) }} 
                    />

                    <FormLabel>Password</FormLabel>
                    <InputGroup className={style.inputGroup}>
                        <Input

                            className='password'
                            style={{
                                border: errorPass ? '1px solid red' : '', // Set border to transparent when there is an error
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



                    <FormLabel className={style.formLabel}>Confirm Password</FormLabel>
                    <InputGroup className={style.inputGroup}>
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


                    <FormLabel className={style.formLabel}>State</FormLabel>
                    <InputGroup className={style.inputGroup}>

                        <Input placeholder="State"
                            ref={stateInputRef}
                            disabled={!stateEdit}
                            value={stateEdit ? state : userData.state ? userData.state : "NA"}
                            onChange={(e) => { dispatch(updateStateAction(e.target.value)) }}

                        />

                        <InputRightElement width="4.5rem">
                            <IconButton
                                variant={'none'}
                                h="1.75rem"
                                size="sm"
                                icon={
                                    stateEdit ?
                                        <>
                                            {/* <Tooltip hasArrow label='Close' bg='gray.300' color='black'> */}
                                            <IoIosClose style={{ marginRight: '20px' }} fontSize={'20px'} onClick={() => {
                                                dispatch(updateStateAction(""))
                                                setStateEdit(false)
                                            }} />

                                            {/* </Tooltip> */}

                                            {/* <Tooltip hasArrow label='OK' bg='gray.300' color='black'> */}
                                            <TiTick style={{ marginRight: '10px' }} fontSize={'20px'} />
                                            {/* </Tooltip> */}


                                        </>
                                        :

                                        <LiaEdit fontSize={'20px'} onClick={handleStateEdit} />}
                            />
                        </InputRightElement>
                    </InputGroup>


                    <FormLabel className={style.formLabel}>City</FormLabel>

                    <InputGroup className={style.inputGroup}>

                        <Input placeholder="City"
                            ref={cityInputRef}
                            disabled={!cityEdit}
                            value={cityEdit ? city : userData.city ? userData.city : "NA"}
                            onChange={(e) => { dispatch(updateCityAction(e.target.value)) }}
                        />

                        <InputRightElement width="4.5rem">
                            <IconButton
                                variant={'none'}
                                h="1.75rem"
                                size="sm"
                                icon={
                                    cityEdit ?
                                        <>
                                            {/* <Tooltip hasArrow label='Close' bg='gray.300' color='black'> */}
                                            <IoIosClose style={{ marginRight: '20px' }} fontSize={'20px'} onClick={() => {
                                                setCityEdit(false);
                                                dispatch(updateCityAction(""))
                                            }} />

                                            {/* </Tooltip> */}

                                            {/* <Tooltip hasArrow label='OK' bg='gray.300' color='black'> */}
                                            <TiTick style={{ marginRight: '10px' }} fontSize={'20px'} />
                                            {/* </Tooltip> */}


                                        </>
                                        :

                                        <LiaEdit fontSize={'20px'} onClick={handleCityEdit} />}
                            />
                        </InputRightElement>
                    </InputGroup>





                </FormControl>

                <div className={style.updateBtnCont}>

                <Button className={style.updateBtn} variant={'none'} onClick={updateUserHandler}>Update</Button>
                </div>

            </div>

        </div>
    )
}
