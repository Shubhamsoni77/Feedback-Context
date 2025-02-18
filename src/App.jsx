import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
       <Navbar />

     <div className=' p-10  '>
    <Form  />
    <ListGroup  /> 
     </div>
    </FeedbackProvider>
  )
}

export default App
