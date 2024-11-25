import React, { createContext, useContext, useState } from 'react';
import initialData from '../../data/data.json';

// Create the context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [boards, setBoards] = useState(initialData.boards);
  const [lists, setLists] = useState(initialData.lists);
  const [tasks, setTasks] = useState(initialData.tasks);

  const addBoard = (newBoard) => setBoards((prev) => [...prev, newBoard]);
  const addList = (newList) => setLists((prev) => [...prev, newList]);
  const addTask = (newTask) => setTasks((prev) => [...prev, newTask]);

  return (
    <AppContext.Provider value={{ boards, lists, tasks, addBoard, addList, addTask }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the context
export const useAppContext = () => useContext(AppContext);
