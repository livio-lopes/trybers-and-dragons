import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// PLayers
const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');
player1.levelUp();
player1.levelUp();
player1.levelUp();
// Monsters
const monster1: Monster = new Monster();
const monster2: Monster = new Dragon();
// PVP
const pvp:PVP = new PVP(player2, player3);
// PVE
const monsters = [monster1, monster2];
const pve:PVE = new PVE(player1, monsters);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { 
  player1,
  player2,
  player3, 
  monster1,
  monster2, 
  pvp,
  pve,
  runBattles,
};