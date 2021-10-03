import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action'
import { IoIosAddCircle } from 'react-icons/io'

const AddTask = () => {
  const [todoDescription, setTodoDescription] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <div className="div1">
        <input
          className="inp"
          variant="outlined"
          label="To Do Item"
          fullWidth
          onChange={(e) => setTodoDescription(e.target.value)}
          value={todoDescription}
        />
        <IoIosAddCircle
          style={{
            color: 'green',
            marginTop: '2px',
            borderRadius: '10px',
            width: '40px',
            height: '40px',
          }}
          onClick={() => {
            dispatch(addTask(todoDescription))
            setTodoDescription('')
          }}
        ></IoIosAddCircle>
      </div>
      <div></div>
    </div>
  )
}

export default AddTask
