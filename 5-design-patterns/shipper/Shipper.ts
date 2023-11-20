import { ShipmentType } from "../shipment/shipment.model";

export abstract class Shipper {
  constructor(public title: string, public hq: string) {}
  
  abstract getCost(type: ShipmentType, weight: number): number;
}
