import { useCallback, useContext, useMemo, useState } from 'react';
import { TaskEditorContext } from './taskEditorContext';
import { TasksContext } from '@/contexts/tasks';
import { TASK_EDITOR_TYPE } from '@/constants';

export const TaskEditorProvider = ({ children }) => {
  const [isTaskEditorOpen, setTaskEditorOpen] = useState(false);
  const [taskEditorType, setTaskEditorType] = useState(TASK_EDITOR_TYPE.CREATE);
  const [currentTask, setCurrentTask] = useState(null);
  const { tasks } = useContext(TasksContext);

  const selectTask = useCallback(
    (id) => setCurrentTask(tasks.find((task) => task.id === id)),
    [tasks]
  );

  const resetCurrentTask = useCallback(() => setCurrentTask(null), []);

  const openTaskEditor = useCallback(() => setTaskEditorOpen(true), []);

  const closeTaskEditor = useCallback(() => setTaskEditorOpen(false), []);

  const value = useMemo(
    () => ({
      openTaskEditor,
      closeTaskEditor,
      isTaskEditorOpen,
      taskEditorType,
      setTaskEditorType,
      selectTask,
      currentTask,
      resetCurrentTask,
    }),
    [
      openTaskEditor,
      closeTaskEditor,
      isTaskEditorOpen,
      taskEditorType,
      selectTask,
      currentTask,
      resetCurrentTask,
    ]
  );

  return (
    <TaskEditorContext.Provider value={value}>
      {children}
    </TaskEditorContext.Provider>
  );
};
