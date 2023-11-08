import { IIdGenerator } from '../persistence/id-generator.model';
import { Shipper } from '../shipper/Shipper';
import { Shipment } from './Shipment';
import { IShipment, IShipmentDTO, ShipmentType } from './shipment.model';

export class Package extends Shipment implements IShipment {
  type: ShipmentType;

  private constructor(shipment: IShipmentDTO, idGenerator?: IIdGenerator) {
    super(shipment, idGenerator);
    this.type = ShipmentType.PACKAGE;
  }

  static getInstance(
    shipment: IShipmentDTO,
    idGenerator?: IIdGenerator
  ) {
    return new Package(shipment, idGenerator);
  }

  ship(shipper: Shipper) {
    const cost = shipper.getPackageCost(this.weight);
    return `Shipment with the ID ${this.id} will be picked up from ${this.fromZipCode} ${this.fromAddress} and shipped to ${this.toZipCode} ${this.toAddress}
Cost = $${cost.toFixed(2)}`;
  }
}
