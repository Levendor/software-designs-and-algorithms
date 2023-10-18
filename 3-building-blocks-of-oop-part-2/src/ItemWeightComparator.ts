import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
    compare(first: Item, second: Item): number {
        return Math.sign(first.weight - second.weight) || first.compareTo(second);
    }
}