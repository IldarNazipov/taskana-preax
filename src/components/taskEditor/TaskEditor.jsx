import { Button, Icon, PriorityButton } from '@/components';
import { clsx } from '@/utils/clsx';
import { useTaskEditor } from '@/hooks';
import { PRIORITY_OPTIONS, TASK_EDITOR_TYPE } from '@/constants';
import styles from './taskEditor.module.css';

export const TaskEditor = () => {
  const {
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
  } = useTaskEditor();

  return (
    <form
      id='task-form'
      className={clsx(styles.taskEditor, isTaskEditorOpen ? styles.open : '')}
      onSubmit={handleSubmit}
    >
      <div className={styles.scrollable}>
        <div className={styles.taskEditorHeader}>
          <h2 className={styles.taskEditorTitle}>
            {taskEditorType === TASK_EDITOR_TYPE.EDIT
              ? 'Редактирование'
              : 'Создание задачи'}
          </h2>
          <label htmlFor='task' className={styles.taskInputLabel}>
            Название
            <span className={styles.asterisk}>*</span>
          </label>
          <div className={styles.taskInputWrapper}>
            <input
              ref={inputRef}
              type='text'
              name='task'
              id='task'
              className={styles.taskInput}
              placeholder='Название задачи'
              value={inputValue}
              autoComplete='off'
              required
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue && (
              <button
                type='button'
                className={styles.clearBtn}
                aria-label='Очистить поле'
                onClick={handleInputClear}
              >
                <Icon name='cross' />
              </button>
            )}
          </div>
        </div>

        <div className={styles.taskEditorContent}>
          <div className={styles.priorityGroup}>
            <span className={styles.priorityLabel}>Приоритет</span>
            <div className={styles.priorityOptions}>
              {PRIORITY_OPTIONS.map((option) => (
                <PriorityButton
                  option={option}
                  checkedBtn={checkedBtn}
                  handleClick={setCheckedBtn}
                  key={option.priority}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.taskEditorFooter}>
        <div className={styles.leftButtonsWrapper}>
          <Button
            type='submit'
            variant='text'
            size='lg'
            color='primary'
            disabled={isDisabled}
          >
            {taskEditorType === TASK_EDITOR_TYPE.EDIT ? 'Сохранить' : 'Создать'}
          </Button>
          <Button
            type='reset'
            variant='text'
            size='lg'
            color='secondary'
            onClick={resetEditor}
          >
            Отмена
          </Button>
        </div>
        {taskEditorType === TASK_EDITOR_TYPE.EDIT && (
          <Button
            type='button'
            variant='icon'
            size='lg'
            color='negative'
            iconName='trash'
            aria-label='Удалить задачу'
            onClick={() => handleDelete(currentTask.id)}
          />
        )}
      </div>
    </form>
  );
};
