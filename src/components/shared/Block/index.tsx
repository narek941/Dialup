import classNames from 'classnames';

import { IBlock } from './types';
import styles from './Block.module.scss';
import { EditIcon } from 'assets/icons';
import { Card } from '@mui/material';
import { isArray } from 'lodash';
import Select from '../Select';

const Block = ({ className, obj, isFullWidth, children, header }: IBlock): JSX.Element => {
  const blockClass: string = classNames(styles.block, className, {
    [styles.block__full]: isFullWidth,
  });

  return (
    <div className={styles.wrapper}>
      {header ? <h3>{header}</h3> : null}
      <Card variant='outlined' className={blockClass}>
        <EditIcon className={styles.block__edit} />

        {obj &&
          Object.entries(obj).map(([key, value]) => (
            <div className={styles.block__value} key={key}>
              <div>
                <strong className={styles.block__value__key}>{key}:</strong>
              </div>
              <div>
                {!isArray(value) ? (
                  (value || 'N/A')?.toString()
                ) : (
                  <Select
                    options={value.map((item) => {
                      return { label: item, value: item };
                    })}
                  />
                )}
              </div>
            </div>
          ))}
        {children}
      </Card>
    </div>
  );
};

export default Block;
