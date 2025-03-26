import React from 'react'

function TaskListCard() {
  return (
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-6'>
        <div className="bg-red-400 flex flex-col justify-start p-4 rounded-md">
        <h2 className='text-2xl font-bold'>01</h2>
        <h2 className='text-lg font-medium'>New Tasks</h2>
        </div>

        <div className="bg-blue-400 flex flex-col justify-start p-4 rounded-md">
        <h2 className='text-2xl font-bold'>03</h2>
        <h2 className='text-lg font-medium'>completed</h2>
        </div>

        <div className="bg-green-400 flex flex-col justify-start p-4 rounded-md">
        <h2 className='text-2xl font-bold'>01</h2>
        <h2 className='text-lg font-medium'>New Tasks</h2>
        </div>

        <div className="bg-orange-400 flex flex-col justify-start p-4 rounded-md">
        <h2 className='text-2xl font-bold'>03</h2>
        <h2 className='text-lg font-medium'>completed</h2>
        </div>
       </div>  )
}

export default TaskListCard