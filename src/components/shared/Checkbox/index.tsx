import React, { ForwardedRef } from 'react';
import classNames from 'classnames';
import { CheckIcon } from 'assets/icons';

import styles from './Checkbox.module.scss';
import { ICheckbox } from './types';

const Checkbox = React.forwardRef<HTMLInputElement, Omit<ICheckbox, 'ref'>>(
  (
    {
      id,
      name,
      text,
      error,
      defaultChecked = false,
      className,
      color,
      ...props
    }: Omit<ICheckbox, 'ref'>,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const getCheckboxClassName = (color: string | undefined): string => {
      return classNames(styles['checkbox-wrapper'], className, {
        [styles['checkbox-primary']]: color === 'primary',
        [styles['checkbox-default']]: color === 'default',
        [styles['checkbox-secondary']]: color === 'secondary',
      });
    };

    const checkboxClassName = getCheckboxClassName(color);

    return (
      <div className={checkboxClassName}>
        <input
          id={id}
          ref={ref}
          {...props}
          name={name}
          type='checkbox'
          defaultChecked={defaultChecked}
        />
        <CheckIcon className={styles.icon} />
        <label htmlFor={id} className={styles['checkbox-label']}>
          {text}
        </label>
        {error && <span className={styles['checkbox-errorMsg']}>{error.message}</span>}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
