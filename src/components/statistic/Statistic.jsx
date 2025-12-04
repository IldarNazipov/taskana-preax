import { Illustration } from '@/components';
import styles from './statistic.module.css';

export const Statistic = () => {
  return (
    <div className={styles.statisticContainer}>
      <Illustration name='notebook' />
      <p className={styles.statisticText}>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику{' '}
        <br />и самочувствие.
      </p>
    </div>
  );
};
