import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const ListItem = ({Feedback}) => {
  // console.log(Feedback);

  const {del,editTask} = useContext(FeedbackContext)

  
  

  
  return (
    <div className=' relative border border-green-500 p-2 m-4 rounded-md'>
      <h1 className=' text-2xl font-bold my-2 '>Rating : "{Feedback.Rating}" </h1>
      <p className='my-2 font-bold text-gray-600'>{Feedback.Feedback}</p> 
      <div className='absolute right-2 top-2'>
        <button
        onClick={() => editTask(Feedback)}
         className='text-sm bg-yellow-400 mx-2 py-1 px-2 rounded-sm text-white cursor-pointer '>Edit</button>
        <button className='text-sm bg-red-400 mx-2 py-1 px-2 rounded-sm text-white cursor-pointer '
        onClick={() => del(Feedback.id) } 
        >Delete</button>

      </div>
    </div>
  
  )
}

export default ListItem
