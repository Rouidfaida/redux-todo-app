import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK, UPDATE_ITEM } from "./actiontype"

export const addTask =newtext => {
    return {
        type: ADD_TASK,
         payload: {
             id:Math.random(),
             Description:newtext,
             isDone:false
         }  
       
    }
}
export const editTask =(id, newt)=>{
    return{
        type:EDIT_TASK,
        payload:{
            id,
            newt
        }
    }
}
export const delTask=(id)=>{
    return{
        type:DELETE_TASK,
        
        payload:id
    }
}
export const updateItem = id => ({
    type: UPDATE_ITEM,
    id
});
export const filTask=() =>({
    type:FILTER_TASK, 


    
    }
)