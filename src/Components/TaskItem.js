import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FcUndo } from 'react-icons/fc'
import { delTask, filTask, updateItem } from '../redux/action'
import Edit from './Edit'
const TaskItem = ({ task, tas }) => {
  const [todoDescription, setTodoDescription] = useState('')
  const dispatch = useDispatch()

  return (
    <div className="div3">
      <form className="form3">
        <input
          type="text"
          value={task.Description}
          onChange={(e) => setTodoDescription(e.target.value)}
          className={task.isDone ? 'compt' : null}
        />

        <RiDeleteBin5Line
          style={{
            color: 'red',
            marginTop: '20px',
            width: '20px',
            height: '20px',
          }}
          onClick={() => {
            dispatch(delTask(task.id))
          }}
        ></RiDeleteBin5Line>
        <FcUndo
          style={{ marginTop: '20px', width: '20px', height: '20px' }}
          onClick={() => dispatch(updateItem(task.id))}
        ></FcUndo>
        <Edit task={task} />
      </form>
    </div>
  )
}

export default TaskItem
