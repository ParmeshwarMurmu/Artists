import { Input, Text, useToast } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'



export const FileUploadForm = () => {
  const fileInput = React.createRef();
  const toast = useToast();
  const token = localStorage.getItem('Artist-Token')
  // const data = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();

  const onSubmit = (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append("photos", fileInput.current.files[0]);
    console.log(fileInput.current.files[0].name);

    const headers = {
      Authorization: `bearer ${token}`,
    };
    // .post("https://artists-jvdl.onrender.com/post/uploads", formData, { headers })
    axios
    .post("http://localhost:8000/post/uploads", formData, {headers})
      .then((res) => {
        console.log(res);
        toast({
          title: "New Submission",
          description: `${res.data.msg}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        fileInput.current.form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
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
