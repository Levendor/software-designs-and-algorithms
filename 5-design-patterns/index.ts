import { Client } from "./Client"

const shipmentDTO1 = {
//   id: 12345,
  weight: 15.4,
  fromAddress: 'some origin address',
  fromZipCode: '67890',
  toAddress: 'some destination address',
  toZipCode: '74953',
}

const shipmentDTO2 = {
//   id: 12345,
  weight: 15.4,
  fromAddress: 'some origin address',
  fromZipCode: '67890',
  toAddress: 'some destination address',
  toZipCode: '74953',
}

const shipmentDTO3 = {
//   id: 12345,
  weight: 15.4,
  fromAddress: 'some origin address',
  fromZipCode: '67890',
  toAddress: 'some destination address',
  toZipCode: '74953',
}

const client = new Client();

client.getShipment(shipmentDTO1);
client.getShipment(shipmentDTO2);
client.getShipment(shipmentDTO3);