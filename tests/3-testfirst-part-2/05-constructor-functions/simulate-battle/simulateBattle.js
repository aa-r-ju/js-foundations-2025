/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function () {
  return this.health <= 0;
};

function simulateBattle(pokemon1, pokemon2, firstAttackerName) {
  let attacker = pokemon1.name === firstAttackerName ? pokemon1 : pokemon2;
  let defender = pokemon1.name === firstAttackerName ? pokemon2 : pokemon1;

  while (true) {
    defender.health -= attacker.biteAttack();

    if (defender.isDefeated()) {
      return `${attacker.name} Wins!`;
    }

    [attacker, defender] = [defender, attacker];
  }
}

const krabby = new Pokemon("Krabby", 100, 50);
const squirtle = new Pokemon("Squirtle", 50, 0);

console.log(simulateBattle(krabby, squirtle, "Krabby"));

const pikachu = new Pokemon("Pikachu", 250, 4);
const charizard = new Pokemon("Charizard", 300, 5);

console.log(simulateBattle(pikachu, charizard, "Pikachu"));
console.log(simulateBattle(pikachu, charizard, "Charizard"));
