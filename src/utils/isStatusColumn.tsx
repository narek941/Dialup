export const isStatusColumn = (status: string) => {
  if (['active', 'expired'].includes(status)) {
    if ('active' === status) {
      return <span style={{ color: 'green', padding: 2 }}>{status.toUpperCase()}</span>;
    }
    if ('expired' === status) {
      return <span style={{ color: 'red', padding: 2 }}>{status.toUpperCase()}</span>;
    }
  } else {
    return status;
  }
};
