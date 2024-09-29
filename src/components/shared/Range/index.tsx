import React, { useState, useRef, useEffect, forwardRef } from 'react';
import Slider from '@mui/material/Slider';
import classNames from 'classnames';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { isNull } from 'lodash';
import { useOnClickOutside } from 'hooks';
import { CloseIcon, RangeIcon } from 'assets/icons';

import Input from '../Input';

import styles from './Range.module.scss';
import { IRangeSwipe } from './types';

const RangeSwipe = forwardRef<HTMLInputElement, IRangeSwipe>(
  (
    {
      name,
      Icon,
      closed,
      min = 0,
      tooltip,
      onChange,
      callback,
      filterName,
      max = 100000,
      isPercent = false,
      value: propsValue,
      placeholder = 'search',
      ...rest
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const value = propsValue;
    const customRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [firstInput, setFirstInput] = useState<number>(Number(min));
    const [secondInput, setSecondInput] = useState<number>(Number(max));
    const [defaultRangeValue, setDefaultRangeValue] = useState<number[]>([
      Number(min),
      Number(max),
    ]);

    const headerClass = classNames(styles.header, { [styles.header__open]: isOpen });
    const modalClass = classNames(styles.modal, { [styles.modal__open]: isOpen });
    const textClass = classNames(styles.header__input, {
      [styles.header__input__placeholder]: !value[0] && !value[1],
    });

    const toggleDrop = () => {
      if (!isOpen) setIsOpen(true);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    const handleSubmit = () => {
      if (callback && filterName && !!value[1] && isOpen) {
        callback(filterName, [Number(value[0]), Number(value[1])]);
      }
      handleClose();
    };

    const handleFirstBlur = () => {
      if (!isNaN(firstInput)) {
        if (Number(firstInput) > Number(min)) {
          onChange([firstInput, value[1]]);
          setFirstInput(NaN);
        } else {
          onChange([Number(min), value[1]]);
          setFirstInput(NaN);
        }
      }
    };

    const handleSecondBlur = () => {
      if (!isNaN(secondInput)) {
        if (Number(secondInput) < Number(max)) {
          onChange([value[0], secondInput]);
          setSecondInput(NaN);
        } else {
          onChange([value[0], Number(max)]);
          setSecondInput(NaN);
        }
      }
    };

    const handleFirstChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setFirstInput(Number(target.value));
    };

    const handleRangeChange = (event: Event, newValue: number | number[]) => {
      setFirstInput(NaN);
      setSecondInput(NaN);
      setDefaultRangeValue(null as any);
      onChange(newValue as number[]);
    };

    const handleSecondChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setSecondInput(Number(target.value));
    };

    const handleClear = (event?: React.FormEvent<HTMLElement>) => {
      event?.stopPropagation();
      onChange(['', '']);
      setDefaultRangeValue([min, max]);
      callback && callback(filterName, null);
    };

    useEffect(() => {
      setFirstInput(Number(min));
      setSecondInput(Number(max));
    }, [min, max]);

    useEffect(() => {
      if (closed && callback) {
        handleClear();
      }
    }, [closed]);

    useEffect(() => {
      setDefaultRangeValue([min, max]);
    }, [min, max]);

    useOnClickOutside(customRef, handleSubmit);

    return (
      <div role='button' onClick={toggleDrop} className={headerClass}>
        <Tooltip followCursor={true} placement='bottom' title={t(tooltip)}>
          <p className={textClass}>
            {value[0] === '' && value[1] === '' ? placeholder : `${value[0]} / ${value[1]}`}
          </p>
        </Tooltip>
        <div className={styles.icon__wrapper}>
          <div className={styles.icon} onClick={handleClear}>
            {(value[0] === '' && value[1] === '') || <CloseIcon />}
          </div>
          <div className={styles.icon}>{Icon ? <Icon /> : <RangeIcon />}</div>
        </div>
        <div className={modalClass} ref={customRef}>
          <div className={styles.wrapper}>
            <div className={styles.inner}>
              <Input
                value={!isNaN(firstInput) ? firstInput : value[0]}
                name={'firstInput'}
                type='number'
                className={styles.input}
                placeholder={isNull(min) ? '' : min.toString()}
                onChange={handleFirstChange}
                onBlur={handleFirstBlur}
              />
              <span>-</span>
              <Input
                type='number'
                name={'secondInput'}
                className={styles.input}
                onBlur={handleSecondBlur}
                onChange={handleSecondChange}
                placeholder={isNull(max) ? '' : max.toString()}
                value={!isNaN(secondInput) ? secondInput : value[1]}
              />
            </div>
            <div className={styles.slider}>
              <Slider
                value={defaultRangeValue || value}
                {...rest}
                id={name}
                ref={ref}
                name={name}
                max={Number(max)}
                min={Number(min)}
                onChange={handleRangeChange}
                aria-labelledby='input-slider'
                step={isPercent ? 0.01 : 0.0001}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default RangeSwipe;
