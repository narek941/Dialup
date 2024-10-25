import classNames from 'classnames';
import { Link } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { Routes } from 'types';
import { AccountBlockIcon, ApiIcon, BinIcon, EditIcon, SmsIcon, UnblockIcon } from 'assets/icons';

import styles from '../Table.module.scss';

import { ITableBody } from './types';
import ToggleAction from '../ToggleAction';

const TableBody = ({
  rows,
  tableName,
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

    return (
      <TableRow className={styles.table__body__row} tabIndex={id} key={index}>
        {dataCells.map((item: string, index: number) => (
          <TableCell key={item} align='left' className={styles.table__body__row__ceil}>
            {!index ? (
              <Link
                to={`${Routes.Customers}/${r[dataCells[0]]}`}
                className={styles.table__body__row__ceil__actions__setting}
              >
                {r[dataCells[index]]}
              </Link>
            ) : (
              r[dataCells[index]]
            )}
          </TableCell>
        ))}

        <TableCell
          className={classNames(
            styles.table__body__row__ceil,
            styles.table__body__row__ceil__actions,
          )}
          align='left'
        >
          {showEditAction && (
            <Link
              to={`//${tableName}/${dataCells[0]}`}
              className={styles.table__body__row__ceil__actions__setting}
            >
              <EditIcon />
              <span
                className={classNames({
                  [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
                })}
              >
                Edit {tableName}
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
      </TableRow>
    );
  });

  return <tbody className={styles.table__body}>{renderRows}</tbody>;
};

export default TableBody;
