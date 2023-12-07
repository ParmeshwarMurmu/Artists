import { Input, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'



export const FileUploadForm = () => {
  const fileInput = React.createRef();
  const toast = useToast();
  const token = localStorage.getItem('Artist-Token')
  // const data = useSelector((store) => store.authReducer);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const dispatch = useDispatch();


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
    // console.log("selectedFiles");
    // console.log(selectedFiles);

    const formData = new FormData();
    formData.append("photos", fileInput.current.files[0]);
    console.log("***");
    console.log(fileInput.current.files);

    // for(let i=0; i<5; i++){
    //   formData.append("photos", fileInput.current.files[i]);
    //   // formData.append("photos", selectedFiles[i]);
    //   // console.log(fileInput.current.files[i].name);
    //   // console.log(selectedFiles[i].name);
    // }

    const headers = {
      Authorization: `bearer ${token}`,
    };
    // .post("http://localhost:8000/post/uploads", formData, {headers})
    axios
    .post("https://artists-jvdl.onrender.com/post/uploads", formData, { headers })
      .then((res) => {
        console.log(res);
        toast({
          title: "New Submission",
          description: `${res.data.msg}`,
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        fileInput.current.form.reset();
      })
      .catch((err) =>{
        toast({
          title: "New Submission",
          description: `${err.message} Please try Again`,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        fileInput.current.form.reset();

        console.log(err)
      } 
      );
  };

  return (
    // 
    <DIV>
      <form onSubmit={onSubmit} enctype="multipart/form-data">
        <div style={{}}>
          <div style={{ width: "25%", margin: "auto" }}>
            <div style={{ marginBottom: "20px" }}>
              <Text mb={4}>Drag and drop your art here</Text>
              <input
                type="file"
                name="photos"
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
  .Btn:hover {
    cursor: pointer;
    background-color: #3182ce;
  }
`;
