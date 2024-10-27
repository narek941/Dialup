import { AccountAnalyticsChartColor } from 'constants/charts';

import { useEffect, useState } from 'react';
import moment from 'moment';
import { useWindowSize } from 'hooks';
import { useAppSelector } from 'hooks';
import { accountsSelectors } from 'store/accountsSlice';
import { Bricks, Chart, Doughnut, Loader } from 'components';
import { BrowserStorageKeys, BrowserStorageService } from 'services';

import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  const windowSize = useWindowSize();

  const [isLoading] = useState(false);

  const accountById = useAppSelector(accountsSelectors.selectAccountById);
  const accountAssetsChartData = useAppSelector(accountsSelectors.selectAccountAssetChartData);

  const accountCapitalChartData = useAppSelector(accountsSelectors.selectAccountCapitalChartData);
  const canvasWidth = (windowSize.width - 240) / 2 < 580 ? 580 : (windowSize.width - 240) / 2;

  useEffect(() => {
    const scrollPosition = BrowserStorageService.get(BrowserStorageKeys.Scroll, {
      session: true,
    });
    window.scrollTo(0, Number(scrollPosition));
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className={styles.analytics}>
        <div className={styles.analytics__bricks__wrapper}>
          <Bricks header='Customers' value={19} />
          <Bricks header='Admins' value={2} />
          <Bricks
            value={5}
            header='Trunks'
            moreText={moment(accountById.statistics?.refreshDate).format('DD.MM.YYYY HH:mm:ss')}
          />
          <Bricks value={18} header={'Extensions'} />
          <Bricks value={8} header={'Numbers'} />
          <Bricks header='Route plans' value={5} />
          <Bricks header='Recordings' value={10} />
          <Bricks header='Meetings' value={4} />
          <Bricks header='Calls' value={455} />
        </div>
        <div className={styles.analytics__inner}>
          <div className={styles.analytics__chart}>
            <div className={styles.analytics__chart__item}>
              <Chart
                data={accountCapitalChartData}
                title='Account Capital Chart'
                subTitle={accountById?.baseCurrency?.name}
                timeField='snapshotDate'
                field='currentCapitalInBaseCurrency'
                width={canvasWidth}
                type='AREA'
                baseCurrency={accountById?.baseCurrency?.name}
              />
            </div>
            <div className={styles.analytics__chart__inner}>
              <div className={styles.analytics__chart__item}>
                <Doughnut
                  data={accountAssetsChartData}
                  field={'assetCoin'}
                  value={'relativePercentage'}
                  width={canvasWidth}
                  header={'Chart'}
                  colors={AccountAnalyticsChartColor}
                  baseCurrency={accountById?.baseCurrency?.name}
                  navigateTo={''}
                  tooltipFields={['baseCurrencyValue', 'baseCurrencyName', 'value', 'assetCoin']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
