import { Statistic } from '@/components';
import styles from './sideBar.module.css';

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <Statistic />
    </aside>
  );
};
