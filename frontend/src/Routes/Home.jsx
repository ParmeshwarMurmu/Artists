import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

export const Home = () => {
    return (
        <div>
            <Tabs variant='unstyled' style={{display: "flex"}}>
                <TabList style={{ flexDirection: "column"}}>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
                    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
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
