import React, { useState } from "react";
import './HealthTracking.css'; 

function HealthTracking() {
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Activity data submitted:", {
      activityType,
      duration,
      intensity,
      date
    });
    setActivityType("");
    setDuration("");
    setIntensity("");
    setDate("");
  };

  return (
    <div className="health-tracking">
      <h1>Health Tracking</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Activity Type:
          <input
            type="text"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
            required
          />
        </label>
        <label>
          Duration (in minutes):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </label>
        <label>
          Intensity:
          <input
            type="text"
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log Activity</button>
      </form>
    </div>
  );
}

export default HealthTracking;
