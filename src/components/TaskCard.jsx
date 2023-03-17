import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { removeTask } = useContext(TaskContext);

  return (
    <div className="bg-slate-800 text-white p-6 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-600 text-sm">{task.description} </p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400"
        onClick={() => removeTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
