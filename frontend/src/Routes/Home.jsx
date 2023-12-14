import { Tab, TabList, TabPanel, TabPanels, Tabs, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { appContent } from '../ContextApi/ContextApi'
import { AllArts } from '../Components/AllArts'
import { HomePageLoader } from '../Components/HomePageLoader'
import { FaHashtag } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { SearchBar } from '../Components/SearchBar'
import style from '../CSS/Navbar.module.css'

export const Home = () => {
    const { loginOpen } = useContext(appContent)
    const toast = useToast();

    if (loginOpen) {
        toast({
            // title: 'Account created.',
            description: "Please Login",
            status: 'warning',
            duration: 4000,
            isClosable: true,
        })
    }
    return (
        <div style={{}}>

            <div className={style.homeSearchBar}>
                <SearchBar />
            </div>



            <div>
                <Tabs variant='unstyled' style={{ display: "flex", height: "100vh" }}>
                    <TabList style={{ flexDirection: "column", borderRight: "1px solid #353740", flex: "0 0 auto" }}>
                        <Tab style={{}} _selected={{ color: 'white', bg: 'green.400' }} color={'white'} fontSize={'20px'}><IoHomeSharp /></Tab>
                        <Tab isDisabled style={{}} _selected={{ color: 'white', bg: 'green.400' }} color={'white'} fontSize={'20px'}><FaHashtag /></Tab>
                    </TabList>
                    <TabPanels style={{ flex: "1", overflowY: 'auto' }}>
                        <TabPanel style={{ height: '100%', overflowY: 'auto' }}>
                            
                            <AllArts />
                        </TabPanel>

                        <TabPanel style={{ height: '100%', overflowY: 'auto' }}>
                            
                        </TabPanel>
                        
                    </TabPanels>
                </Tabs>
            </div>

        </div>
    )
}
