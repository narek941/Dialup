import { client } from 'api';

export const addNewAccountRequest = (credentials: any) =>
  client.post('/admin/accounts', credentials);

export const updateAccountRequest = (accountId: string, credentials: any) =>
  client.put(`/admin/accounts/${accountId}`, credentials);

// export const usersListRequest = (params: any) => client.get('/admin/users', { params }); ////real data

export const usersListRequest = (params: any) => client.get('users', { params }); ////fake data

export const blockUserRequest = (id: number) => client.put(`/admin/users/${id}/block`);

export const unblockUserRequest = (id: number) => client.put(`/admin/users/${id}/unblock`);

export const getExchangeListRequest = () => client.get('/admin/exchange');

export const updateUsernameRequest = (id: number, username: string) => {
  return client.put(`/admin/users/${id}/username`, {
    username,
  });
};

export const updateAllowedAccountsRequest = (id: number, allowedAccountIds: any[]) => {
  return client.put(`/admin/users/${id}/allowed-accounts`, {
    allowedAccountIds,
  });
};

export const updateUserEmailRequest = (id: number, email: string) => {
  return client.put(`/admin/users/${id}/email`, {
    email,
  });
};

export const updateUserPasswordRequest = (id: number, password: string) =>
  client.put(`/admin/users/${id}/password`, {
    password,
  });

export const updateUserRoleRequest = (id: number, role: string) =>
  client.put(`/admin/users/${id}/role`, {
    role,
  });

export const deleteUserRequest = (id: number) => client.delete(`/admin/users/${id}`);

export const deleteAccountRequest = (id: number) => client.delete(`/admin/accounts/${id}`);

export const blockAccountRequest = (id: number) => client.put(`/admin/accounts/${id}/block`);

export const unblockAccountRequest = (id: number | string) =>
  client.put(`/admin/accounts/${id}/unblock`);

export const getUserByIdRequest = (id: number) => client.get(`/admin/users/${id}`);

export const getCoinsRequest = () => client.get('/admin/exchange/1/supported-cryptocurrencies');

export const getTradingPairsRequest = (walletID: number) =>
  client.get(`/admin/exchange/${walletID}/allowed-trading-pairs`);

export const getSyncStatusRequest = () => client.get('/admin/accounts/is-accounts-sync');
