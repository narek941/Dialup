import { SyntheticEvent, useState } from 'react';

import { Alert } from 'components';

import styles from '../Table.module.scss';

import { IToggleAction } from './types';

const ToggleAction = ({ id, Icon, handleSubmit, type, action, tooltipClasses }: IToggleAction) => {
  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (e: SyntheticEvent) => {
    e.stopPropagation();
    setOpenAlert(!openAlert);
  };

  return (
    <>
      <div className={styles.table__body__row__ceil__actions__block} onClick={handleCloseAlert}>
        <Icon />
        <span className={tooltipClasses}>{action}</span>
      </div>
      <Alert
        id={id}
        type={type}
        open={openAlert}
        handleAction={handleSubmit}
        handleClose={handleCloseAlert}
      />
    </>
  );
};

export default ToggleAction;
