import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const updateTaskStatus = (taskTitle, status) => {
    // Clone the data to avoid direct mutation
    const newData = [...userData]
    const employee = newData.find((e) => e.id === data.id)
    
    if (employee) {
      const task = employee.tasks.find((t) => t.taskTitle === taskTitle)
      if (task) {
        if (status === 'active') {
          task.newTask = false
          task.active = true
        } else if (status === 'completed') {
          task.active = false
          task.completed = true
        } else if (status === 'failed') {
          task.active = false
          task.failed = true
        }
      }
    }
    
    // Update context and local storage
    setUserData(newData)
    localStorage.setItem('employees', JSON.stringify(newData))
  }

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((elem, idx) => {
        return (
          <div key={idx} className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl'>
            <div className='flex justify-between items-center'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{elem.category}</h3>
              <h4 className='text-sm'>{elem.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{elem.taskTitle}</h2>
            <p className='text-sm mt-2'>
              {elem.taskDescription}
            </p>
            
            <div className='flex justify-between mt-4 gap-2'>
              {elem.active && (
                <>
                  <button onClick={() => updateTaskStatus(elem.taskTitle, 'completed')} className='bg-green-600 hover:bg-green-700 py-1 px-2 text-sm rounded w-1/2'>Mark Completed</button>
                  <button onClick={() => updateTaskStatus(elem.taskTitle, 'failed')} className='bg-red-600 hover:bg-red-700 py-1 px-2 text-sm rounded w-1/2'>Mark Failed</button>
                </>
              )}
              {elem.newTask && !elem.active && (
                <button onClick={() => updateTaskStatus(elem.taskTitle, 'active')} className='bg-blue-500 hover:bg-blue-600 w-full py-1 px-2 text-sm rounded'>Accept Task</button>
              )}
              {elem.completed && (
                <button className='w-full bg-green-600 py-1 px-2 text-sm rounded' disabled>Completed</button>
              )}
              {elem.failed && (
                <button className='w-full bg-red-600 py-1 px-2 text-sm rounded' disabled>Failed</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList