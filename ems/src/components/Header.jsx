import React from 'react'

function Header() {
  return (
    <div className='shadow-md w-full'>
    <div className='flex justify-between items-center'>
        <h2 className="font-medium flex flex-col gap-1">Hello, <span className='text-xl font-bold'>Javed 👋</span></h2>
        <button className=" bg-red-400 rounded-md font-medium w-24 md:w-32 h-10 shadow-lg text-lg hover:bg-blue-600 hover:border">
      Log out
    </button>
    </div>
    </div>
  )
}

export default Header