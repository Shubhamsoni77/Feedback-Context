import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [Feedbacks, setFeedbacks] = useState([
])


    const add = (rating,feedback) => {
        // console.log(rating,feedback);
        setFeedbacks([{id: Date.now(), Rating : rating ,Feedback : feedback },...Feedbacks])
    }

    const del = (id) => {
        console.log(id);
     const Filter = Feedbacks.filter((item) => item.id!==id)
      setFeedbacks(Filter)
    } 

    const [edit,setEdit] = useState({
        task : {},
        editMode : false 
    })

    const editTask = (Feedback) => {
        // console.log(Feedback) 
        setEdit({
            task: Feedback,
            editMode : true
        }) 
    }

    const updateTask = (oldId, rating,feedback) => {
        console.log(oldId,rating,feedback)
        setFeedbacks(
            Feedbacks.map((item) => {
                if(item.id === oldId){
                    return {
                        id: oldId,
                        Rating : rating,
                        Feedback : feedback
                    }                    
                }
                else{
                    return item 
                }
                
                
            }
           
        )
        )

       setEdit({task : {} , editMode : false})

    }

    return (
        <FeedbackContext.Provider value={{Feedbacks,add,del,editTask,edit,updateTask}} >
            {children}
        </FeedbackContext.Provider>
    )
}



export default FeedbackContext