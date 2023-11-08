export interface IShipment {
  id: number;
  weight: number;
  fromAddress: string;
  fromZipCode: string;
  toAddress: string;
  toZipCode: string;
}

export enum ShipmentType {
  LETTER = 'letter',
  PACKAGE = 'package',
  OVERSIZED = 'oversized',
}
