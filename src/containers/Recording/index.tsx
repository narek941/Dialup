import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Table } from 'components';
import { alertsSelectors } from 'store/alertsSlice';
import { testRecordingList } from 'constants/test';
import { filterFormFields } from './fields';
import recordingTable from 'constants/tables/recording';
import { ActionType } from 'components/views/Table/TableToolbar/types';
import { Routes } from 'types';

const Recording = () => {
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
      rows={testRecordingList || list}
      sort={sort}
      order={order}
      type='primary'
      totalCount={testRecordingList.length || totalCount}
      headCells={recordingTable}
      page={0}
      linkTo={Routes.AddNewRecording}
      action={ActionType.RECORDING}
      handleSort={() => {}}
      tableName='recording'
      showEditAction
      handleDelete={handleDelete}
      filterField={filterFormFields}
      handleChangePage={() => {}}
      handleChangeRowsPerPage={() => {}}
      dataCells={['id', 'name', 'path', 'source', 'listen']}
    />
  );
};

export default Recording;
