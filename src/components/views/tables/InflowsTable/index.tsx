import { inflowOutflowTable } from 'constants/index';

import { useEffect, MouseEvent, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import classNames from 'classnames';
import { useAppDispatch } from 'hooks';
import { wrapWithBaseCurrency } from 'utils';
import { Alert, EmptyData, Pagination, ScrollWrapper } from 'components';
import { accountsSelectors } from 'store/accountsSlice';
import { inflowFilterUpdate } from 'store/walletsSlice/thunks';
import InflowsFilters from 'components/views/filters/InflowsFilters';
import { walletsActions, walletsSelectors } from 'store/walletsSlice';
import { VectorIcon } from 'assets/icons';

import InflowsTableRow from './InflowsTableRow';
import styles from './InflowsTable.module.scss';

const InflowsTable = ({ filterVisible, handleAddInflow }: any) => {
  const dispatch = useAppDispatch();
  const accountById = useSelector(accountsSelectors.selectAccountById);
  const { filter, list, totalCount } = useSelector(walletsSelectors.selectInflow);
  const walletId = accountById?.wallets?.length && accountById.wallets[0]?.id;
  const [open, setOpen] = useState(false);
  const [delID, setID] = useState<number | null>(null);

  const handleChangePage = (_event: unknown, newPage: number) => {
    dispatch(inflowFilterUpdate({ skip: Number(newPage) * filter.take }));
  };
  const orderSort = (elem: any): 'DESC' | 'ASC' => (elem.order === 'DESC' ? 'ASC' : 'DESC');
  const toggleAlertOpen = useCallback(() => setOpen(!open), [open]);

  const handleRequestSort = (_event: MouseEvent<unknown>, sort: any): void => {
    let newOrder = 'DESC';
    if (sort === filter.sort) {
      newOrder = orderSort(filter);
    } else {
      newOrder = 'DESC';
    }
    dispatch(inflowFilterUpdate({ sort, order: newOrder as 'DESC' | 'ASC' }));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (totalCount) {
      dispatch(inflowFilterUpdate({ take: parseInt(event.target.value), skip: 0 }));
    }
  };

  const handleCloseAlert = () => {
    setOpen(false);
  };

  const handleDelete = useCallback(
    async (id: number) => {
      await dispatch(walletsActions.deleteManualInflow({ walletId, id })).unwrap();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch],
  );

  useEffect(() => {
    if (walletId) {
      dispatch(walletsActions.getWalletInflow({ ...filter, walletId }));
    }
  }, [walletId, filter, dispatch, filter.filter]);

  return (
    <>
      <div className={styles.wrapper}>
        {filterVisible && <InflowsFilters id={walletId} />}
        <ScrollWrapper>
          <Table className={styles.inner}>
            <TableHead className={styles.container__header}>
              <TableRow className={styles.container__header__row}>
                {inflowOutflowTable.map(({ id, label, withBaseCurrency, value }) => (
                  <TableCell align='left' className={styles.container__header__ceil} key={id}>
                    <div
                      role='button'
                      onClick={(e) => handleRequestSort(e, value)}
                      className={styles.container__header__ceil__sort}
                    >
                      <span style={{ position: 'relative' }}>
                        {!withBaseCurrency
                          ? label
                          : wrapWithBaseCurrency(label, accountById?.baseCurrency?.name)}
                        {value === filter.sort && (
                          <span title='Sort' className={styles.container__header__ceil__sort__up}>
                            <VectorIcon
                              className={classNames({
                                [styles.container__header__ceil__sort__up_icon]:
                                  filter.order === 'ASC',
                              })}
                            />
                          </span>
                        )}
                      </span>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {!!totalCount && (
              <TableBody>
                {list?.map((row) => (
                  <InflowsTableRow
                    row={row}
                    key={row.id}
                    toggleAlertOpen={toggleAlertOpen}
                    setID={setID}
                    handleAddInflow={handleAddInflow}
                  />
                ))}
              </TableBody>
            )}
          </Table>
          {!totalCount && <EmptyData />}
        </ScrollWrapper>
      </div>

      <Pagination
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        currentPage={filter.skip / filter.take || 0}
        rowsPerPage={filter?.take}
        totalCount={totalCount}
      />
      <tbody className={styles.table__body}>
        <Alert
          id={delID}
          open={open}
          handleAction={handleDelete}
          type='DELETE_INFLOW'
          text='Delete'
          handleClose={() => handleCloseAlert && handleCloseAlert()}
        />
      </tbody>
    </>
  );
};
export default InflowsTable;
