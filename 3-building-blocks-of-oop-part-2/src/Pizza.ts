import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private numberOfEatenSlices: number = 0;

  constructor(public value: number, public weight: number, public isSpoiled: boolean, readonly numberOfSlices: number) {
    super("pizza", value, weight, isSpoiled);
  }

  use(): string {
    if (this.isConsumed || this.numberOfEatenSlices === this.numberOfSlices) {
      if (!this.isConsumed) this.isConsumed = true;
      return `There's nothing left of the ${this.name} to consume.`;
    }
    this.numberOfEatenSlices += 1;
    return this.isSpoiled
      ? `You consumed a slice of the ${this.name}.\nYou feel sick.`
      : `You consumed a slice of the ${this.name}.`;
  }

  getNumberOfEatenSlices() {
    return this.numberOfEatenSlices;
  }
}
