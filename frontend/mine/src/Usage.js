import React from 'react'

function Usage() {
  return (
    <>
      <div>Usage</div>
      <form method='post'>
      Enter Id number: <input type='number' name='id'/>
      Enter task name: <input type="text" name="title"/>
      Enter task description: <textarea name="description"></textarea>
      {/* <input type="text" name="description"/> */}
      Task Status: <input type="text" name="status"/>
      Due Date: <input type="text" name="due_date"/>
      <button class="btn btn-secondary">Add Task</button>
      </form>
    </>
  )
}

export default Usage