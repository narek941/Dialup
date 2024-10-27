import { AnalyticsTabs } from 'components';

import styles from './Sms.module.scss';

const SMS = (): JSX.Element => {
  return (
    <>
      <div className={styles.analytics}>
        <AnalyticsTabs />
      </div>
    </>
  );
};

export default SMS;
