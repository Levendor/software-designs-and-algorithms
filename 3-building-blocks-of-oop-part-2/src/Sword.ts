import { Weapon } from "./Weapon";

export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }
    
    polish () {
        const damageThreshold = this.baseDamage * 1.25;
        if ((this.getEffectiveDamage() + Weapon.MODIFIER_CHANGE_RATE) <= damageThreshold) {
            this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
        } else {
            this.damageModifier = damageThreshold - this.baseDamage;
        }
    }
}