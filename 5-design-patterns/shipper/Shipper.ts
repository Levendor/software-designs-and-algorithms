export abstract class Shipper {
  constructor(public title: string, public hq: string) {}

  abstract getLetterCost(weight: number): number;
  abstract getPackageCost(weight: number): number;
  abstract getOversizedCost(weight: number): number;
}
