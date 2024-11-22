import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Table } from 'components';
import { alertsSelectors } from 'store/alertsSlice';
import { ActionType } from 'components/views/Table/TableToolbar/types';
import { testRoutingList } from 'constants/test';
import { Routes } from 'types/routes';
import { filterFormFields } from './fields';
import routesTable from 'constants/tables/routings';

const Routing = () => {
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
      rows={testRoutingList || list}
      sort={sort}
      order={order}
      type='primary'
      action={ActionType.ROUTINGS}
      totalCount={testRoutingList.length || totalCount}
      headCells={routesTable}
      linkTo={Routes.AddNewRoute}
      page={0}
      handleSort={() => {}}
      tableName='route'
      showEditAction
      handleDelete={handleDelete}
      filterField={filterFormFields}
      handleChangePage={() => {}}
      handleChangeRowsPerPage={() => {}}
      dataCells={['id', 'name', 'description']}
    />
  );
};

export default Routing;
