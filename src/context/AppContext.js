import React, {createContext, useContext, useEffect, useState} from 'react';
import initialData from '../../data/data.json';

// Create the context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [boards, setBoards] = useState(initialData.boards);
  const [lists, setLists] = useState(initialData.lists);
  const [tasks, setTasks] = useState(initialData.tasks);
  const [layouts, setLayouts] = useState([]);

  const addBoard = (newBoard) => setBoards((prev) => [...prev, newBoard]);
  const addList = (newList) => setLists((prev) => [...prev, newList]);
  const addTask = (newTask) => setTasks((prev) => [...prev, newTask]);
  const deleteBoard = (boardId) => setBoards((prev) => prev.filter((board) => board.id !== boardId));
  // Function to edit a task
  const editTask = (taskId, updatedTaskData) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTaskData } : task
        )
    );
  };

  // Function to mark a task as done
  const markTaskAsDone = (taskId) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === taskId ? { ...task, done: true } : task
        )
    );
  };

  return (
    <AppContext.Provider value={{ boards, lists, tasks, addBoard, addList, addTask,
      deleteBoard, setBoards, editTask, markTaskAsDone, setLayouts, setTasks, layouts,setLists }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the context
export const useAppContext = () => useContext(AppContext);
