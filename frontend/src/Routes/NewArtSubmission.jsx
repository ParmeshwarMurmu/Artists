import { Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { ImArrowUp} from "react-icons/im";
import { FileUploadForm } from './FileUploadForm';

export const NewArtSubmission = () => {
    return (
        <div>
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em' style={{ width: "30%" }}>
                    <Tab > <ImArrowUp style={{ marginRight: "8px" }} /> New Submission</Tab>
                    <Tab >New</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div style={{ marginBottom: "10px" }}>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "8px" }}>
                                <div style={{ marginRight: "8px", paddingTop: "3px" }}>
                                    <ImArrowUp color={'#63B3ED'} />
                                </div>

                                <div style={{}}>
                                    <Text fontSize={'xl'} fontWeight={'bolder'} color={'#63B3ED'}> New Submission</Text>
                                </div>
                            </div>

                            <div>
                                <FileUploadForm/>
                            </div>

                        </div>
{/* 
                        <div style={{ display: "flex", width: "90%", margin: "auto" }}>
                            <div style={{ width: "18%" }}>
                                <Image src={""} alt='world day' />
                            </div>

                            <div style={{ width: "60%" }}>
                                <Image src={""} alt='world art day' />
                            </div>

                            <div style={{ width: "18%" }}>
                                <Image src={""} alt='Brown Neutral' />
                            </div>
                        </div> */}
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}
