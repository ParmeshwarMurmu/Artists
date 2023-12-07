import axios from "axios";

export const POST_COMMENT = "POST_COMMENT";


const token = localStorage.getItem('Artist-Token')
const userId = localStorage.getItem('Artist-UserId')

export const postCommentAction = (payload) => {
    return { type: POST_COMMENT, payload }
}



const headers = {
    Authorization: `bearer ${token}`,
};


export const getPostComment = (id) => (dispatch) => {
    axios.get(`http://localhost:8000/post/postComment/${id}`)
        .then((res) => {
            console.log(res.data);
            dispatch(postCommentAction(res.data.postComment))
        })
        .catch((err) => {

            console.log(err);
        })


}