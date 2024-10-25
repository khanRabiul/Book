/* eslint-disable react/prop-types */
import { useState } from "react";

const TaskModal = ({handleClose, handleAddTask}) => {
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: "",
    priority: "",
    isFavourite: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",").map(tag => tag.trim());
    }

    setTask({ ...task, [name]: value });
  };

const handleSubmit = (e) => {
e.preventDefault();
// Capture data when submit
// const taskData = {title, description, tags, priority};
// Send task data back to TaskBoard.jsx
// handleAddTask(taskData);
handleAddTask(task)
handleClose();
}

  return (
    <section className="fixed inset-0 flex justify-center h-screen items-center bg-gray-700 bg-opacity-80 z-50">
      <div className="bg-slate-800 rounded-md w-full p-4 md:p-8 md:w-2/3">
        <form 
        onSubmit={handleSubmit}
        >
          <div className="mb-10">
            <h2 className="text-center text-3xl font-semibold ">
              Create your tasks
            </h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-4">
              <label htmlFor="title" className="text-gray-300 text-xl block">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={task.title}
                onChange={handleChange}
                className="w-full rounded-sm px-2 py-2 text-slate-900 text-xl"
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="description"
                className="text-gray-300 text-xl block"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={task.description}
                onChange={handleChange}
                rows="6"
                className="w-full rounded-sm px-2 py-2 text-slate-900 text-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="space-y-4">
                <label htmlFor="tags" className="text-gray-300 text-xl block">
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  /*  value={task.tags.join(",")} */
                  onChange={handleChange}
                  className="w-full rounded-sm px-2 py-2 text-slate-900 text-xl"
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="priority"
                  className="text-gray-300 text-xl block"
                >
                  Priority
                </label>
                <select
                  name="priority"
                  id="priority"
                  value={task.priority}
                  onChange={handleChange}
                  className="w-full rounded-sm px-2 py-2 text-slate-900 text-xl"
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            {/* Buttons  */}
            <div className="flex justify-between">
            <button
                type="button"
                onClick={() => handleClose(false)} 
                className="text-xl bg-red-600 px-4 py-3 rounded-md"
              >
                Close
              </button>

              <button
                type="submit"
                className="text-xl bg-blue-600 px-4 py-3 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
    
  );
};

export default TaskModal;
