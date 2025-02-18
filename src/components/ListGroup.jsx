import React, { useContext } from 'react'
import ListItem from './ListItem'
import FeedbackContext from '../context/FeedbackContext'

const ListGroup = () => {    
  // console.log(editfeedback); 

  const {Feedbacks} = useContext(FeedbackContext) 


  
  return (
    <div className='border border-gray-500 my-4 p-4 rounded-md '>
        {     
          Feedbacks.map((Feedback) => (<ListItem Feedback={Feedback} />  ))
        }
    </div>

  )
}

export default ListGroup
