import { IIdGenerator } from "./persistence/id-generator.model";
// import { idGenerator } from "./persistence/id-generator.ts"
import { IShipment } from "./shipment.model";

export class Shipment {
  static id: number = 0;

  private constructor(
    private shipment: IShipment,
    private idGenerator: IIdGenerator = Shipment
  ) {
    if (!shipment.id) {
      shipment.id = idGenerator.getShipmentId();
    }
  }

  static getInstance(shipment: IShipment) {
    return new Shipment(shipment/*, idGenerator*/);
  }

  static getShipmentId(): number {
    return ++Shipment.id;
  }

  ship() {
    return `Shipment with the ID ${this.shipment.id} will be picked up from ${this.shipment.fromZipCode} ${this.shipment.fromAddress} and shipped to ${this.shipment.toZipCode} ${this.shipment.toAddress}
Cost = $${(this.shipment.weight * 0.39).toFixed(2)}`;
  }
}
