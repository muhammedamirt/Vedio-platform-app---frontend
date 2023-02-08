import React from 'react'

const Card = ({children}) => {
  return (
    <div className='py-3 px-3 bg-black shadow-diesel-800 shadow-md rounded-md'>
        {children}
    </div>
  )
}

export default Card