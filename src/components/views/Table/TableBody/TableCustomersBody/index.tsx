import { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { Routes } from 'types';
import { Alert } from 'components';
import { BinIcon, EditIcon } from 'assets/icons';
import { useAppSelector } from 'hooks';
import { authSelectors } from 'store/authSlice';

import styles from '../../Table.module.scss';

import { ITableBodyProps } from './types';
import Permission from '../../PermissionAction';

const TableCustomersBody = ({
  rows,
  open,
  handleClose,
  handleBlock,
  handleDelete,
  handleUnblock,
  toggleAlertOpen,
}: ITableBodyProps) => {
  const [delID, setID] = useState<number | null>(null);

  const personalInfo = useAppSelector(authSelectors.selectPersonalInfo);

  const renderRows = rows.map(({ id, email, lastname, name }: any, index) => {
    const dataCells = [id, name, lastname, email];
    const isLastItem = index === rows.length - 1;

    return (
      <TableRow className={styles.table__body__row} tabIndex={id} key={index}>
        {dataCells.map((item, index) => (
          <TableCell key={item} align='left' className={styles.table__body__row__ceil}>
            {!index ? (
              <Link
                to={`${Routes.Customers}/${id}`}
                className={styles.table__body__row__ceil__actions__setting}
              >
                {item}
              </Link>
            ) : (
              item
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
          <Link
            to={`${Routes.EditUser}/${id}`}
            className={styles.table__body__row__ceil__actions__setting}
          >
            <EditIcon />
            <span
              className={classNames({
                [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
              })}
            >
              Edit Customers
            </span>
          </Link>

          {status !== 'DELETED' && handleClose && (
            <div
              className={classNames(styles.table__body__row__ceil__actions__bin, {
                [styles.table__body__row__ceil__actions__bin__disabled]: personalInfo?.id == id,
              })}
              onClick={() => {
                setID(id);
                toggleAlertOpen && toggleAlertOpen();
              }}
            >
              <BinIcon />
              <span
                className={classNames({
                  [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
                })}
              >
                Delete Customers
              </span>
            </div>
          )}
          <Permission
            id={id}
            action='customers'
            status={'DELETED'}
            handleBlock={handleBlock}
            handleUnblock={handleUnblock}
            tooltipClasses={classNames({
              [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
            })}
          />
          <Permission
            id={id}
            action='customers'
            status={'BLOCKED'}
            handleBlock={handleBlock}
            handleUnblock={handleUnblock}
            tooltipClasses={classNames({
              [styles.table__body__row__ceil__actions__bin__users_last]: isLastItem,
            })}
          />
        </TableCell>
      </TableRow>
    );
  });

  return (
    <tbody className={styles.table__body}>
      {renderRows}
      <Alert
        id={delID}
        open={open}
        handleAction={handleDelete}
        type='DELETE'
        handleClose={() => handleClose && handleClose()}
      />
    </tbody>
  );
};

export default TableCustomersBody;
