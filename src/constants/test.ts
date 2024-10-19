import { RowsType } from 'components/views/Table/types';

export const testCustomersList = [
  {
    id: '2',
    name: 'ipeim',
    lastname: 'ipeim',
    email: 'ipeim@ipeim.com',
  },
  {
    id: '3',
    name: 'supcom',
    lastname: 'supcom',
    email: 'supcom@supcom.com',
  },
  {
    id: '4',
    name: 'lsasg',
    lastname: 'lsasg',
    email: 'lsasg@lsasg.com',
  },
  {
    id: '7',
    name: 'amosbah',
    lastname: 'amosbah',
    email: 'amosbah@amosbah.com',
  },
  {
    id: '8',
    name: 'sip',
    lastname: 'sip',
    email: 'sip@sip.com',
  },
  {
    id: '9',
    name: 'Eduard',
    lastname: 'Hakobyan',
    email: 'eduard@example.com	',
  },
] as unknown as RowsType[];

export const testTrunksList = [
  {
    id: '2',
    identifier: 'twilio-na-us	',
    hosts: 'eduard-asterisk.pstn.us1.twilio.com,eduard-asterisk.pstn.us2.twilio.com',
    domain: null,
  },
  {
    id: '6',
    identifier: '42636246GW1',
    hosts: 'gw1.siptrunk.com',
    domain: 'gw1.siptrunk.com',
  },
  {
    id: '8',
    identifier: 'twilio-diallup-trunk',
    hosts: 'diallup-voip.pstn.us1.twilio.com,diallup-voip.pstn.us2.twilio.com',
    domain: null,
  },
] as unknown as RowsType[];
