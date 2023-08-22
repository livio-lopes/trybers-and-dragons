import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _counter = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._counter += +1;
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._counter;
  }
}

export default Orc;