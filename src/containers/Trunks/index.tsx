import { trunksTable } from 'constants/index';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Table } from 'components';
import { useAppDispatch } from 'hooks';
import { alertsActions, alertsSelectors } from 'store/alertsSlice';
import { ActionType } from 'components/views/Table/TableToolbar/types';
import { testTrunksList } from 'constants/test';
import { Routes } from 'types/routes';

const Trunks = () => {
  const dispatch = useAppDispatch();
  const { list, totalCount, filter } = useSelector(alertsSelectors.selectAlerts);
  const [isLoading, setIsLoading] = useState(true);

  const { take, order, sort } = filter;

  useEffect(() => {
    const getAlerts = async () => {
      try {
        await dispatch(alertsActions.getAlertList(filter)).unwrap();
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };
    getAlerts();
  }, [dispatch, filter, filter.filter]);

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
      linkText='trunks'
    />
  );
};

export default Trunks;
