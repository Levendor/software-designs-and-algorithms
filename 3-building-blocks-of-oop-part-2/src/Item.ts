import { Comparable } from "./Comparable";

export abstract class Item implements Comparable<Item> {
  static idCounter: number;
  static resetIdCounter() {
    Item.idCounter = 0;
  }

  private readonly id: number;

  constructor(readonly name: string, public value: number, public weight: number) {
    this.id = ++Item.idCounter;
  }

  use(): void {}

  compareTo(other: Item): number {
    const sortItemsByName = (item1: Item, item2: Item) => {
      if (item1.name < item2.name) {
        return -1;
      }
      if (item1.name > item2.name) {
        return 1;
      }
      return 0;
    };

    return Math.sign(this.value - other.value) || sortItemsByName(this, other);
  }

  toString(): string {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
  }

  getId(): number {
    return this.id;
  }
}
