import React from 'react'

const Title = (props) => {
  return (
    <div className='flex flex-col gap-4 font-titleFont mb-14'>
        <h3 className='text-designColor text-sm uppercase font-light tracking-wide'>{props.title}</h3>
        <h1 className='text-4xl text-gray-300 font-bold capitalize'>{props.des}</h1>
    </div>
  )
}

export default Title
