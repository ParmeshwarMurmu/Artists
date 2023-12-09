import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

export const UserProfile = () => {
  return (
    <div>UserProfile
        <div>
            <Input type='file' />
        </div>

        <FormControl isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder='First name' 
                            // value={firstName} onChange={(e) => { dispatch(registerFirstNameAction(e.target.value)) }} 
                            />

                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='Last name' 
                            // value={lastName} onChange={(e) => { dispatch(registerLastNameAction(e.target.value)) }} 
                            />

                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' 
                            // value={email} onChange={(e) => { dispatch(registerEmailAction(e.target.value)) }} 
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
