import React from 'react'
import styled from 'styled-components'

export const CardComponent = ({image, user, title}) => {
    
  return (
    // <Link to={`/singleProduct/${_id}`}>
    <DIV>
    <div className='container'>
     
      <img className='contImage' src={image} alt={`${user.firstName}`} />
      

      <div className='bottom-left-user'>
      {/* {title} */}
      </div>

      
      </div>
      </DIV>
  )
}

const DIV = styled.div`
    
`
