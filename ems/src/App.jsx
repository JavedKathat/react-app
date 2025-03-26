import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import CreateTaskForm from "./context/CreateTaskForm";

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
      {/* <CreateTaskForm /> */}
    </div>
  );
}

export default App;
