import React, { useState } from 'react';


const Session = () => {
  const [session, setSession] = useState({
    title: '',
    color: '',
    frequency: '',
    day: '',
    time: '',
    duration: '',
    program: '',
    skills: '',
    description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSession({
      ...session,
      [name]: value,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Session Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={session.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="color"
            className="form-control"
            id="color"
            name="color"
            value={session.color}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="frequency">Frequency</label>
          <select
            className="form-control"
            id="frequency"
            name="frequency"
            value={session.frequency}
            onChange={handleInputChange}
          >
            <option value="">Select Frequency</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="day">On</label>
          <select
            className="form-control"
            id="day"
            name="day"
            value={session.day}
            onChange={handleInputChange}
          >
            <option value="">Select Day</option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="time">At</label>
          <input
            type="time"
            className="form-control"
            id="time"
            name="time"
            value={session.time}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">For (minutes)</label>
          <input
            type="number"
            className="form-control"
            id="duration"
            name="duration"
            value={session.duration}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="program">Program</label>
          <input
            type="text"
            className="form-control"
            id="program"
            name="program"
            value={session.program}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            className="form-control"
            id="skills"
            name="skills"
            value={session.skills}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={session.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Session;
