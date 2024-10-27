import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { CloseIcon } from 'assets/icons';
import { MultipleSelect } from 'components';
import { useForm } from 'hooks';
import RangeSwipe from 'components/shared/Range';
import TableSearch from 'components/shared/TableSearch';

import styles from './Filters.module.scss';
import { FilterFormShape, FormField } from './types';

interface FiltersProps {
  filterField: FormField[];
}
export const Filters = ({ filterField }: FiltersProps) => {
  const filterSchemaKeys = Object.keys(filterField) as (keyof FilterFormShape)[];
  const { t } = useTranslation();

  const [isMore, setIsMore] = useState(false);
  const [clearAll, setClearAll] = useState(false);
  const [filterValue, setFilterValue] = useState<Record<string, any>>({});

  const { formMethods } = useForm<keyof FilterFormShape, FilterFormShape>({
    mode: 'onChange',
    schemaKeys: filterSchemaKeys,
  });

  const handleToggle = () => setIsMore(!isMore);

  const handleClear = () => {
    formMethods.reset();
    setClearAll(!clearAll);
  };

  const handleFilter = (key: string, value: any) => {
    setFilterValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderFields = (fields: FormField[]) => {
    return fields.map((field, index) => {
      switch (field.type) {
        case 'Search':
          return (
            <div
              key={field.id}
              className={classNames(styles.item, { [styles.advanced__hide]: !isMore && index > 2 })}
            >
              <TableSearch
                {...field}
                {...formMethods.register(field.name as any)}
                className={styles.search}
                callback={(value: any) => handleFilter(field.name, value)}
                filterName={field.name}
                clearAll={clearAll}
              />
            </div>
          );
        case 'select':
          return (
            <div key={field.name} className={styles.item}>
              <MultipleSelect
                formMethods={formMethods}
                {...field}
                className={styles.select}
                callback={(value) => handleFilter(field.name, value)}
                filterName={field.name}
                options={field.options || []}
              />
            </div>
          );
        case 'Range': {
          const min = filterValue[`min${field.name}` as any] || 0;
          const max = filterValue[`max${field.name}` as any] || 100;
          return (
            <div key={field.name} className={styles.item}>
              <Controller
                control={formMethods.control}
                name={field.name as any}
                render={({ field }) => (
                  <RangeSwipe
                    {...field}
                    min={min}
                    max={max}
                    callback={(value: any) => handleFilter(field.name, value)}
                    filterName={field.name}
                    closed={!isMore}
                  />
                )}
              />
            </div>
          );
        }
        default:
          return null;
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {renderFields(filterField)}
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
