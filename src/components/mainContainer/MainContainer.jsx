import { useContext } from 'react';
import { Dropdown, TaskList } from '@/components';
import { SORTING_OPTIONS } from '@/constants';
import { TasksContext } from '@/contexts/tasks';
import styles from './mainContainer.module.css';

export const MainContainer = () => {
  const { sortedTasks } = useContext(TasksContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainerHeader}>
        <h1>Входящие</h1>
        <Dropdown options={SORTING_OPTIONS} />
      </div>
      <TaskList tasks={sortedTasks} />
    </div>
  );
};
