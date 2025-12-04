import { useContext, useEffect, useRef, useState } from 'react';
import { TaskEditorContext } from '@/contexts/taskEditor';
import { TasksContext } from '@/contexts/tasks';
import { useCloseOnEsc } from './useCloseOnEsc';
import { TASK_EDITOR_TYPE, ANIMATION_DURATION_MS } from '@/constants';

export const useTaskEditor = () => {
  const [checkedBtn, setCheckedBtn] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const wasOpen = useRef(false);

  const { addTask, updateTask, deleteTask } = useContext(TasksContext);
  const {
    isTaskEditorOpen,
    closeTaskEditor,
    taskEditorType,
    currentTask,
    resetCurrentTask,
  } = useContext(TaskEditorContext);

  useEffect(() => {
    if (!isTaskEditorOpen) return;

    if (taskEditorType === TASK_EDITOR_TYPE.EDIT) {
      setInputValue(currentTask.title);
      setCheckedBtn(currentTask.priority);
    } else {
      setInputValue('');
      setCheckedBtn(1);
      resetCurrentTask();
    }
  }, [isTaskEditorOpen, currentTask, taskEditorType, resetCurrentTask]);

  useEffect(() => {
    if (!isTaskEditorOpen || wasOpen.current) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
      wasOpen.current = true;
    }, ANIMATION_DURATION_MS);

    return () => clearTimeout(timer);
  }, [isTaskEditorOpen]);

  useEffect(() => {
    if (!isTaskEditorOpen) return;
    if (wasOpen.current) {
      inputRef.current?.focus();
    }
  }, [taskEditorType, isTaskEditorOpen, currentTask]);

  const handleInputClear = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  const resetEditor = () => {
    setInputValue('');
    setCheckedBtn(1);
    resetCurrentTask();
    closeTaskEditor();
    wasOpen.current = false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (taskEditorType === TASK_EDITOR_TYPE.EDIT) {
      updateTask(currentTask.id, {
        title: inputValue.trim(),
        priority: checkedBtn,
      });
    } else {
      addTask({ title: inputValue.trim(), priority: checkedBtn });
    }
    resetEditor();
  };

  const handleDelete = (id) => {
    deleteTask(id);
    resetEditor();
  };

  const isDisabled =
    taskEditorType === TASK_EDITOR_TYPE.EDIT
      ? (inputValue.trim() === currentTask?.title &&
          checkedBtn === currentTask?.priority) ||
        !inputValue.trim()
      : !inputValue.trim();

  useCloseOnEsc(isTaskEditorOpen, resetEditor);

  return {
    inputValue,
    setInputValue,
    checkedBtn,
    setCheckedBtn,
    inputRef,
    handleInputClear,
    handleSubmit,
    handleDelete,
    resetEditor,
    isDisabled,
    isTaskEditorOpen,
    taskEditorType,
    currentTask,
  };
};
