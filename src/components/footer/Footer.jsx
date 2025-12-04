import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Проект выполнен в рамках стажировки{' '}
        <a
          className={styles.footerLink}
          href='https://preax.ru/'
          rel='noopener noreferrer'
          target='_blank'
        >
          PREAX
        </a>
      </p>
    </footer>
  );
};
