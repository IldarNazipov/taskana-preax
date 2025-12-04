import { useContext, useRef, useState } from 'react';
import { Icon } from '@/components';
import { TasksContext } from '@/contexts/tasks';
import {
  useCloseOnClickOutside,
  useCloseOnEsc,
  useCloseOnFocusOut,
} from '@/hooks';
import { clsx } from '@/utils/clsx';
import styles from './dropdown.module.css';

export const Dropdown = ({ options }) => {
  const { order, setOrder } = useContext(TasksContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState(
    options.find((option) => option.value === order)
  );
  const [isSelected, setSelected] = useState(false);
  const dropdownRef = useRef(null);

  const handleClose = () => {
    setDropdownOpen(false);
  };

  useCloseOnClickOutside(dropdownRef, isDropdownOpen, handleClose);
  useCloseOnFocusOut(dropdownRef, isDropdownOpen, handleClose);
  useCloseOnEsc(isDropdownOpen, handleClose);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const selectOption = (option) => {
    setChosenOption(option);
    setOrder(option.value);
    setSelected(true);
    toggleDropdown();
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        type='button'
        className={clsx(
          styles.dropdownTrigger,
          isSelected ? styles.selected : ''
        )}
        onClick={toggleDropdown}
      >
        <Icon name={chosenOption.value} />
        <span className={styles.dropdownTriggerTitle}>
          {`По ${chosenOption.title.toLowerCase()}`}
        </span>
        <Icon name='chevronBottom' />
      </button>
      <ul
        className={clsx(styles.dropdownList, isDropdownOpen ? styles.open : '')}
      >
        <li className={styles.dropdownItem}>
          <Icon name='filter' />
          <span className={styles.dropdownListTitle}>Сортировка по:</span>
        </li>
        {options.map((option) => (
          <li key={option.value}>
            <button
              type='button'
              className={styles.dropdownItem}
              onClick={() => selectOption(option)}
            >
              <Icon name={option.value} />
              <span className={styles.dropdownItemTitle}>{option.title}</span>
              <Icon
                name='check'
                className={
                  option.value === chosenOption.value ? '' : styles.hiddenIcon
                }
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
