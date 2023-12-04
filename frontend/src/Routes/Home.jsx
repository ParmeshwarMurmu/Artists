import { Tab, TabList, TabPanel, TabPanels, Tabs, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { appContent } from '../ContextApi/ContextApi'
import { AllArts } from '../Components/AllArts'

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
        <div style={{ }}>
            <Tabs variant='unstyled' style={{ display: "flex", height: "100vh" }}>
                <TabList style={{  flexDirection: "column", borderRight: "2px solid red", flex: "0 0 auto" }}>
                    <Tab style={{}} _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
                    <Tab style={{}} _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
                </TabList>
                <TabPanels style={{ flex: "1", overflowY: 'auto' }}>
                    <TabPanel style={{ height: '100%',overflowY: 'auto' }}>
                    <AllArts />
                    </TabPanel>
                    <TabPanel>
                        <AllArts />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
        </div>
    )
}
