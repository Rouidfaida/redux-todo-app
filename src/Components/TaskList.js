import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((el, i) => (
        <TaskItem task={el} key={i}  />
      ))}
    </div>
  )
}

export default TaskList
