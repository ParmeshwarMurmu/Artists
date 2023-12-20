import { Input, Text, useToast } from '@chakra-ui/react';
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { postArtSubmission } from '../Redux/ArtSubmissionReducer/action';
import { APP_URL } from '../Variables/Variables';



export const FileUploadForm = ({setLoading} ) => {
  const fileInput = React.createRef();
  const toast = useToast();
  const token = localStorage.getItem('Artist-Token')
  // const data = useSelector((store) => store.authReducer);
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  
  const dispatch = useDispatch();
  const formRef = useRef(null);
  

  const { isLoading, isError, completed} = useSelector((store) => {
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

 


  const onSubmit = (e) => {

    e.preventDefault();
   
    

    const formData = new FormData();
    formData.append("arts", fileInput.current.files[0]);
    console.log("arts");
    console.log(fileInput.current.files);


   
    const headers = {
      Authorization: `bearer ${token}`,
    };
   
    // .post("https://again-art.onrender.com/post/uploads", formData, {headers})
    // setSubmitLoader(true)
    axios
    .post(`${APP_URL}/post/newSubmission`, formData, {headers})
    .then((res) => {
      console.log(res);
        
      // setSubmitLoader(false)
     
        toast({
          title: "New Submission",
          description: `${res.data.msg}`,
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        fileInput.current.form.reset();
        // setLoading(false)

        
      })
      .catch((err) => {
        
          console.log(err)
          toast({
            title: "New Submission",
            description: `${err.message} Please try Again`,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          fileInput.current.form.reset();

      }
      );


      


     
  };

  return (
    // 
    <DIV>

{/* enctype="multipart/form-data"  */}

      <form onSubmit={onSubmit} >
        <div style={{}}>
          <div  className='fileCont'>
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

