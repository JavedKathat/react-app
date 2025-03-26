import React, { useState } from "react";

const CreateTaskForm = () => {
  const [formData, setFormData] = useState({
    taskTitle: "",
    description: "",
    date: "",
    assignTo: "",
    category: "Work",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Task</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-black">
            <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700">
              Task Title
            </label>
            <input
              type="text"
              id="taskTitle"
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="assignTo" className="block text-sm font-medium text-gray-700">
              Assign To
            </label>
            <input
              type="text"
              id="assignTo"
              name="assignTo"
              value={formData.assignTo}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Work</option>
              <option>Personal</option>
              <option>Urgent</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskForm;
