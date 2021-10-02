import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FcUndo, FcEditImage } from 'react-icons/fc'
import { addTask, delTask, editTask, updateItem } from '../redux/action'
import { IoIosAddCircle } from 'react-icons/io'
import Edit from './Edit'

const AddTask = () => {
  const [todoDescription, setTodoDescription] = useState('')
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  

  const task = useSelector((state) => state.task)
  const dispatch = useDispatch()

  return (
    <div>
      <div
        style={{
          display: 'flex',
          borderRadius: '5px',
          marginLeft: '20px',
          backgroundColor: 'white',
        //   marginTop: '20px',
        //   height:"50px"
        }}
      >
        <form style={{height:"60px"  }}>
          <input
            variant="outlined"
            label="To Do Item"
            fullWidth
            onChange={(e) => setTodoDescription(e.target.value)}
            value={todoDescription}
          style={{border: 'none',height:"40px",marginTop:"10px"}}
          />
          <IoIosAddCircle
            style={{
              marginLeft: '10px',
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
        </form>
      </div>
      <div>
        {task.map((el) => {
          return (
            <div style={{ marginTop: '20px' ,display:"flex"}}>
              <form
                style={{ border: '2px solid black',backgroundColor:"white",display:"flex" }}
              >
                <input
                  style={{
                    border: 'none',
                    fontFamily: 'fantasy',
                    fontStyle: 'italic',
                    fontSize: '20px',
                  }}
                  type="text"
                  value={el.Description}
                  className={el.isDone ? 'compt' : null}
                />
               
                <RiDeleteBin5Line
                  style={{
                    color: 'red',
                    marginTop: '20px',
                    width: '20px',
                    height: '20px',
                  }}
                  onClick={() => {
                    dispatch(delTask(el.id))
                  }}
                ></RiDeleteBin5Line>
                <FcUndo
                  style={{ marginTop: '20px', width: '20px', height: '20px' }}
                  onClick={() => dispatch(updateItem(el.id))}
                >
                  {el.isDone ? '<FcUndo/>' : '<RiDeleteBin5Line/>'}
                </FcUndo>
                <Edit />
              </form>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AddTask
