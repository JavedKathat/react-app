import React from 'react'
import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { removeTodo } from '../features/todo/todoSlice'

import { updateTodo } from '../features/todo/todoSlice'

function Todos() {

  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const [isTodoEditable, setIsTodoEditable]=useState(false)

  const[todoMsg, setTodoMsg] = useState(todos.map((todo)=>
  {todo.text}))
 






  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id} 
          >
            <div className='text-white'>{todo.text}</div>
            <div className="flex space-x-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                 className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>

              <input
                 type='text'
                 className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } `}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
              />

              <button
                onClick={() => {
                  if(isTodoEditable){
                    dispatch(updateTodo(todo.id, todo.text))
                    setIsTodoEditable(false)
                  }
                  else{
                    setIsTodoEditable((prev) => !prev)
                  }
                }
                  
                }
                
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.29a2.25 2.25 0 011.58.67l2.415 2.415a2.25 2.25 0 010 3.181l-9.75 9.75a2.25 2.25 0 01-1.31.625h-3a2.25 2.25 0 01-2.25-2.25v-3a2.25 2.25 0 01.625-1.31l9.75-9.75a2.25 2.25 0 013.18 0l2.415 2.415a2.25 2.25 0 010 3.181L7.208 15.75a2.25 2.25 0 01-1.125.75H4.5v-1.25l11.25-11.25a.75.75 0 011.065 0l2.415 2.415a.75.75 0 010 1.065l-1.25 1.25a.75.75 0 01-1.065 0l-2.415-2.415a.75.75 0 010-1.065l1.25-1.25a.75.75 0 01-.75-.75h-3.25a.75.75 0 01-.75-.75z"
                  />
                </svg>
              </button>
            </div>


          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos