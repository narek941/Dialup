import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { isNull } from 'lodash';

import { CloseIcon } from 'assets/icons';
import { TableSearch } from 'components';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';
import { createObject, filterObject } from 'utils';
import { userFilterClear, usersFilterUpdate } from 'store/adminSlice/thunks';
import { adminSelectors } from 'store/adminSlice';

import styles from './TrunksFilters.module.scss';
import { FilterFormShape } from './types';
import { filterFormFields, filterSchemaKeys } from './fields';

const TrunksFilters = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { filter } = useAppSelector(adminSelectors.selectUsersFilter);

  const [isMore, setIsMore] = useState(false);
  const [clearAll, setClearAll] = useState(false);
  const { formMethods } = useForm<keyof FilterFormShape, FilterFormShape>({
    mode: 'onChange',
    schemaKeys: filterSchemaKeys,
    defaultValues: {
      hosts: '',
      domain: '',
      identifier: '',
      id: '',
    },
  });

  const advancedClass = classNames(styles.item, {
    [styles.advanced__hide]: !isMore,
  });

  const handleToggle = () => setIsMore(!isMore);

  const handleClear = () => {
    formMethods.reset({});
    dispatch(userFilterClear({}));
    setClearAll(!clearAll);
  };

  const handleFilter = (key: string, value: any) => {
    if (isNull(value)) {
      const obj = filterObject(filter, key);
      dispatch(userFilterClear(obj));
    } else {
      if (key === 'username' || key === 'email') {
        dispatch(usersFilterUpdate({ search: createObject(key, value) }));
      } else {
        dispatch(usersFilterUpdate({ filter: createObject(key, value) }));
      }
    }
  };

  useEffect(() => {
    return () => {
      handleClear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={advancedClass}>
          <TableSearch
            {...filterFormFields.id}
            {...formMethods.register('id')}
            className={styles.search}
            callback={handleFilter}
            filterName={'id'}
            clearAll={clearAll}
            closed={!isMore}
          />
        </div>
        <div className={styles.item}>
          <TableSearch
            {...filterFormFields.identifier}
            {...formMethods.register('identifier')}
            className={styles.search}
            callback={handleFilter}
            filterName={'identifier'}
            clearAll={clearAll}
          />
        </div>
        <div className={(styles.item, styles.multipleSelect)}>
          <TableSearch
            {...filterFormFields.domain}
            {...formMethods.register('domain')}
            className={styles.search}
            callback={handleFilter}
            filterName={'domain'}
            clearAll={clearAll}
          />
        </div>

        <div className={advancedClass}>
          <TableSearch
            {...filterFormFields.hosts}
            {...formMethods.register('hosts')}
            className={styles.search}
            callback={handleFilter}
            filterName={'hosts'}
            clearAll={clearAll}
            closed={!isMore}
          />
        </div>
        <div className={styles.clear} role='button' onClick={handleClear}>
          <span>{t('clear_all')}</span>
          <div>
            <CloseIcon />
          </div>
        </div>
      </div>
      <div role='button' onClick={handleToggle} className={styles.toggle}>
        {isMore ? t('hide_filter_text') : t('show_filter_text')}
      </div>
    </div>
  );
};

export default TrunksFilters;
