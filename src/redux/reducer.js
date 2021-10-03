import { useState } from 'react'
import { delTask, editTask, filTask } from './action'
import { ADD_TASK, DELETE_TASK, EDIT_TASK, UPDATE_ITEM } from './actiontype'

const initialState = {
  task: [
    { id: Math.random(), Description: 'welcom', isDone: true },
    { id: Math.random(), Description: 'hello', isDone: false },
    { id: Math.random(), Description: 'hy', isDone: true },
    { id: Math.random(), Description: 'get up', isDone: true },

  ],
  

}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        task: [...state.task, action.payload],
      }

    case DELETE_TASK:
      return {
        task: [...state.task.filter((el) => el.id !== action.payload)],
      }
     
      case filTask:
   return{ 
    task: [...state.task.filter((el) => (el.isDone==true))],

   }
        
    case UPDATE_ITEM:
      return {
        task: [
          ...state.task.map((el) =>
            el.id === action.id ? { ...el, isDone: !el.isDone } : el,
          ),
        ],
      }
    case EDIT_TASK:
      return { ...state, task: state.task.map((el) =>
         (el.id === action.payload.id) ? 
         { ...el, Description: action.payload.newt } : el) }


    default:
      return state
  }

}




export default reducer
