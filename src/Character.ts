import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _dexterity: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _multiplierCharacter = 0.5;
  private _minStatus = 1;
  private _maxStatus = 10;
  constructor(name:string, race?: Race, archetype?: Archetype) {
    this._dexterity = getRandomInt(this._minStatus, this._maxStatus);
    this._race = race || new Elf(name, this._dexterity);
    this._archetype = archetype || new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints * this._multiplierCharacter;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(this._minStatus, this._maxStatus);
    this._defense = getRandomInt(this._minStatus, this._maxStatus);
    this._energy = { type_: this._archetype.energyType, 
      amount: getRandomInt(this._minStatus, this._maxStatus) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  private set lifePoints(lifePoints: number) {
    this._lifePoints = lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number { 
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    const minDamage = 1;
    this.lifePoints -= damage > 0 ? damage : minDamage;
    if (this.lifePoints <= 0) this.lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    const recoveryEnergy = 10;
    this._energy.amount = recoveryEnergy;
    this._strength += getRandomInt(this._minStatus, this._maxStatus);
    this._defense += getRandomInt(this._minStatus, this._maxStatus);
    this._dexterity += getRandomInt(this._minStatus, this._maxStatus);
    this._maxLifePoints += getRandomInt(this._minStatus, this._maxStatus);
    if (this._maxLifePoints > this._race.maxLifePoints) { 
      this._maxLifePoints = this._race.maxLifePoints; 
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(): void {
    console.log('Healing...');
    this.lifePoints += this._strength;
    if (this.lifePoints > this._maxLifePoints) {
      this.lifePoints = this._maxLifePoints;
    }
    this._energy.amount -= 5;
  }
}
export default Character;