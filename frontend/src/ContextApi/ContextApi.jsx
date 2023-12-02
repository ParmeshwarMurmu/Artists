import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const appContent = createContext()
export const ContextApi = ({children}) => {
    
    const [isAuth, setIsAuth] = useState(false)
    const token = localStorage.getItem('Artist-Token')
    const userId = localStorage.getItem('Artist-UserId')
    const [userData, setUserData] = useState({})
    // m("Artist-Token", res.data.token)
    //         localStorage.setItem('Artist-UserId', res.data.userId)

    useEffect(()=>{
      
        if(token){
            setIsAuth(true)
            axios.get(`http://localhost:8000/user/singleUser/${userId}`)
            .then((res)=>{
                console.log(res);
                setUserData(res.data.user)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }, [])



    return <appContent.Provider value={{isAuth, setIsAuth, userData}}>{children}</appContent.Provider>

  
}
