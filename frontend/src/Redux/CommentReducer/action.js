import axios from "axios";
import { APP_URL } from "../../Variables/Variables";

export const USER_COMMENT = "USER_COMMENT";
export const USER_COMMENT_LOADING = "USER_COMMENT_LOADING";
export const USER_COMMENT_RESET = "USER_COMMENT_RESET";

const token = localStorage.getItem('Artist-Token')
const userId = localStorage.getItem('Artist-UserId')

export const userCommentLoadingAction = () => {
    return { type: USER_COMMENT_LOADING}
}

export const userCommentAction = (payload) => {
    return { type: USER_COMMENT, payload }
}

export const userCommentResetAction = () => {
    return { type: USER_COMMENT_RESET }
}

const headers = {
    Authorization: `bearer ${token}`,
};


export const postUserComment = (id, comment) => (dispatch) => {
    // axios.post(`https://artists-kg0g.onrender.com/post/comment/${id}`, { comment }, { headers })
    dispatch(userCommentLoadingAction())
    axios.post(`${APP_URL}/post/comment/${id}`, { comment }, { headers })
        .then((res) => {
            console.log(res.data);
            dispatch(userCommentResetAction())
        })
        .catch((err) => {

            console.log(err);
        })


}
