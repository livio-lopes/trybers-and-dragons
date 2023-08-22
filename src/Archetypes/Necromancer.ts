import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _counterArchetype = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._counterArchetype += 1;
  }

  static createdArchetypeInstances(): number {
    return this._counterArchetype;
  }

  get energyType(): string {
    return this._energyType;
  }
}

export default Necromancer;