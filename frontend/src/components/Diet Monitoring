// src/components/DietMonitoringLayout.js
import React from 'react';

const DietMonitoringLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl w-full p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Log Dietary Intake</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="foodItem" className="block font-medium">Food Item:</label>
            <input type="text" id="foodItem" name="foodItem" className="w-full border rounded-md px-3 py-2 mt-1" />
          </div>
          <div>
            <label htmlFor="quantity" className="block font-medium">Quantity:</label>
            <input type="text" id="quantity" name="quantity" className="w-full border rounded-md px-3 py-2 mt-1" />
          </div>
          <div>
            <label htmlFor="calories" className="block font-medium">Calories:</label>
            <input type="text" id="calories" name="calories" className="w-full border rounded-md px-3 py-2 mt-1" />
          </div>
          <div>
            <label htmlFor="date" className="block font-medium">Date:</label>
            <input type="date" id="date" name="date" className="w-full border rounded-md px-3 py-2 mt-1" />
          </div>
          {/* Optional fields */}
          <div>
            <label htmlFor="fat" className="block font-medium">Fat:</label>
            <input type="text" id="fat" name="fat" className="w-full border rounded-md px-3 py-2 mt-1" />
          </div>
          <div>
            <label htmlFor="protein" className="block font-medium">Protein:</label>
            <input type="text" id="protein" name="protein" className="w-full border rounded-md px-3 py-2 mt-1" />
          </div>
          <div>
            <label htmlFor="carbohydrates" className="block font-medium">Carbohydrates:</label>
            <input type="text" id="carbohydrates" name="carbohydrates" className="w-full border rounded-md px-3 py-2 mt-1" />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4">
            Log Intake
          </button>
        </form>
      </div>

      {/* Display History */}
      <div className="max-w-xl w-full mt-8 p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Dietary Intake History</h1>
        <div className="overflow-auto max-h-60">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Food Item</th>
                <th className="border border-gray-400 px-4 py-2">Quantity</th>
                <th className="border border-gray-400 px-4 py-2">Calories</th>
                <th className="border border-gray-400 px-4 py-2">Date</th>
                <th className="border border-gray-400 px-4 py-2">Fat</th>
                <th className="border border-gray-400 px-4 py-2">Protein</th>
                <th className="border border-gray-400 px-4 py-2">Carbohydrates</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample row, replace with actual data */}
              <tr>
                <td className="border border-gray-400 px-4 py-2">Sample Food</td>
                <td className="border border-gray-400 px-4 py-2">1 serving</td>
                <td className="border border-gray-400 px-4 py-2">250 calories</td>
                <td className="border border-gray-400 px-4 py-2">2024-04-05</td>
                <td className="border border-gray-400 px-4 py-2">10g</td>
                <td className="border border-gray-400 px-4 py-2">20g</td>
                <td className="border border-gray-400 px-4 py-2">30g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DietMonitoringLayout;
