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
client.getShipment(CSLetter, { fragile: true });
console.log('\n[Pacific Parcel]:')
client.getShipment(PPLetter, { doNotLeave: true });
console.log('\n[Default Shipper]:')
client.getShipment(DSLetter, { receiptRequested: true });
console.log('\n-----------Package-----------')
console.log('[Air East]:')
client.getShipment(AEPackage, { fragile: true, doNotLeave: true  });
console.log('\n[Chicago Sprint]:')
client.getShipment(CSPackage, { fragile: true, receiptRequested: true });
console.log('\n[Pacific Parcel]:')
client.getShipment(PPPackage, { doNotLeave: true, receiptRequested: true });
console.log('\n[Default Shipper]:')
client.getShipment(DSPackage, { fragile: true, doNotLeave: true, receiptRequested: true });
console.log('\n-----------Oversized-----------')
console.log('[Air East]:')
client.getShipment(AEOversized, { fragile: true });
console.log('\n[Chicago Sprint]:')
client.getShipment(CSOversized, { fragile: true, doNotLeave: true });
console.log('\n[Pacific Parcel]:')
client.getShipment(PPOversized, { doNotLeave: true, receiptRequested: true });
console.log('\n[Default Shipper]:')
client.getShipment(DSOversized, { fragile: true, doNotLeave: true, receiptRequested: true });
