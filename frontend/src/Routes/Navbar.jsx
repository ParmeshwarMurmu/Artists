import { Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <div style={{border: "2px solid red", display: "flex", justifyContent: "space-between"}}>
        <div>
          <Text>Artist</Text>
        </div>

        <div>
         <div>Login</div>
        </div>
    </div>
  )
}
