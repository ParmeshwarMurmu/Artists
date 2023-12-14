import { Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ImArrowUp } from "react-icons/im";
import { FileUploadForm } from './FileUploadForm';
import styled from 'styled-components';
import { FaFileUpload } from "react-icons/fa";
import Wall from '../Assets/Login_Community.png'


export const NewArtSubmission = () => {
    // const [loading, setLoading] = useState(false);

    return (
        <DIV style={{backgroundColor: "white"}} className='newSubmissionCont'>
            <Tabs isFitted variant='enclosed'className='newSubmissionCont'>
                <TabList mb='1em' style={{ width: "30%" }}>
                    <Tab > <ImArrowUp style={{ marginRight: "8px" }} /><span className='fileUploadIcon'><FaFileUpload /></span> <span className='newSubmissionText'> New Submission</span></Tab>
                    {/* <Tab isDisabled>New</Tab> */}
                </TabList>
                <TabPanels className='TabPannelCont'>
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

                            <div className='TabPannelCont'>
                                <FileUploadForm />
                            </div>

                            

                        </div>
                        
                        <div style={{ display: "flex", width: "90%", justifyContent: "center" }}>
                            <div className='wall'>
                                <Image src={Wall} alt='world day' />
                            </div>

                            {/* <div style={{ width: "60%" }}>
                                <Image src={""} alt='world art day' />
                            </div>

                            <div style={{ width: "18%" }}>
                                <Image src={""} alt='Brown Neutral' />
                            </div> */}
                        </div>
                    </TabPanel>
                   
                </TabPanels>
            </Tabs>
        </DIV>
    )
}

const DIV = styled.div`
    .newSubmissionCont{
        /* border: 2px solid red; */
    }

    .wall{
        width: 75%;
        padding-left: 50px;
    }

    .fileUploadIcon{
        display: none;
    }

    .TabPannelCont{
        /* display: flex;
        justify-content: center; */
    }


    @media all and (min-width: 320px) and (max-width: 600px) {
    .fileUploadIcon{
        display: block;
    }

    .newSubmissionText{
        display: none;
    }

    .wall{
        width:100%;
    }
    
}
`

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Darkened background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Higher z-index to appear on top of other elements */
`;

const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;