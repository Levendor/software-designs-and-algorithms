import { Shipper } from './Shipper';
import { IIdGenerator } from './persistence/id-generator.model';
// import { idGenerator } from './persistence/id-generator.ts'
import { IShipment } from './shipment.model';

export class Shipment {
  static id: number = 0;

  private constructor(
    private shipment: IShipment,
    private shipper: Shipper,
    private idGenerator: IIdGenerator = Shipment
  ) {
    if (!shipment.id) {
      shipment.id = idGenerator.getShipmentId();
    }
  }

  static getInstance(shipment: IShipment) {
    const shipper = Shipper.getInstance(shipment.fromZipCode);
    return new Shipment(shipment, shipper/*, idGenerator*/);
  }

  static getShipmentId(): number {
    return ++Shipment.id;
  }

  ship() {
    const cost = this.shipper.getCost(this.shipment.weight);
    return `Shipment with the ID ${this.shipment.id} will be picked up from ${this.shipment.fromZipCode} ${this.shipment.fromAddress} and shipped to ${this.shipment.toZipCode} ${this.shipment.toAddress}
Cost = $${cost.toFixed(2)}`;
  }
}
