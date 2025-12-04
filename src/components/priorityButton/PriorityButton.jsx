import { Icon } from '@/components';
import { clsx } from '@/utils/clsx';
import styles from './priorityButton.module.css';

export const PriorityButton = ({ option, checkedBtn, handleClick }) => {
  const isActive = checkedBtn === option.priority;

  return (
    <button
      type='button'
      className={clsx(
        styles.priorityOption,
        styles[`priority-${option.priority}`],
        isActive ? styles.priorityOptionActive : ''
      )}
      onClick={() => handleClick(option.priority)}
      aria-pressed={isActive}
      aria-label={`${option.label} приоритет`}
      tabIndex={isActive ? -1 : 0}
    >
      <Icon name={option.icon} />
    </button>
  );
};
