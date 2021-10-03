import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList';

function App() {
    const task = useSelector((state) => state.task)
  // const selectTotalCompletedTodos = state => {
  //   return state.task.filter(el => el.isDone==true)
  //   } 
  // const tasks = useSelector (selectTotalCompletedTodos) 

  return (
    <div className="body" id="wrap">
    <div className="box">
      <h2>todo app</h2>
     <AddTask/>
     <TaskList task={task}  />

</div>
</div>  )
}

export default App
