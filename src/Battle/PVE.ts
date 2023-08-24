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
    const isLivePlayer = this.player.lifePoints !== dead;
    const isLiveMonsters = this._monsters
      .every((monster) => monster.lifePoints !== dead);
    while (isLivePlayer && isLiveMonsters) {
      this._monsters.forEach((monster) => {
        monster.attack(this.player);
        this.player.attack(monster);
      });
    }
    return this.player.lifePoints === dead ? -1 : 1;
  }
}

export default PVE;