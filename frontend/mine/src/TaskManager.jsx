import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
function TaskManager() {

  const navuer = useNavigate();
  const [taskDetails, setTaskDetails] = useState([])
  const {id} = useParams()
  useEffect(function() {
    Axios.get("http://localhost:9000/fetching/all/tasks").then(
      function (outing) {
        console.log(outing.data)
        setTaskDetails(outing.data)
      }
    ).catch(function (errrors) {
      console.log(errrors)
    })
      
  }, [])

  function changeStatus(taskId, newStatus) {
    Axios.put(`http://localhost:9000/update/${taskId}`, { status: newStatus })
      .then((response) => {
        console.log(response);
        setTaskDetails((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }  

  function AddingTask() {
    // navuer("/addtask")
    navuer("/create")
  }
  function updatesOfTask(taskId) {
    // navuer('/update')
    navuer(`/update/${taskId}`)
  }

  function deletesOfTask(taskId) {
    Axios.delete(`http://localhost:9000/delete/${taskId}`)
      .then((response) => {
        console.log('Deleted task:', response);
        setTaskDetails(taskDetails.filter((task) => task.id !== taskId)); // Remove the task from state
        window.location.reload()
      })
      .catch((error) => console.log(error));
  }

  function diffColors(status){
    switch (status) {
         case 'Pending':
           return 'btn-outline-danger'; // Red
         case 'In Progress':
           return 'btn-outline-warning'; // Yellow
         case 'Completed':
           return 'btn-outline-success'; // Green
         default:
           return 'btn-primary'; // Default color
       }
   }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{marginTop: "5px"}}>
        <div className="col-auto">
            <button type="button" class="btn btn-secondary" onClick={AddingTask}>Add Task +</button>
            </div>
        </div>
      <br/>
    
      <div className='points'>
        {
          taskDetails.map(function (s) {
           return   <div class="container d-flex justify-content-center align-items-center min-vh-30" style={{fontFamily: "sans-serif", margin: "2px 4px"}}>
           <div class="card text-end" style={{width:'55em'}}>
             <div class="card-body justify-content-center">
               <h5 class="card-title text-start">{s.title}</h5>
               <p class="card-text text-start">{s.description}</p>
               {/* <a href="#" class="btn btn-primary">{s.status}</a> */}
               <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" onClick={() => updatesOfTask(s.id)} class="btn btn-success">Update</button>
  <button type="button" onClick={() => deletesOfTask(s.id)} class="btn btn-danger">Delete</button>

  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class={`btn ${diffColors(s.status)} dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
      {s.status}
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
    <li><a className="dropdown-item" onClick={() => changeStatus(s.id, 'Pending')}>Pending</a></li>
<li><a className="dropdown-item" onClick={() => changeStatus(s.id, 'In Progress')}>In Progress</a></li>
<li><a className="dropdown-item" onClick={() => changeStatus(s.id, 'Completed')}>Completed</a></li>

    </ul>
  </div>
</div>
   <br/>
    <p class="fw-normal text-center card-footer" style={{marginBottom: "2px"}}>Due date: {s.due_date}</p>
             </div>
           </div>
         </div>
          })
        }
      </div>
    </>
  )
}

export default TaskManager