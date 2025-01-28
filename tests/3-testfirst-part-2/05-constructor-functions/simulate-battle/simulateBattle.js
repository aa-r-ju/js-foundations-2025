// /* eslint-disable no-unused-vars, no-throw-literal*/
// function Pokemon(name, health, attackBonus) {
//   this.name = name;
//   this.health = health;
//   this.attackBonus = attackBonus;
// }

// Pokemon.prototype.biteAttack = function () {
//   return this.attackBonus + 2;
// };

// Pokemon.prototype.isDefeated = function () {
//   return this.health <= 0;
// };

// function simulateBattle(pokemon1, pokemon2, firstAttackerName) {
//   let attacker = pokemon1.name === firstAttackerName ? pokemon1 : pokemon2;
//   let defender = pokemon1.name === firstAttackerName ? pokemon2 : pokemon1;

//   while (true) {
//     defender.health -= attacker.biteAttack();

//     if (defender.isDefeated()) {
//       return `${attacker.name} Wins!`;
//     }

//     [attacker, defender] = [defender, attacker];
//   }
// }

// const krabby = new Pokemon("Krabby", 100, 50);
// const squirtle = new Pokemon("Squirtle", 50, 0);

// console.log(simulateBattle(krabby, squirtle, "Krabby"));

// const pikachu = new Pokemon("Pikachu", 250, 4);
// const charizard = new Pokemon("Charizard", 300, 5);

// console.log(simulateBattle(pikachu, charizard, "Pikachu"));
// console.log(simulateBattle(pikachu, charizard, "Charizard"));

// Pokemon Constructor Function
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

// Adding methods to the Pokemon prototype
Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function () {
  return this.health <= 0;
};

// simulateBattle Function
function simulateBattle(pokemon1, pokemon2, firstAttacker) {
  let attacker = firstAttacker === pokemon1.name ? pokemon1 : pokemon2;
  let defender = firstAttacker === pokemon1.name ? pokemon2 : pokemon1;

  while (!pokemon1.isDefeated() && !pokemon2.isDefeated()) {
    defender.health -= attacker.biteAttack();
    if (defender.isDefeated()) break;

    // Swap attacker and defender
    [attacker, defender] = [defender, attacker];
  }

  return pokemon1.isDefeated()
    ? `${pokemon2.name} Wins!`
    : `${pokemon1.name} Wins!`;
}

const pikachu = new Pokemon("Pikachu", 500, 4);
const charizard = new Pokemon("Charizard", 300, 4);

console.log(simulateBattle(pikachu, charizard, "Pikachu")); // Output: "Charizard Wins!"
console.log(simulateBattle(charizard, pikachu, "charizard")); // Output: "Charizard Wins!"
