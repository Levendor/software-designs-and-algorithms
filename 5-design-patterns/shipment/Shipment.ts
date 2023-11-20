import { Shipper } from '../shipper/Shipper';
import { IIdGenerator } from '../persistence/id-generator.model';
import { IShipment, IShipmentDTO } from './shipment.model';

export abstract class Shipment implements IShipment {
  static id: number = 0;

  id: number;
  weight: number;
  fromAddress: string;
  fromZipCode: string;
  toAddress: string;
  toZipCode: string;

  constructor(shipment: IShipmentDTO, idGenerator: IIdGenerator = Shipment) {
    if (!shipment.id) {
      this.id = idGenerator.getShipmentId();
    } else {
      this.id = shipment.id;
    }
    this.weight = shipment.weight;
    this.fromAddress = shipment.fromAddress;
    this.fromZipCode = shipment.fromZipCode;
    this.toAddress = shipment.toAddress;
    this.toZipCode = shipment.toZipCode;
  }

  static getShipmentId(): number {
    return ++Shipment.id;
  }

  abstract ship(shipper: Shipper): string;
}
