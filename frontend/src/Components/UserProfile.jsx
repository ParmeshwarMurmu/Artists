import { Avatar, Button, FormControl, FormLabel, IconButton, Image, Input, InputGroup, InputRightElement, Text, Tooltip, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { appContent } from '../ContextApi/ContextApi'
import { LiaEdit } from "react-icons/lia";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import { TiTick } from "react-icons/ti";

export const UserProfile = () => {
    const { userData } = useContext(appContent)
    const fileInput = React.createRef();
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);

    const [isEditing, setIsEditing] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [firstNameEdit, setFirstNameEdit] = useState(false);
    const [lastNameEdit, setLastNameEdit] = useState(false);



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
            console.log("imageUrl", imageUrl);
            setImageURL(imageUrl);
        }


    };


    const handleEditClick = () => {
        setFirstNameEdit(true);

    };

    const handleLastNameEditClick = () => {
        setLastNameEdit(true);
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

    return (
        <div style={{ width: "50%", margin: "auto" }}>UserProfile
            <div>
                {/* <Avatar size='2xl' name={`${userData.firstName} ${userData.lastName}`} src={userData.image} /> */}

                <Wrap>
                    <WrapItem>
                        <Avatar size='xl' name={userData.firstName} src={imageURL} alt={userData.firstName} />
                    </WrapItem>
                </Wrap>

                <Text mb={4}>Upload Image</Text>

                <Input type='file'
                    name="userImage"
                    ref={fileInput}
                    onChange={onChange}
                    borderRadius={'20px'} />


            </div>

            <FormControl isRequired>

                <FormLabel>First Name</FormLabel>

                <InputGroup>
                    <Input

                        placeholder="First Name"
                        value={firstNameEdit ? "" : userData.firstName}
                        disabled={!firstNameEdit}
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
                                            <IoIosClose style={{ marginRight: '20px' }} fontSize={'20px'} onClick={() => { setFirstNameEdit(false) }} />
                                            
                                        {/* </Tooltip> */}

                                        {/* <Tooltip hasArrow label='OK' bg='gray.300' color='black'> */}
                                            <TiTick style={{ marginRight: '10px' }} fontSize={'20px'}  />
                                        {/* </Tooltip> */}


                                    </>
                                    :

                                    <LiaEdit fontSize={'20px'} onClick={handleEditClick} />}
                        />
                    </InputRightElement>
                </InputGroup>


                <FormLabel>Last Name</FormLabel>

                <InputGroup>
                    <Input

                        placeholder="First Name"
                        value={lastNameEdit ? "" : userData.lastName}
                        disabled={!lastNameEdit}
                        ref={lastNameInputRef}

                    />

                    <InputRightElement width="4.5rem">
                        <IconButton
                            variant={'none'}
                            h="1.75rem"
                            size="sm"
                            icon={lastNameEdit ? <IoIosClose fontSize={'20px'} onClick={() => { setLastNameEdit(false) }} /> : <LiaEdit fontSize={'20px'} onClick={handleLastNameEditClick} />}
                        />
                    </InputRightElement>
                </InputGroup>



                <FormLabel>Email</FormLabel>
                <Input placeholder='Email'
                    value={userData.email}
                    disabled
                // value={email} 
                // onChange={(e) => { dispatch(registerEmailAction(e.target.value)) }} 
                />

                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        className='password'
                        style={{
                            // border: errorPass ? '1px solid red' : 'none', // Set border to transparent when there is an error
                            // Add other styles based on conditions
                        }}
                        // value={valuePass}
                        // focusBorderColor={errorPass ? 'transparent' : ''}
                        // type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                    // value={password}
                    // onChange={passwordHandleChange}
                    // (e)=>{dispatch(registerPasswordAction(e.target.value))}
                    />
                    <InputRightElement width="4.5rem">
                        <IconButton
                            variant={'none'}
                            h="1.75rem"
                            size="sm"
                        // onClick={handleTogglePassword}
                        // icon={showPassword ? <FaEyeSlash /> : <FaEye />}

                        />
                    </InputRightElement>

                </InputGroup>
                <div>
                    {/* <Text color={errorPass ? 'red' : 'green'} fontSize={'x-small'}>{verify}</Text> */}
                </div>


                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        // type={showPasswordConfirm ? 'text' : 'password'}
                        placeholder="Confirm Password"
                    // value={confirmValuePass}
                    // disabled={errorPass}

                    // onChange={confirmPasswordHandleChange}
                    />

                    <InputRightElement width="4.5rem">
                        <IconButton
                            variant={'none'}
                            h="1.75rem"
                            size="sm"
                        // onClick={confirmPasswordToggle}
                        // icon={showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
                        />
                    </InputRightElement>
                </InputGroup>
                <div>
                    {/* <Text color={errorConfirmPass ? 'red' : 'green'} fontSize={'x-small'}>{errorConfirmPass ? confirmPassMessage : confirmPassMessage}</Text> */}
                </div>

            </FormControl>

        </div>
    )
}
