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
