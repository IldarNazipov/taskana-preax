import { useContext } from 'react';
import { TaskEditorContext } from '@/contexts/taskEditor';
import { Button, Illustration } from '@/components';
import { clsx } from '@/utils/clsx';
import { TASK_EDITOR_TYPE } from '@/constants';
import styles from './taskList.module.css';

export const TaskList = ({ tasks }) => {
  const { openTaskEditor, setTaskEditorType, selectTask, currentTask } =
    useContext(TaskEditorContext);

  if (tasks.length === 0) {
    return (
      <div className={styles.emptyListContainer}>
        <h2 className={styles.emptyTitle}>
          Все твои задачи организованы как надо
        </h2>
        <p className={styles.emptySubtitle}>
          Отличная работа! Ты большой молодец!
        </p>
        <Illustration name='emptyTasks' />
      </div>
    );
  }

  const handleTaskEdit = (id) => {
    setTaskEditorType(TASK_EDITOR_TYPE.EDIT);
    selectTask(id);
    openTaskEditor();
  };

  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={clsx(
            styles.taskItem,
            task.id === currentTask?.id ? styles.activeTaskItem : ''
          )}
          tabIndex={0}
        >
          <div className={styles.taskItemWrapper}>
            <button type='button' className={styles.priorityCheckbox}>
              <div
                className={`${styles.priorityIcon} ${
                  styles[`priority-${task.priority}`]
                }`}
              ></div>
            </button>
            <span className={styles.taskTitle}>{task.title}</span>
          </div>
          <Button
            type='button'
            variant='icon'
            size='base'
            color='secondary'
            iconName='edit'
            className={styles.taskEditBtn}
            aria-label='Редактировать задачу'
            onClick={() => handleTaskEdit(task.id)}
          />
        </li>
      ))}
    </ul>
  );
};
