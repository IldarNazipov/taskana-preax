import { useContext, useState } from 'react';
import { Button, Logo, ThemeSwitcher } from '@/components';
import { TaskEditorContext } from '@/contexts/taskEditor';
import { TASK_EDITOR_TYPE } from '@/constants';
import styles from './header.module.css';

export const Header = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    isTaskEditorOpen,
    openTaskEditor,
    taskEditorType,
    setTaskEditorType,
  } = useContext(TaskEditorContext);

  const handleClick = () => {
    if (isTaskEditorOpen && taskEditorType === TASK_EDITOR_TYPE.CREATE) return;

    if (!isTaskEditorOpen) {
      setLoading(true);
      setTimeout(() => setLoading(false), 300);
    }

    setTaskEditorType(TASK_EDITOR_TYPE.CREATE);
    openTaskEditor();
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerButtons}>
        <Button
          iconName='plus'
          isLoading={isLoading}
          type='button'
          onClick={handleClick}
        >
          Создать
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
