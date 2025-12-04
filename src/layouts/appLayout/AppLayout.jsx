import { Header, Content } from '@/components';
import styles from './appLayout.module.css';

export const AppLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content>{children}</Content>
    </div>
  );
};
