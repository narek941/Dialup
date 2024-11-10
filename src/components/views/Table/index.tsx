import { useMemo } from 'react';
import { EmptyData } from 'components';

import Pagination from '../Pagination';

import TableHead from './TableHead';
import styles from './Table.module.scss';
import TableToolbar from './TableToolbar';
import { ITableProps } from './types';
import TableBody from './TableBody';

const Table = ({
  take,
  type,
  sort,
  order,
  action,
  linkTo,
  headCells,
  rows = [],
  totalCount,
  page,
  filterField,
  tableName,
  dataCells,
  handleSort,
  handleDelete,
  handleStart,
  handleChangePage,
  handleStop,
  showEditAction,
  handleChangeRowsPerPage,
  handleSmsPermision,
  handleAPIPermision,
}: ITableProps) => {
  const renderTableBody = useMemo(() => {
    return (
      <TableBody
        rows={rows}
        action={action}
        tableName={tableName}
        handleDelete={handleDelete}
        dataCells={dataCells}
        handleStart={handleStart}
        handleStop={handleStop}
        showEditAction={showEditAction}
        handleSmsPermision={handleSmsPermision}
        handleAPIPermision={handleAPIPermision}
      />
    );
  }, [action, open, rows]);

  return (
    <>
      <div className={styles.wrapper}>
        <TableToolbar
          linkText={tableName}
          linkTo={linkTo}
          action={action}
          filterField={filterField}
        />
        <div className={styles.inner}>
          <div className={styles.table__wrapper}>
            <table className={styles.table}>
              <TableHead
                type={type}
                sort={sort}
                order={order}
                headCells={headCells}
                rowCount={rows.length}
                onRequestSort={handleSort}
              />
              {!!totalCount && renderTableBody}
            </table>
            {!totalCount && <EmptyData />}
          </div>
          <Pagination
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            currentPage={page}
            rowsPerPage={take}
            totalCount={totalCount}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
