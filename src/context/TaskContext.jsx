import { createContext, useState,useEffect } from "react";
import { tasks as data } from "../data/tasks";


export const TaskContext = createContext();

export function TaskContextProvide(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  function removeTask(ID) {
    setTasks(tasks.filter((task) => task.id !== ID));
  }

  useEffect(() => {
    setTasks(data);
  }, []);


  return (
    <TaskContext.Provider
      value={{ tasks,
         removeTask,
          createTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
