import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { APP_URL } from '../Variables/Variables'

export const appContent = createContext()
export const ContextApi = ({children}) => {
    
    const [isAuth, setIsAuth] = useState(false)
    const token = localStorage.getItem('Artist-Token')
    const userId = localStorage.getItem('Artist-UserId')
    const [userData, setUserData] = useState({})
    const [loginOpen, setLoginOpen] = useState(false)
    const [userProfileLoading, setUserProfileLoading] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()
    // m("Artist-Token", res.data.token)
    //         localStorage.setItem('Artist-UserId', res.data.userId)

    useEffect(()=>{
      
        if(token){
            setIsAuth(true)
            setUserProfileLoading(true)
            axios.get(`${APP_URL}/user/singleUser/${userId}`)
            .then((res)=>{
                // console.log(res);
                setUserData(res.data.user)
                setUserProfileLoading(false)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }, [isAuth])



    return <appContent.Provider value={{isAuth, setIsAuth, userData, isOpen, onOpen, onClose, loginOpen, setLoginOpen, userProfileLoading}}>{children}</appContent.Provider>

  
}
