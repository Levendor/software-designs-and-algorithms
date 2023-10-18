import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[] = [];

  addItem(item: Item) {
    this.items.push(item);
  }

  sort(): void;
  sort(comparator: ItemComparator): void;
  sort(comparator?: ItemComparator) {
    const sortFunction = comparator
      ? comparator.compare
      : (item1: Item, item2: Item) => Math.sign(item1.value - item2.value);
    this.items.sort(sortFunction);
  }

  toString() {
    return this.items.join(", ");
  }
}
