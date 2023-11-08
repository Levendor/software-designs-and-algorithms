import { Shipper } from "../shipper/Shipper";

export interface IShipmentDTO {
  id?: number;
  weight: number;
  fromAddress: string;
  fromZipCode: string;
  toAddress: string;
  toZipCode: string;
}

export interface IShipment {
  ship(shipper: Shipper): string;
}

export enum ShipmentType {
  LETTER = 'letter',
  PACKAGE = 'package',
  OVERSIZED = 'oversized',
}
