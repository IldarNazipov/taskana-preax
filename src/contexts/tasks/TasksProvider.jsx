import { useCallback, useMemo, useState } from 'react';
import { TasksContext } from './tasksContext';
import { uniqueId } from '@/utils/uniqueId';
import { sortTasks } from '@/utils/sortTasks';

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [order, setOrder] = useState('createdDesc');

  const addTask = useCallback(({ title, priority }) => {
    const date = new Date().toISOString();
    const newTask = {
      id: uniqueId(),
      title,
      priority,
      createdAt: date,
      updatedAt: date,
    };
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const updateTask = useCallback((id, payload) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, ...payload, updatedAt: new Date().toISOString() }
          : task
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const sortedTasks = useMemo(() => sortTasks(tasks, order), [tasks, order]);

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      updateTask,
      deleteTask,
      sortedTasks,
      order,
      setOrder,
    }),
    [tasks, addTask, updateTask, deleteTask, order, sortedTasks]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
