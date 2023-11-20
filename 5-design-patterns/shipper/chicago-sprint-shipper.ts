import { ShipmentType } from '../shipment/shipment.model';
import { Shipper } from './Shipper';

export class ChicagoSprintShipper extends Shipper {
  letterPerOunceRate: number;
  packagePerOunceRate: number;
  oversizedAddition: number;

  private constructor() {
    super('Chicago Sprint', 'Chicago');
    this.letterPerOunceRate = 0.42;
    this.packagePerOunceRate = 0.20;
    this.oversizedAddition = 0;
  }

  static getInstance() {
    return new ChicagoSprintShipper();
  }
  
  getCost(type: ShipmentType, weight: number): number {
    switch(type) {
      case ShipmentType.LETTER:
        return this.letterPerOunceRate * weight;
      case ShipmentType.PACKAGE:
        return this.packagePerOunceRate * weight;
      case ShipmentType.OVERSIZED:
        return (this.packagePerOunceRate + this.oversizedAddition) * weight;
      default:
        throw Error('Unknown shipment type!');
    }
  }
}
