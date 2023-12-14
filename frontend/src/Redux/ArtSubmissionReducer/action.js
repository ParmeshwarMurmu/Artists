import axios from "axios";

export const ART_SUBMISSION_LOADING = "ART_SUBMISSION_LOADING";
export const ART_SUBMISSION_SUCCESS = "ART_SUBMISSION_SUCCESS";
export const ART_SUBMISSION_ERROR = "ART_SUBMISSION_ERROR";
export const ART_SUBMISSION_RESET = "ART_SUBMISSION_RESET";

const token = localStorage.getItem('Artist-Token')
const userId = localStorage.getItem('Artist-UserId')

export const artSubmissionLoadingAction = () => {
    return { type: ART_SUBMISSION_LOADING }
}

export const artSubmissionSuccessAction = () => {
    return { type: ART_SUBMISSION_SUCCESS }
}

export const artSubmissionErrorAction = () => {
    return { type: ART_SUBMISSION_ERROR }
}

const headers = {
    Authorization: `bearer ${token}`,
};


export const postArtSubmission = (formData) => (dispatch) => {
    console.log("artSubmission");
    dispatch(artSubmissionLoadingAction())
    axios
    .post("https://artists-hrw4.onrender.com/post/uploads", formData, { headers })
    .then((res) => {
      console.log("art", res);
      dispatch(artSubmissionSuccessAction())
    })
    .catch((err) => {
        dispatch(artSubmissionErrorAction())
        // fileInput.current.form.reset();

    }
    );
}
