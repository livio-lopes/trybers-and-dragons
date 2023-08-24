import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private playerTwo: Fighter;
  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    this.playerTwo = playerTwo;
  }

  fight(): number {
    const dead = -1;
    while (this.player.lifePoints !== dead 
      && this.playerTwo.lifePoints !== dead) {
      this.player.attack(this.playerTwo);
      this.playerTwo.attack(this.player);
    }
    return this.player.lifePoints === dead ? -1 : 1;
  }
}

export default PVP;