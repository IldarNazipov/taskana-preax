import { useState } from 'react';
import { Icon } from '@/components';
import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    setTheme(newTheme);
  };

  return (
    <div className={styles.themeSwitcher}>
      <button
        className={styles.themeSwitcherBtn}
        onClick={toggleTheme}
        aria-label='Сменить тему'
      >
        <div
          className={`${styles.activeSquare} ${
            theme === 'dark' ? styles.moveRight : ''
          }`}
        />
        <div
          className={`${styles.iconWrapper} ${
            theme === 'light' ? styles.activeBtn : ''
          }`}
        >
          <Icon name='sun' />
        </div>
        <div
          className={`${styles.iconWrapper} ${
            theme === 'dark' ? styles.activeBtn : ''
          }`}
        >
          <Icon name='moon' />
        </div>
      </button>
    </div>
  );
};
