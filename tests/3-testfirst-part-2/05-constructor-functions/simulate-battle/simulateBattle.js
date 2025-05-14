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
  if (this.health >= 1) {
    return false;
  } else {
    return true;
  }
};

function simulateBattle(pokemon1, pokemon2, firstAttackerName) {
  let attacker, defender;

  if (pokemon1.name === firstAttackerName) {
    attacker = pokemon1;
    defender = pokemon2;
  } else {
    attacker = pokemon2;
    defender = pokemon1;
  }

  while (!attacker.isDefeated() && !defender.isDefeated()) {
    defender.health -= attacker.biteAttack();

    [attacker, defender] = [defender, attacker];
  }

  return attacker.isDefeated()
    ? `${defender.name} Wins!`
    : `${attacker.name} Wins!`;
}
