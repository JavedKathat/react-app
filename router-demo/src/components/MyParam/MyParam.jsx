import React from 'react'
import { useParams } from 'react-router'

function MyParam() {
    const {params} = useParams()
  return (
    <div className='flex bg-gray-600 text-white text-3xl h-30 items-center justify-center'>MyParam : {params} </div>
  )
}

export default MyParam