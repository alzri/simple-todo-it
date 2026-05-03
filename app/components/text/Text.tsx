import clsx from 'clsx';
import { ITextProps } from './Text.types';
import styles from './Text.module.scss';

export const Text = ({
  ref,
  component = 'p',
  size,
  color = 'primary',
  children,
  ...rest
}: ITextProps) => {
  const TagName = component;
  const classNames = clsx('text', styles[size], styles[color]);

  return (
    <TagName ref={ref} className={classNames} {...rest}>
      {children}
    </TagName>
  );
};
