import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Updating() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the task ID from the URL
  const [titles, setTitles] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [statuses, setStatuses] = useState("Pending");
  const [dueDates, setDueDates] = useState("2001-01-01");

  useEffect(function() {
    // Fetch task details by ID when the component mounts
    Axios.get(`http://localhost:9000/update/${id}`)
      .then((response) => {
        const task = response.data;
        setTitles(task.title);
        setDescriptions(task.description);
        setStatuses(task.status);
        setDueDates(task.due_date);
      })
      .catch((error) => {
        console.error("Error fetching task details:", error);
      });
  }, [id]); // Fetch the task every time the ID changes

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated task data to the server (including only the changed fields)
    Axios.put(`http://localhost:9000/update/${id}`, {
      title: titles,
      description: descriptions,
      status: statuses,
      due_date: dueDates,
    })
      .then((response) => {
        console.log("Task updated:", response.data);
        navigate("/task");
      })
 // Redirect to the task list after updating
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  return (
    <div className="container">
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={titles}
            onChange={(e) => setTitles(e.target.value)}
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={descriptions}
            onChange={(e) => setDescriptions(e.target.value)}
            placeholder="Enter task description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            id="status" className="form-select"
            value={statuses}
            onChange={(e) => setStatuses(e.target.value)} >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="due_date" className="form-label">Due Date</label>
          <input
            type="date" id="due_date"
            className="form-control"
            value={dueDates}
            onChange={(e) => setDueDates(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
}

export default Updating;
