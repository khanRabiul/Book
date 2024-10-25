import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import TaskModal from "./TaskModal";

const TaskBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Receives data From Modal form
  const [tasks, setTasks] = useState([]);

  // Add or update data
  const handleAddTask = (newTask) => {
    // Making a copy of previous data and update with new
    setTasks([...tasks, newTask]);
  };

  const handleModal = (open) => {
    setIsModalOpen(open);
  };

  return (
    <main className="mt-48">
      <h1 className="text-center text-3xl font-semibold capitalize">
        Add your task
      </h1>

      <div className="container mx-auto">
        <div className="w-4/3 bg-slate-600 rounded-lg py-10 px-6">
          <table className=" w-full mb-8">
            <thead className="bg-slate-700">
              <tr className="text-center">
                <th className="p-3 text-lg w-1/5">Task</th>
                <th className="p-3 text-lg w-2/5 text-center">Description</th>
                <th className="p-3 text-lg w-1/5">Tags</th>
                <th className="p-3 text-lg w-1/5">Priority</th>
                <th className="p-3 text-lg w-1/5">Response</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td className="p-3 text-lg w-1/5 text-center">
                    <span>
                      <FaRegStar className="inline-block mr-2" />
                    </span>
                    {task.title}
                  </td>
                  <td className="p-3 text-lg w-2/5 text-center">
                    {task.description}
                  </td>
                  <td className="p-3 text-lg w-1/5 text-center">
                    {Array.isArray(task.tags)
                      ? task.tags.join(", ")
                      : task.tags}
                  </td>
                  <td className="p-3 text-lg w-1/5 text-center">
                    {task.priority}
                  </td>
                  <td className="p-3 text-lg w-1/5 text-center flex gap-2">
                    <button className="text-sm px-2 py-1 bg-green-800 rounded-md">
                      Edit
                    </button>
                    <button className="text-sm px-2 py-1 bg-red-800 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Buttons  */}
          <div>
            <button
              className="px-12 py-2 bg-green-800 rounded-md font-semibold text-lg mr-8"
              onClick={() => handleModal(true)}
            >
              Add Task
            </button>
            <button className="px-12 py-2 bg-red-600 rounded-md font-semibold text-lg">
              Delete All
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <TaskModal
          handleClose={() => handleModal(false)}
          handleAddTask={handleAddTask}
        />
      )}
    </main>
  );
};

export default TaskBoard;
