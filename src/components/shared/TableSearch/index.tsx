/* eslint-disable react-hooks/exhaustive-deps */
import React, { ForwardedRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CloseIcon, SearchIcon } from 'assets/icons';
import { useDebounce } from 'hooks';

import styles from './TableSearch.module.scss';
import { ITableSearch } from './types';

const TableSearch = React.forwardRef<HTMLInputElement, Omit<ITableSearch, 'ref'>>(
  (
    {
      name,
      type,
      closed,
      onFocus,
      tooltip,
      callback,
      clearAll,
      filterName,
      debouncedTime = 700,
      placeholder = 'search',
      className = '',
      ...rest
    }: Omit<ITableSearch, 'ref'>,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const { t } = useTranslation();
    const inputClass = classNames(styles.search__input, className);
    const [state, setState] = useState<string>('');
    const debouncedValue = useDebounce<string>(state, debouncedTime);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };

    const handleSubmit = () => {
      if (callback && filterName) {
        callback(filterName, state);
      }
    };

    const handleClear = () => {
      setState('');
      if (callback && filterName) {
        callback(filterName, null);
      }
    };

    useEffect(() => handleClear(), [clearAll]);

    useEffect(() => {
      if (closed) {
        handleClear();
      }
    }, [closed]);

    useEffect(handleSubmit, [debouncedValue]);

    return (
      <div className={styles.search}>
        <div className={styles.search__icon}>
          <Tooltip followCursor={true} placement='bottom' title={t(tooltip)}>
            <div>{state && <CloseIcon onClick={handleClear} />}</div>
          </Tooltip>
          <div>
            <SearchIcon />
          </div>
        </div>
        <div>
          <input
            {...rest}
            id={name}
            ref={ref}
            type={type}
            value={state}
            onFocus={onFocus}
            autoComplete='off'
            className={inputClass}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  },
);

export default TableSearch;
