import { Tab, TabList, TabPanel, TabPanels, Tabs, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { appContent } from '../ContextApi/ContextApi'

export const Home = () => {
    const {loginOpen} = useContext(appContent)
    const toast = useToast();
    
    if(loginOpen){
        toast({
            // title: 'Account created.',
            description: "Please Login",
            status: 'warning',
            duration: 4000,
            isClosable: true,
        })
    }
    return (
        <div>
            <Tabs variant='unstyled' style={{display: "flex"}}>
                <TabList style={{ flexDirection: "column",  borderRight: "2px solid red"}}>
                    <Tab style={{}} _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
                    <Tab style={{}} _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
                </TabList>
                <TabPanels style={{ }}>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}
