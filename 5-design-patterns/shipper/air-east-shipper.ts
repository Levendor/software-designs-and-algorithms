import { ShipmentType } from '../shipment/shipment.model';
import { Shipper } from './Shipper';

export class AirEastShipper extends Shipper {
  letterPerOunceRate: number;
  packagePerOunceRate: number;
  oversizedAddition: number;

  constructor() {
    super('Air East', 'Atlanta');
    this.letterPerOunceRate = 0.39;
    this.packagePerOunceRate = 0.25;
    this.oversizedAddition = 10;
  }

  static getInstance() {
    return new AirEastShipper();
  }
  
  getCost(type: ShipmentType, weight: number): number {
    switch(type) {
      case ShipmentType.LETTER:
        return this.letterPerOunceRate * weight;
      case ShipmentType.PACKAGE:
        return this.packagePerOunceRate * weight;
      case ShipmentType.OVERSIZED:
        return (this.packagePerOunceRate * weight) + this.oversizedAddition;
      default:
        throw Error('Unknown shipment type!');
    }
  }
}
