import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  const [title, seTtitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    seTtitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      
      <form onSubmit={handleSubmit} 
      className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl text-white font-bold mb-2">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          seTtitle(e.target.value);
        }}
        className="bg-slate-300 p-3 w-full mb-3"
      />
      <textarea
        placeholder="Escribe la Descripcion"
        onChange={(e) => setDescription(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-3"
      ></textarea>
      <button className="bg-indigo-600 px-4 py-1 m-auto  text-white hover:bg-indigo-500">Save</button>
    </form>
    </div>
  );
}

export default TaskForm;
