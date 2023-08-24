import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _monsters: SimpleFighter[];
  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    const dead = -1;
    let positionMonters = 0;
    const numberOfMonsters = this._monsters.length;
    const isSurvivePlayer = this.player.lifePoints !== dead;
    while (positionMonters !== numberOfMonsters && isSurvivePlayer) {
      this.player.attack(this._monsters[positionMonters]);
      this._monsters[positionMonters].attack(this.player);
      if (this._monsters[positionMonters].lifePoints === dead) {
        positionMonters += 1;
      }
    }
    return this.player.lifePoints === dead ? -1 : 1;
  }
}

export default PVE;