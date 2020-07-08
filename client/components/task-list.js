import React, { useState } from 'react'

const TaskList = (props) => {
  const [newTask, setNewTask] = useState('')
  return (
    <div>
      {props.tasks.map((el) => (
        // eslint-disable-next-line no-undef
        <div key={key} className="flex mb-6 justify-between">
          <div key={el.taskId}>{el.title}</div>
          <div className="switch-status">
            {el.status === 'in progress' && (
              <div>
                <button
                  type="button"
                  className="bg-teal-400 mr-3"
                  onClick={() => props.updateStatus(el.taskId, 'in progress')}
                >
                  In progress
                </button>
                <button
                  type="button"
                  className="bg-teal-400"
                  onClick={() => props.updateStatus(el.taskId, 'done')}
                >
                  Done
                </button>
              </div>
            )}
            {el.status === 'blocked' && (
              <button
                type="button"
                className="bg-teal-400"
                onClick={() => props.updateStatus(el.taskId, 'in progress')}
              >
                Unblock
              </button>
            )}
          </div>
        </div>
      ))}
      <div>
        <input
          type="text"
          value={newTask}
          className="bg-teal-100"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="button" onClick={() => props.addTask(newTask)}>
          Add
        </button>
      </div>
    </div>
  )
}
export default TaskList
