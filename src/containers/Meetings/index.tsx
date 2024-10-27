import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Table } from 'components';
import { alertsSelectors } from 'store/alertsSlice';
import { ActionType } from 'components/views/Table/TableToolbar/types';
import { Routes } from 'types/routes';
import { filterFormFields } from './fields';
import { testMeetingList } from 'constants/test';
import meetingTable from 'constants/tables/meeting';

const Meeting = () => {
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
      rows={testMeetingList || list}
      sort={sort}
      order={order}
      type='primary'
      action={ActionType.MEETINGS}
      totalCount={testMeetingList.length || totalCount}
      headCells={meetingTable}
      linkTo={Routes.AddNewNumber}
      page={0}
      handleSort={() => {}}
      tableName='number'
      showEditAction
      handleDelete={handleDelete}
      filterField={filterFormFields}
      handleChangePage={() => {}}
      handleChangeRowsPerPage={() => {}}
      dataCells={['id', 'name', 'uuid', 'description', 'pin', 'participants']}
    />
  );
};

export default Meeting;
