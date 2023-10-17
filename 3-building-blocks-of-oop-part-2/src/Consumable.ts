import { Item } from "./Item";

export abstract class Consumable extends Item {
  isConsumed: boolean = false;

  constructor(readonly name: string, public value: number, public weight: number, public isSpoiled: boolean = false) {
    super(name, value, weight);
  }

  use(): string {
    if (this.isConsumed) {
      return `There's nothing left of the ${this.name} to consume.`;
    }
    return this.isSpoiled ? `You consumed the ${this.name}.\nYou feel sick.` : `You consumed the ${this.name}.`;
  }
}
