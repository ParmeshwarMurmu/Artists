import axios from "axios";
import { APP_URL } from "../../Variables/Variables";


export const NEW_SUBMISSION = 'NEW_SUBMISSION';




export const newArtSubmission = (formData, headers)=>(dispatch)=>{

    return axios.post(`${APP_URL}/post/newSubmission`, formData, {headers})
    .then((res) => {
      console.log(res);
        
      // setSubmitLoader(false)
     
        // toast({
        //   title: "New Submission",
        //   description: `${res.data.msg}`,
        //   status: "success",
        //   duration: 4000,
        //   isClosable: true,
        // });
        // fileInput.current.form.reset();
        // setLoading(false)

        
      })
      .catch((err) => {
        
          console.log(err)
        //   toast({
        //     title: "New Submission",
        //     description: `${err.message} Please try Again`,
        //     status: "error",
        //     duration: 4000,
        //     isClosable: true,
        //   });
        //   fileInput.current.form.reset();

      }
      );

}