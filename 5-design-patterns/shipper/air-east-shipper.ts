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

  getLetterCost(weight: number) {
    return this.letterPerOunceRate * weight;
  }
  getPackageCost(weight: number) {
    return this.packagePerOunceRate * weight;
  }
  getOversizedCost(weight: number) {
    return (this.packagePerOunceRate * weight) + this.oversizedAddition;
  }
}
