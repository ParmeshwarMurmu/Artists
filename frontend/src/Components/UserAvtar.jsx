import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { appContent } from '../ContextApi/ContextApi'

export const UserAvtar = () => {

    const {userData} = useContext(appContent)


    return (
        <div>
            <Wrap>
                <WrapItem>
                    <Avatar name={userData.firstName} src={userData.image} alt={userData.firstName} />
                </WrapItem>
            </Wrap>
        </div>
    )
}
