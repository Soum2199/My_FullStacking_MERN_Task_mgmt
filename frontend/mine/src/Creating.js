import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function Creating() {
  const navigate = useNavigate();
  const [titles, setTitles] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [statuses, setStatuses] = useState("Pending");
  const [dueDates, setDueDates] = useState(""); // You can handle empty due date here

  const handleStatusChange = (e) => {
    setStatuses(e.target.value);
  };

  const backHome = (e) => {
    // will be preventing the default action if you're inside the form
    e.preventDefault(); 
    if (!titles || !descriptions) {
      alert("Title and description are required!");
      return;
    }
    const taskDueDate = dueDates || new Date().toISOString().split('T')[0]; // default to today's date if empty

    Axios.post("http://localhost:9000/create", {
      title: titles,
      description: descriptions,
      status: statuses,
      due_date: taskDueDate,
    })
    // Ensure due date is passed correctly
      .then((res) => {
        console.log("Task created:", res);
        navigate("/task"); // Redirect to task list after creation
      })
      .catch((error) => {
        console.error("Error creating task:", error);
      });
  };

  return (
    <>
      <div className="input-group flex-wrap">
        <div>
          <label>Enter Task Name:</label>
          <input
            type="text"
            onChange={(e) => setTitles(e.target.value)}
            className="form-control"
            placeholder="Task Title"
            value={titles}
          />
        </div>
        <div>
          <label>Enter Task Description:</label>
          <input
            type="text"
            onChange={(e) => setDescriptions(e.target.value)}
            className="form-control"
            placeholder="Task Description"
            value={descriptions}
          />
        </div>
        <div className="input-group mb-3">
          <label>Task Status:</label>
          <select className="form-select" onChange={handleStatusChange} value={statuses}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date"
            onChange={(e) => setDueDates(e.target.value)}
            className="form-control"
            value={dueDates} />
        </div>
      </div>
      <button type="button" className="btn btn-secondary" onClick={backHome}>
        Save Task
      </button>
    </>
  );
}

export default Creating;
