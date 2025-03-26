import React from "react";
import Header from "../Header";
import TaskListCard from "../TaskListCard";
import TaskCard from "../TaskList/TaskCard";

function EmployeeDashboard() {
  return (
    <div className="flex flex-col  w-full h-dvh px-5">
      <div className="mt-5">
        <Header />
      </div >
      <TaskListCard />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 overflow-y-auto mt-10 rounded-t-lg md:rounded-md mb-6 custom-scroll-hidden">
        <TaskCard />
      </div>
    </div>
  );
}

export default EmployeeDashboard;
