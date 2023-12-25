import axios from "axios";
import { APP_URL } from "../../Variables/Variables";

export const ART_SUBMISSION_LOADING = "ART_SUBMISSION_LOADING";
export const ART_SUBMISSION_SUCCESS = "ART_SUBMISSION_SUCCESS";
export const ART_SUBMISSION_ERROR = "ART_SUBMISSION_ERROR";
export const ART_SUBMISSION_COMPLETED = "ART_SUBMISSION_COMPLETED";
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


export const artSubmissionCompletedAction = () => {
    return { type: ART_SUBMISSION_COMPLETED }
}



export const postArtSubmission = (formData, headers) => (dispatch) => {
    console.log("artSubmission");
    dispatch(artSubmissionLoadingAction())
    return axios.post(`${APP_URL}/post/newSubmission`, formData, {headers})
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
