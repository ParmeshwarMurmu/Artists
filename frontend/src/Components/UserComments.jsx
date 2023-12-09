import React from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPostComment } from '../Redux/UserCommentReducer/action';
import { Avatar, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import style from '../CSS/SinglePage.module.css'
import { Link } from 'react-scroll';

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
            {/* <Heading as='h2' size='sm'>
            All Comments
            </Heading> */}

            <Text id='userComment'>All Comments</Text>


            {
                postComments.map((el) => (
                    <div key={el._id} className={style.userContent}>
                        <Wrap>
                            <WrapItem>
                                <Avatar name={`${el.user.firstName}`} src={`${el.user.image}`} />
                            </WrapItem>
                        </Wrap>

                        <div className={style.userComments}>
                            <Text fontWeight={'bold'}>{`${el.user.firstName} ${el.user.lastName}`}</Text>
                            <Text color={'grey'}>{`${el.comment}`}</Text>
                        </div>


                    </div>
                ))
            }
        </div>
    )
}
