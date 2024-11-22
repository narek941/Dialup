import { trunksTable } from 'constants/index';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Table } from 'components';
import { alertsSelectors } from 'store/alertsSlice';
import { ActionType } from 'components/views/Table/TableToolbar/types';
import { testTrunksList } from 'constants/test';
import { Routes } from 'types/routes';
import { filterFormFields } from './fields';

const Trunks = () => {
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
      rows={testTrunksList || list}
      sort={sort}
      order={order}
      type='primary'
      action={ActionType.TRUNKS}
      totalCount={testTrunksList.length || totalCount}
      headCells={trunksTable}
      linkTo={Routes.AddNewTrunk}
      page={0}
      handleSort={() => {}}
      tableName='trunks'
      showEditAction
      handleDelete={handleDelete}
      filterField={filterFormFields}
      handleChangePage={() => {}}
      handleChangeRowsPerPage={() => {}}
      dataCells={['identifier', 'name', 'id', 'domain']}
    />
  );
};

export default Trunks;
