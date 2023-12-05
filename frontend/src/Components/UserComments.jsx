import React from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPostComment } from '../Redux/UserCommentReducer/action';
import { Avatar, Text, Wrap, WrapItem } from '@chakra-ui/react';
import style from '../CSS/SinglePage.module.css'

export const UserComments = () => {

    const { id } = useParams();
    const dispatch = useDispatch()

    const { postComments } = useSelector((store) => {
        return {
            postComments: store.UserCommentReducer.postComments

        }
    }, shallowEqual)

    useEffect(() => {
        dispatch(getPostComment(id))
    }, [])


    console.log("Comments", postComments);

    return (
        <div className={style.userCommentsContainer} >
            {
                postComments.map((el) => (
                    <div key={el._id} className={style.userContent}>
                        <Wrap>
                            <WrapItem>
                                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                        </Wrap>

                        <div className={style.userComments}>
                          <Text>{`${el.user.firstName} ${el.user.lastName}`  }</Text>
                          <Text>{`${el.comment}`  }</Text>
                        </div>


                    </div>
                ))
            }
        </div>
    )
}
