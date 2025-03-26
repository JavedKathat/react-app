import React from 'react'

function TaskCard() {
  return (
    <>
            <div className='rounded-t-lg md:rounded-lg px-3 pt-2 bg-red-400'>
                <div className='flex justify-between text-lg font-semibold'>
                    {/* Level of Task. High/Medium/Low */}
                    <h2 className='  bg-red-700 rounded-md p-1'>High</h2>
                    {/* Date of Task assign */}
                    <p>23 Deb 25</p>
                </div>
                <div className="mt-2 pt-3 pb-10">
                    <h2 className='text-xl font-semibold pb-2'>Task Title</h2>
                    <p className="text-lg font-medium"> Task Descreption write here</p>
                </div>
            </div>

            <div className='rounded-t-lg md:rounded-lg px-3 pt-2 bg-green-400 -mt-8 md:mt-0 '>
                <div className='flex justify-between text-lg font-semibold'>
                    {/* Level of Task. High/Medium/Low */}
                    <h2 className='  bg-red-700 rounded-md p-1'>High</h2>
                    {/* Date of Task assign */}
                    <p>23 Deb 25</p>
                </div>
                <div className="mt-2 pt-3 pb-10">
                    <h2 className='text-xl font-semibold pb-2'>Task Title</h2>
                    <p className="text-lg font-medium"> Task Descreption write here</p>
                </div>
            </div>

            <div className='rounded-t-lg md:rounded-lg px-3 pt-2 bg-blue-400 -mt-8 md:mt-0 '>
                <div className='flex justify-between text-lg font-semibold'>
                    {/* Level of Task. High/Medium/Low */}
                    <h2 className='  bg-red-700 rounded-md p-1'>High</h2>
                    {/* Date of Task assign */}
                    <p>23 Deb 25</p>
                </div>
                <div className="mt-2 pt-3 pb-10">
                    <h2 className='text-xl font-semibold pb-2'>Task Title</h2>
                    <p className="text-lg font-medium"> Task Descreption write here</p>
                </div>
            </div>

    </>
  )
}

export default TaskCard