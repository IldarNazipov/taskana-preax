import { Icon } from '@/components';
import styles from './navBar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <a href='#' className={styles.navBarLink}>
            <Icon name='inbox' />
            Входящие
          </a>
        </li>
      </ul>
    </nav>
  );
};
