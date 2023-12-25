import { Input, Text, useToast } from '@chakra-ui/react';
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { artSubmissionCompletedAction, postArtSubmission } from '../Redux/ArtSubmissionReducer/action';
import { APP_URL } from '../Variables/Variables';
import { newArtSubmission } from '../Redux/NewSubmissionReducer/action';
import { HomePageLoader } from '../Components/HomePageLoader'


export const FileUploadForm = ({ setLoading }) => {
  const fileInput = useRef(null)
  const toast = useToast();
  const token = localStorage.getItem('Artist-Token')
  // const data = useSelector((store) => store.authReducer);
  const [submitLoader, setSubmitLoader] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([]);


  const dispatch = useDispatch();
  const formRef = useRef(null);


  const { isLoading, isError, completed } = useSelector((store) => {
    return {
      isLoading: store.ArtSubmissionReducer.isLoading,
      isError: store.ArtSubmissionReducer.isError,
      completed: store.ArtSubmissionReducer.completed,

    }
  }, shallowEqual)


  const onChange = (e) => {
    const files = e.target.files;
    const maxFiles = 5; // Set your maximum allowed number of files here

    if (files.length > maxFiles) {
      // alert(`You can only upload up to ${maxFiles} files.`);
      toast({
        title: "Max Files",
        description: `You can only upload up to ${maxFiles} files.`,
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      // Clear the selected files to prevent exceeding the limit
      fileInput.current.value = null;
      setSelectedFiles([]);
    } else {
      // Update the selected files
      setSelectedFiles(files);
    }
  };



  console.log(completed, "completed");
  const onSubmit = async (e) => {

    e.preventDefault();



    const formData = new FormData();
    formData.append("arts", fileInput.current.files[0]);
    console.log("arts");
    console.log(fileInput.current.files);



    const headers = {
      Authorization: `bearer ${token}`,
    };

    await dispatch(postArtSubmission(formData, headers))
    toast({
            title: "New Submission",
            description: `Uploaded Successfull`,
            status: "success",
            duration: 4000,
            isClosable: true,
          });
    fileInput.current.value = null;

    if(isError){
      toast({
        title: "New Submission",
        description: `Something Went Wrong`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }



    // .post("https://again-art.onrender.com/post/uploads", formData, {headers})
    // setSubmitLoader(true)
    // axios
    // .post(`${APP_URL}/post/newSubmission`, formData, {headers})
    // .then((res) => {
    //   console.log(res);

    //   // setSubmitLoader(false)

    //     toast({
    //       title: "New Submission",
    //       description: `${res.data.msg}`,
    //       status: "success",
    //       duration: 4000,
    //       isClosable: true,
    //     });
    //     fileInput.current.form.reset();
    //     // setLoading(false)


    //   })
    //   .catch((err) => {

    //       console.log(err)
    //       toast({
    //         title: "New Submission",
    //         description: `${err.message} Please try Again`,
    //         status: "error",
    //         duration: 4000,
    //         isClosable: true,
    //       });
    //       fileInput.current.form.reset();

    //   }
    // );






  };

  return (
    // 
    <DIV>

      {/* enctype="multipart/form-data"  */}

      <form onSubmit={onSubmit} enctype="multipart/form-data" >
        <div style={{}}>
          <div className='fileCont'>
            <div style={{ marginBottom: "20px" }}>
              <Text mb={4}>Drag and drop your art here</Text>
              <input
                type="file"
                name="arts"
                ref={fileInput}
              // multiple
              // onChange={onChange}
              />


            </div>



            <div style={{}}>
              <Input
                type="submit"
                value="Submit"
                size="sm"
                className="Btn"
                backgroundColor={"#63B3ED"}
                color={"white"}
                fontSize={"20px"}
              />
            </div>
          </div>
          {/* <input type="submit" value="Submit" /> */}
        </div>
      </form>

      {
        isLoading && <HomePageLoader />
      }



      <hr />
    </DIV>
  );
}


const DIV = styled.div`

.fileCont{
  width: 35%;
  margin: auto;
  /* border: 2px solid green; */
}


@media all and (min-width: 320px) and (max-width: 768px) {
    .fileUploadIcon{
        display: block;
    }

    .newSubmissionText{
        display: none;
    }

    .fileCont{
      width: 90%;
    }
  }

  .Btn:hover {
    cursor: pointer;
    background-color: #3182ce;
  }
`;

