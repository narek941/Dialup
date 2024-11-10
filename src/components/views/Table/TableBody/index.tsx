import classNames from 'classnames';
import { Link } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Routes } from 'types';

import {
  AccountBlockIcon,
  ApiIcon,
  BinIcon,
  EyeOpenIcon,
  SmsIcon,
  UnblockIcon,
} from 'assets/icons';

import styles from '../Table.module.scss';

import { ITableBody } from './types';
import ToggleAction from '../ToggleAction';
import { isAudio } from 'utils/isAudio';
import AudioPlayer from 'components/shared/AudioPlayer';
import { isStatusColumn } from 'utils/isStatusColumn';

const TableBody = ({
  rows,
  handleDelete,
  dataCells = [],
  handleStart,
  handleStop,
  showEditAction,
  handleSmsPermision,
  handleAPIPermision,
}: ITableBody) => {
  const renderRows = rows.map((r: any, index) => {
    const isLastItem = index === rows.length - 1;
    const id = r[dataCells[0]];
    const customerUrl = `${Routes.Customers}/${r[dataCells[0]]}`;

    const renderCell = (item: string, isLink?: boolean) => {
      if (isLink) {
        return (
          <Link to={customerUrl} className={styles.table__body__row__ceil__actions__setting}>
            {item}
          </Link>
        );
      } else if (isAudio(item)) {
        return <AudioPlayer src={item} />;
      } else {
        return isStatusColumn(item);
      }
    };

    return (
      <TableRow className={styles.table__body__row} tabIndex={id} key={index}>
        {dataCells.map((item: string, index: number) => (
          <TableCell key={item} align='left' className={styles.table__body__row__ceil}>
            {renderCell(r[dataCells[index]], !index) as any}
          </TableCell>
        ))}
        {(showEditAction ||
          handleDelete ||
          handleSmsPermision ||
          handleAPIPermision ||
          handleStart ||
          handleStop) && (
          <TableCell
            className={classNames(
              styles.table__body__row__ceil,
              styles.table__body__row__ceil__actions,
            )}
            align='left'
          >
            {showEditAction && (
              <Link to={customerUrl} className={styles.table__body__row__ceil__actions__setting}>
                <EyeOpenIcon />
                <span
                  className={classNames({
                    [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
                  })}
                >
                  View {id}
                </span>
              </Link>
            )}

            {handleDelete && (
              <ToggleAction
                id={id}
                action='Delete'
                handleSubmit={handleDelete}
                Icon={BinIcon}
                tooltipClasses={classNames({
                  [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
                })}
              />
            )}
            {handleSmsPermision && (
              <ToggleAction
                id={id}
                action='Enable SMS'
                handleSubmit={handleSmsPermision}
                Icon={SmsIcon}
                tooltipClasses={classNames({
                  [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
                })}
              />
            )}
            {handleAPIPermision && (
              <ToggleAction
                id={id}
                action='Enable API'
                Icon={ApiIcon}
                handleSubmit={handleAPIPermision}
                tooltipClasses={classNames({
                  [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
                })}
              />
            )}
            {handleStart && (
              <ToggleAction
                id={id}
                action='Start'
                Icon={UnblockIcon}
                handleSubmit={handleStart}
                tooltipClasses={classNames({
                  [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
                })}
              />
            )}
            {handleStop && (
              <ToggleAction
                id={id}
                action='Stop'
                Icon={AccountBlockIcon}
                handleSubmit={handleStop}
                tooltipClasses={classNames({
                  [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
                })}
              />
            )}
          </TableCell>
        )}
      </TableRow>
    );
  });

  return <tbody className={styles.table__body}>{renderRows}</tbody>;
};

export default TableBody;
