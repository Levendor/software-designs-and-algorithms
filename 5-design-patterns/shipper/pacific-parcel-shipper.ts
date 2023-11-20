import { ShipmentType } from '../shipment/shipment.model';
import { Shipper } from './Shipper';

export class PacificParcelShipper extends Shipper {
  letterPerOunceRate: number;
  packagePerOunceRate: number;
  oversizedAddition: number;

  constructor() {
    super('Pacific Parcel', 'San Diego');
    this.letterPerOunceRate = 0.51;
    this.packagePerOunceRate = 0.19;
    this.oversizedAddition = 0.02;
  }

  static getInstance() {
    return new PacificParcelShipper();
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
