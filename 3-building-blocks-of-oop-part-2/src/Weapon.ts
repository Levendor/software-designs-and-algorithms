import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;

  protected damageModifier: number = 0;
  protected durabilityModifier: number = 0;
  isBroken: boolean;

  constructor(
    name: string,
    protected baseDamage: number,
    private baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
  }

  use(): string {
    if (this.isBroken) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    let answer = `You use the ${this.name}, dealing ${(
      this.getEffectiveDamage() * this.getEffectiveDurability()
    ).toFixed(2)} points of damage.`;
    this.baseDurability -= Weapon.MODIFIER_CHANGE_RATE;
    if (this.baseDurability <= 0) {
        this.isBroken = true;
      answer += `\nThe ${this.name} breaks.`;
    }
    return answer;
  }

  polish(): void {}

  toString(): string {
    return (
      `${this.name} − Value: ${this.value.toFixed(2)}, ` +
      `Weight: ${this.weight.toFixed(2)}, ` +
      `Damage: ${this.getEffectiveDamage().toFixed(2)}, ` +
      `Durability: ${(this.getEffectiveDurability() * 100).toFixed(2)}%`
    );
  }

  getEffectiveDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getEffectiveDurability(): number;
  getEffectiveDurability(durabilityModifier: number): number;
  getEffectiveDurability(durabilityModifier?: number) {
    return this.baseDurability + (durabilityModifier || this.durabilityModifier);
  }
}
