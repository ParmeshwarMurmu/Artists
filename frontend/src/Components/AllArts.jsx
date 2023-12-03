import axios from 'axios'
import React, { useEffect } from 'react'

export const AllArts = () => {

    useEffect(()=>{

        axios.get(`http://localhost:8000/post/`)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    }, [])
  return (
    <div>AllArts</div>
  )
}
