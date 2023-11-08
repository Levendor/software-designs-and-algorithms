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

  getLetterCost(weight: number) {
    return this.letterPerOunceRate * weight;
  }
  getPackageCost(weight: number) {
    return this.packagePerOunceRate * weight;
  }
  getOversizedCost(weight: number) {
    return (this.packagePerOunceRate + this.oversizedAddition) * weight;
  }
}
