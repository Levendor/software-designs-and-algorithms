import { Client } from './Client';

const AELetter = {
  id: 0,
  weight: 10,
  fromAddress: 'some origin address',
  fromZipCode: '17890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};
const AEPackage = {
  id: 0,
  weight: 100,
  fromAddress: 'some origin address',
  fromZipCode: '17890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};
const AEOversized = {
  id: 0,
  weight: 1000,
  fromAddress: 'some origin address',
  fromZipCode: '17890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};

const CSLetter = {
  id: 0,
  weight: 10,
  fromAddress: 'some origin address',
  fromZipCode: '67890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};
const CSPackage = {
  id: 0,
  weight: 100,
  fromAddress: 'some origin address',
  fromZipCode: '67890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};
const CSOversized = {
  id: 0,
  weight: 1000,
  fromAddress: 'some origin address',
  fromZipCode: '67890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};

const PPLetter = {
  id: 0,
  weight: 10,
  fromAddress: 'some origin address',
  fromZipCode: '87890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};

const PPPackage = {
  id: 0,
  weight: 100,
  fromAddress: 'some origin address',
  fromZipCode: '87890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};

const PPOversized = {
  id: 0,
  weight: 1000,
  fromAddress: 'some origin address',
  fromZipCode: '87890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};

const DSLetter = {
  id: 0,
  weight: 10,
  fromAddress: 'some origin address',
  fromZipCode: '07890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};
const DSPackage = {
  id: 0,
  weight: 100,
  fromAddress: 'some origin address',
  fromZipCode: '07890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};
const DSOversized = {
  id: 0,
  weight: 1000,
  fromAddress: 'some origin address',
  fromZipCode: '07890',
  toAddress: 'some destination address',
  toZipCode: '74953',
};

const client = new Client();

console.log('-----------Letter-----------')
console.log('[Air East]:')
client.getShipment(AELetter);
console.log('\n[Chicago Sprint]:')
client.getShipment(CSLetter);
console.log('\n[Pacific Parcel]:')
client.getShipment(PPLetter);
console.log('\n[Default Shipper]:')
client.getShipment(DSLetter);
console.log('\n-----------Package-----------')
console.log('[Air East]:')
client.getShipment(AEPackage);
console.log('\n[Chicago Sprint]:')
client.getShipment(CSPackage);
console.log('\n[Pacific Parcel]:')
client.getShipment(PPPackage);
console.log('\n[Default Shipper]:')
client.getShipment(DSPackage);
console.log('\n-----------Oversized-----------')
console.log('[Air East]:')
client.getShipment(AEOversized);
console.log('\n[Chicago Sprint]:')
client.getShipment(CSOversized);
console.log('\n[Pacific Parcel]:')
client.getShipment(PPOversized);
console.log('\n[Default Shipper]:')
client.getShipment(DSOversized);
