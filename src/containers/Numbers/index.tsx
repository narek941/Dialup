import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Table } from 'components';
import { alertsSelectors } from 'store/alertsSlice';
import { ActionType } from 'components/views/Table/TableToolbar/types';
import { testNumbersList } from 'constants/test';
import { Routes } from 'types/routes';
import { filterFormFields } from './fields';
import numbersTable from 'constants/tables/numbers';

const Numbers = () => {
  const { list, totalCount, filter } = useSelector(alertsSelectors.selectAlerts);
  const [isLoading] = useState(false);

  const { take, order, sort } = filter;

  /* eslint-disable no-console */
  const handleDelete = (id: number) => console.log(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Table
      take={take}
      rows={testNumbersList || list}
      sort={sort}
      order={order}
      type='primary'
      action={ActionType.NUMBERS}
      totalCount={testNumbersList.length || totalCount}
      headCells={numbersTable}
      linkTo={Routes.AddNewNumber}
      page={0}
      handleSort={() => {}}
      tableName='number'
      showEditAction
      handleDelete={handleDelete}
      filterField={filterFormFields}
      handleChangePage={() => {}}
      handleChangeRowsPerPage={() => {}}
      dataCells={['id', 'number']}
    />
  );
};

export default Numbers;
