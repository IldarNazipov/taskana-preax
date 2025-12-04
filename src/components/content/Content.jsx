import { NavBar, SideBar, TaskEditor } from '@/components';
import styles from './content.module.css';

export const Content = ({ children }) => (
  <div className={styles.content}>
    <NavBar />
    <main className={styles.mainPart}>{children}</main>
    <SideBar />
    <TaskEditor />
  </div>
);
