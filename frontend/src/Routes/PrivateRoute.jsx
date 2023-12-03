import React, { useCallback, useContext } from 'react'
import { appContent } from '../ContextApi/ContextApi'
import { LoginDrawer } from '../Components/LoginDrawer'
import { useToast } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

    const {isAuth, loginOpen, setLoginOpen} = useContext(appContent)
    const toast = useToast()
    
    

    if(isAuth){
        return children
    }
    else{
        
        setLoginOpen(true)
        return  <Navigate to={'/'} />
    }
  
}
