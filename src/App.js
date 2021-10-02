import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FcUndo } from 'react-icons/fc'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import { addTask, delTask, updateItem } from './redux/action'
import AddTask from './Components/AddTask'

function App() {
  const [todoDescription, setTodoDescription] = useState('')

  const task = useSelector((state) => state.task)
  const dispatch = useDispatch()

  return (
    <div className="body" id="wrap">
    <div className="box">
      <h2>todo app</h2>
     <AddTask/>
</div>
</div>  )
}

export default App
