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

export const testExtentionsList = [
  {
    id: '2',
    username: 'ipeim',
    password: 'ipeim',
    callerId: 'ipeim@ipeim.com',
  },
  {
    id: '3',
    username: 'supcom',
    password: 'supcom',
    callerId: 'supcom@supcom.com',
  },
  {
    id: '4',
    username: 'lsasg',
    password: 'lsasg',
    callerId: 'lsasg@lsasg.com',
  },
  {
    id: '7',
    username: 'amosbah',
    password: 'amosbah',
    callerId: 'amosbah@amosbah.com',
  },
  {
    id: '8',
    username: 'sip',
    password: 'sip',
    callerId: 'sip@sip.com',
  },
  {
    id: '9',
    username: 'Eduard',
    password: 'Hakobyan',
    callerId: 'eduard@example.com	',
  },
] as unknown as RowsType[];

export const testNumbersList = [
  {
    id: '2',
    number: '17604592873',
  },
  {
    id: '6',
    number: '19898008085',
  },
  {
    id: '8',
    number: '19898008085',
  },
] as unknown as RowsType[];

export const testRoutingList = [
  {
    id: '2',
    name: '17604592873',
    description: '17604592873',
  },
  {
    id: '6',
    name: '19898008085',
    description: '19898008085',
  },
  {
    id: '8',
    name: '3000',
    description: '3000',
  },
] as unknown as RowsType[];

export const testRecordingList = [
  {
    id: '2',
    name: 'Asterisk',
    path: '/media/4750a309-3065-417d-9997-dd0c02a6a3af.wav',
    source: 'google-tts',
    listen: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
  },
  {
    id: '6',
    name: 'Asterisk',
    path: '/media/4750a309-3065-417d-9997-dd0c02a6a3af.wav',
    source: 'google-tts',
    listen: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
  },
  {
    id: '8',
    name: 'Asterisk',
    path: '/media/4750a309-3065-417d-9997-dd0c02a6a3af.wav',
    source: 'google-tts',
    listen: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
  },
] as unknown as RowsType[];

export const testCDRList = [
  {
    id: '2',
    date: 'Oct. 24, 2024, 4:14 p.m.',
    from: '6004',
    to: '2000',
    duration: '38',
    inChannel: '1729786499.137',
    outChannel: null,
    lastStep: 'HANGUP',
    recording: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    voiceMail: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
  },
  {
    id: '3',
    date: 'Oct. 24, 2024, 4:14 p.m.',
    from: '6004',
    to: '2000',
    duration: '38',
    inChannel: '1729786499.137',
    outChannel: null,
    lastStep: 'HANGUP',
    recording: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    voiceMail: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
  },
  {
    id: '8',
    date: 'Oct. 24, 2024, 4:14 p.m.',
    from: '6004',
    to: '2000',
    duration: '38',
    inChannel: '1729786499.137',
    outChannel: null,
    lastStep: 'HANGUP',
    recording: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    voiceMail: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
  },
] as unknown as RowsType[];

export const t1estRoutingList = [
  {
    id: '2',
    name: '17604592873',
    description: '17604592873',
  },
  {
    id: '6',
    name: '19898008085',
    description: '19898008085',
  },
  {
    id: '8',
    name: '3000',
    description: '3000',
  },
] as unknown as RowsType[];

export const testMeetingList = [
  {
    id: '2',
    name: '16-01-2024	',
    uuid: '125478-9658-32569-98745',
    description: '16-01-2024 test',
    pin: '1234567',
    participants: null,
  },
  {
    id: '2',
    name: '16-01-2024	',
    uuid: '125478-9658-32569-98745',
    description: '16-01-2024 test',
    pin: '1234567',
    participants: null,
  },
  {
    id: '2',
    name: '16-01-2024	',
    uuid: '125478-9658-32569-98745',
    description: '16-01-2024 test',
    pin: '1234567',
    participants: null,
  },
  {
    id: '2',
    name: '16-01-2024	',
    uuid: '125478-9658-32569-98745',
    description: '16-01-2024 test',
    pin: '1234567',
    participants: null,
  },
  {
    id: '2',
    name: '16-01-2024	',
    uuid: '125478-9658-32569-98745',
    description: '16-01-2024 test',
    pin: '1234567',
    participants: null,
  },
  {
    id: '2',
    name: '16-01-2024	',
    uuid: '125478-9658-32569-98745',
    description: '16-01-2024 test',
    pin: '1234567',
    participants: null,
  },
] as unknown as RowsType[];
