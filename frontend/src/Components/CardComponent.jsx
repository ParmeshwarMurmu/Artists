import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { APP_URL } from '../Variables/Variables'

export const CardComponent = ({ image, user, title, _id }) => {

  return (

    <DIV>
      <div className='container'>

        <Link to={`/singlePage/${_id}`}>

          <img className='contImage' src={`${APP_URL}/Arts/${image}`} alt={`${user.firstName}`} />
        </Link>


        <div className='bottom-left-user'>
          {/* {title} */}
        </div>


      </div>
    </DIV>
  )
}

const DIV = styled.div`
    
`
