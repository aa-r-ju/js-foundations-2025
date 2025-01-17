/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(phrase, characterBank) {
  const bankCount = {};

  // Count occurrences of each character in the character bank
  for (const char of characterBank) {
    bankCount[char] = (bankCount[char] || 0) + 1;
  }

  // Check if there are enough characters in the bank for the phrase
  for (const char of phrase) {
    if (!bankCount[char] || bankCount[char] <= 0) {
      return false; // Not enough characters
    }
    bankCount[char]--; // Use one character from the bank
  }

  return true; // All characters in the phrase are covered
}
