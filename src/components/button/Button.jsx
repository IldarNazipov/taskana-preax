import { Icon } from '@/components';
import { clsx } from '@/utils/clsx';
import styles from './button.module.css';

export const Button = ({
  size = 'base',
  color = 'accent',
  variant = 'text-icon',
  className,
  iconName,
  children,
  isLoading,
  ...props
}) => {
  const classNames = clsx(
    styles.button,
    variant === 'icon' ? styles[`size-icon-${size}`] : styles[`size-${size}`],
    styles[`color-${color}`],
    className,
    isLoading && styles.loading
  );

  return (
    <button className={classNames} {...props}>
      {variant !== 'text' && <Icon name={iconName} />}
      {variant !== 'icon' && (
        <span className={`${styles.buttonText}`}>{children}</span>
      )}
      {isLoading && <Icon name='loading' className={styles.loader} />}
    </button>
  );
};
