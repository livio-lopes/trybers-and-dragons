import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor(lifePoints?: number, strength?: number) {
    this._lifePoints = lifePoints || 85;
    this._strength = strength || 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const dead = -1;
    this._lifePoints -= this._lifePoints === 0 || this._lifePoints < 0
      ? dead : attackPoints;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;