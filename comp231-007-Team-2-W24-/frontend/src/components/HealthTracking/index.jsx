import React, { useState } from 'react';

function HealthGoalsInterface() {
  // State to manage the list of goals
  const [goals, setGoals] = useState([]);

  // Function to add a goal to the list
  function addGoal(description, target, deadline) {
    setGoals([...goals, { description, target, deadline, progress: 0, achieved: false }]);
  }

  // Function to remove a goal from the list
  function removeGoal(index) {
    setGoals(goals.filter((goal, i) => i !== index));
  }

  // Function to update goal details
  function saveChanges(index, updatedDescription, updatedTarget, updatedDeadline) {
    const updatedGoals = [...goals];
    updatedGoals[index] = {
      ...updatedGoals[index],
      description: updatedDescription,
      target: updatedTarget,
      deadline: updatedDeadline
    };
    setGoals(updatedGoals);
  }

  // Function to toggle the achieved status
  function toggleAchieved(index) {
    const updatedGoals = [...goals];
    updatedGoals[index].achieved = !updatedGoals[index].achieved;
    setGoals(updatedGoals);
  }

  // Function to update progress (Placeholder for actual implementation)
  function updateProgress(index) {
    // Placeholder for actual progress update logic
  }

  // JSX for displaying goals
  const goalList = goals.map((goal, index) => (
    <li key={index} className={`mb-4 p-4 ${goal.achieved ? 'bg-green-100' : 'bg-gray-100'} rounded-lg shadow-md`}>
      <span className="font-bold">{goal.description}</span> - 
      <span className="text-sm">Target: {goal.target}, Deadline: {goal.deadline}</span>
      <div className="mt-2">
        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeGoal(index)}>Remove</button>
        <button className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => toggleAchieved(index)}>Mark as Achieved</button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateProgress(index)}>Update Progress</button>
      </div>
    </li>
  ));

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const description = event.target.goalDescription.value;
    const target = event.target.goalTarget.value;
    const deadline = event.target.goalDeadline.value;
    addGoal(description, target, deadline);
    event.target.reset(); // Clear form fields after submission
  }

  // JSX for the component
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Health Goals Interface</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <label htmlFor="goalDescription" className="block text-gray-700 text-sm font-bold mb-2">Goal Description:</label>
        <input type="text" id="goalDescription" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <label htmlFor="goalTarget" className="block text-gray-700 text-sm font-bold mb-2">Target:</label>
        <input type="text" id="goalTarget" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <label htmlFor="goalDeadline" className="block text-gray-700 text-sm font-bold mb-2">Deadline:</label>
        <input type="date" id="goalDeadline" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button type="submit" className="mt-4 bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Set Goal</button>
      </form>
      <div id="goalList">
        <h2 className="text-xl font-bold mb-4">My Goals</h2>
        <ul>{goalList}</ul>
      </div>
    </div>
  );
}

export default HealthGoalsInterface;
