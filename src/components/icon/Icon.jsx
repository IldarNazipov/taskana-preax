import * as allIcons from './icons';

export const Icon = ({ name, ...props }) => {
  const iconName = `${name[0].toUpperCase()}${name.slice(1)}Icon`;
  const IconComponent = allIcons[iconName];

  return <IconComponent {...props} />;
};
