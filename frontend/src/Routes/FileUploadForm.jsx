import { Input, Text } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components'

export const FileUploadForm = () => {
    // const fileInput = React.createRef();
    // const toast = useToast();
    // const data = useSelector((store) => store.authReducer);
    // const dispatch = useDispatch();
  
    // const onSubmit = async (e) => {
    //   e.preventDefault();
  
    //   // const product = {
    //   //     name: name,
    //   //     price: price,
    //   //     productImage: [fileInput.current.files[0].name, fileInput.current.files[1].name, fileInput.current.files[2].name, ],
    //   // };
  
    //   // const data = new FormData()
  
    //   const formData = new FormData();
    //   //   formData.append('OPOPO', name);
    //   //   formData.append('price', price);
    //   formData.append("photos", fileInput.current.files[0]);
    //   // formData.append("photos", fileInput.current.files[1]);
    //   // formData.append("photos", fileInput.current.files[2]);
  
    //   console.log(fileInput.current.files[0].name);
    //   // console.log(fileInput.current.files[1].name);
    //   // console.log(fileInput.current.files[2].name);
  
    //   const headers = {
    //     Authorization: `${data.token}`,
    //   };
    //   axios
    //     .post("http://localhost:8080/posts/create", formData, { headers })
    //     .then((res) => {
    //       console.log(res);
    //       toast({
    //         title: "New Submission",
    //         description: "Your Deviation ha been posted",
    //         status: "success",
    //         duration: 2000,
    //         isClosable: true,
    //       });
    //       fileInput.current.form.reset();
    //     })
    //     .catch((err) => console.log(err));
    // };
  
    return (
      <DIV>
        {/* onSubmit={onSubmit} */}
        <form >
          <div style={{}}>
            <div style={{ width: "25%", margin: "auto" }}>
              <div style={{ marginBottom: "20px" }}>
                <Text mb={4}>Drag and drop your art here</Text>
                <input
                  type="file"
                  name="photos"
                //   ref={fileInput}
                  multiple
                  style={{}}
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
