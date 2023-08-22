import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _counterArchetype = 0;
  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._counterArchetype += 1;
  }

  static createdArchetypeInstances(): number {
    return this._counterArchetype;
  }

  get energyType(): EnergyType { return this._energyType; }
}

export default Ranger;