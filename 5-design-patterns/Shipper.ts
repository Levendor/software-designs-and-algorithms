import { IShipper } from './shipper.model';

enum ShippersTitle {
  AIR_EAST = 'Air East',
  CHICAGO_SPRINT = 'Chicago Spring',
  PACIFIC_PARCEL = 'Pacific Parcel',
}

const SHIPPERS: { [key: string]: IShipper } = {
  [ShippersTitle.AIR_EAST]: {
    title: ShippersTitle.AIR_EAST,
    hq: 'Atlanta',
    perOunceRate: 0.39,
    zipCodePrefix: ['1', '2', '3'],
  },
  [ShippersTitle.CHICAGO_SPRINT]: {
    title: ShippersTitle.CHICAGO_SPRINT,
    hq: 'Chicago',
    perOunceRate: 0.42,
    zipCodePrefix: ['4', '5', '6'],
  },
  [ShippersTitle.PACIFIC_PARCEL]: {
    title: ShippersTitle.PACIFIC_PARCEL,
    hq: 'San Diego',
    perOunceRate: 0.51,
    zipCodePrefix: ['7', '8', '9'],
  },
};

export class Shipper {
  title: string;
  hq: string;
  private perOunceRate: number;
  private zipCodePrefix: string[];

  private constructor(shipper: IShipper) {
    this.title = shipper.title;
    this.hq = shipper.hq;
    this.perOunceRate = shipper.perOunceRate;
    this.zipCodePrefix = shipper.zipCodePrefix;
  }

  static getInstance(zipCode: string) {
    const defaultShipper = SHIPPERS[ShippersTitle.AIR_EAST];

    const shipper = Object.values(SHIPPERS).find((company) => {
      const regPattern = new RegExp(
        '^(?:' + company.zipCodePrefix.join('|') + ')'
      );
      return regPattern.test(zipCode[0]);
    });

    return shipper ? new Shipper(shipper) : new Shipper(defaultShipper);
  }

  getCost(weight: number) {
    return weight * this.perOunceRate;
  }
}
