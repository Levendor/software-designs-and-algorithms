import { IIdGenerator } from '../persistence/id-generator.model';
import { Shipper } from '../shipper/Shipper';
import { Shipment } from './Shipment';
import { IShipment, ShipmentType } from './shipment.model';

export class Letter extends Shipment {
  type: ShipmentType;

  private constructor(shipment: IShipment, idGenerator?: IIdGenerator) {
    super(shipment, idGenerator);
    this.type = ShipmentType.LETTER;
  }

  static getInstance(
    shipment: IShipment,
    idGenerator?: IIdGenerator
  ) {
    return new Letter(shipment, idGenerator);
  }
  
  ship(shipper: Shipper) {
    const cost = shipper.getLetterCost(this.weight);
    return `Shipment with the ID ${this.id} will be picked up from ${this.fromZipCode} ${this.fromAddress} and shipped to ${this.toZipCode} ${this.toAddress}
Cost = $${cost.toFixed(2)}`;
  }
}
