import React, { useState } from "react";
import Header from "../Header";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const AdminDashboard = () => {
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
    <div className="w-full min-h-screen bg-gray-200 flex justify-center">
      <div className="bg-gray-800 w-[84%] md:w-[40%] my-4 p-2 border-blue-400 border-2 md:border-[3px] rounded-sm">
        <div className="flex justify-start gap-4 md:gap-8 text-2xl">
          <button>
            <IoArrowBackCircleOutline />
          </button>
          <h1>Create Task</h1>
        </div>

        <div className="mt-4">
          <form className="desciption">
            <div className="flex flex-col px-4 pb-3">
              <label htmlFor="" className="mb-2">
                Task Title
              </label>
              <input
                type="text"
                placeholder="make a ui design"
                className="p-1 rounded  bg-gray-600"
              />
            </div>
            <div className="flex flex-col px-4 pb-3">
              <label htmlFor="desciption" className="mb-2">
                Description
              </label>
              <textarea
                type="text"
                name="desciption"
                id="desciption"
                placeholder="Detailed Description of task(Max words 500)"
                rows="4"
                cols="30"
                className="p-1 rounded  bg-gray-600"
              />
            </div>

            <div className="flex flex-col px-4  pb-3">
              <label htmlFor="date" className="mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="dd/mm/yyyy"
                className="p-1 rounded  bg-gray-600 w-full"
              />
            </div>

            <div className="flex flex-col px-4 pb-3">
              <label htmlFor="assignTo" className="mb-2">
                Assign To
              </label>
              <input
                type="text"
                id="assignTo"
                name="assignTo"
                className="p-1 rounded  bg-gray-600"
              />
            </div>

            <div className="flex flex-col px-4 pb-3">
              <label htmlFor="assignTo" className="mb-2">
                Category
              </label>
              <input
                type="text"
                id="assignTo"
                name="assignTo"
                placeholder="make a ui design"
                className="p-1 rounded  bg-gray-600"
              />
            </div>
            <div className="px-4 pb-3 mt-6 flex justify-end">
              <button className=" bg-blue-500 rounded-md font-medium w-full md:w-32 h-10 shadow-lg text-lg hover:bg-blue-700 hover:border">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
