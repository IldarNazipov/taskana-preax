import * as allIllustrations from './illustrations';
import styles from './illustration.module.css';

export const Illustration = ({ name, className, ...props }) => {
  const illustrationName = `${name[0].toUpperCase()}${name.slice(
    1
  )}Illustration`;
  const IllustrationComponent = allIllustrations[illustrationName];

  return (
    <IllustrationComponent
      className={`${styles.illustration} ${className}`}
      {...props}
    />
  );
};
