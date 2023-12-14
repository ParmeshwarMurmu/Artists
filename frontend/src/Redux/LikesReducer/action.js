import axios from "axios";

export const USER_LIKES = "USER_LIKES"


const token = localStorage.getItem('Artist-Token')
const userId = localStorage.getItem('Artist-UserId')

export const userLikesAction = (payload)=>{
    return {type: USER_LIKES, payload}
}


const headers = {
    Authorization: `bearer ${token}`,
};


export const patchUserLikes = (id)=>(dispatch) => {
  
    axios.patch(`https://again-art.onrender.com/post/postLike/${id}`, { headers })
    .then((res) => {
      console.log(res.data);
      dispatch(userLikesAction(res.data.totalUserLikes))
    })
    .catch((err) => {
      console.log(err);
    })

}
