import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const Form = () => {
  // console.log(edit);
  
  const {add,edit,updateTask} = useContext(FeedbackContext)
  console.log(edit)

    const [rating,setrating] = useState("")
    const [feedback,setfeedback] = useState('')

    useEffect( () => {
      setrating(edit.task.Rating)
      setfeedback(edit.task.Feedback)
    },[edit])



  const send = (e) => {
      e.preventDefault()
      if(edit.editMode){
        updateTask(edit.task.id,rating,feedback) 
      }else{
      add(rating, feedback) 
      }
      setfeedback("")
      setrating("") 
  }

  
  return (
    <div className="border border-gray-200 rounded-md p-4 ">
    <form onSubmit={send} >

      <select className='border border-gray-300 rounded-md p-2 w-full'
        value={rating}
        onChange={(e) => setrating(e.target.value)}
      required 
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>  
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <textarea 
      value={feedback}
      onChange={(e) => setfeedback(e.target.value)}
      required
      className='border border-green-300 rounded-md p-4 my-2 w-full text-center '
      placeholder='Enter your Feedback'>
      </textarea>
      <button 
        
      className='bg-green-500 py-2 px-4 w-full rounded-md text-white font-bold hover:bg-green-600 duration-200 hover:cursor-pointer '
        
     >
        Submit Review</button>
    </form>
   </div> 
  )
}

export default Form
