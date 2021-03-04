/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  // Create a keyboard row map
  const keyboard = {
    first: 'qwertyuiop',
    second: 'asdfghjkl',
    third: 'zxcvbnm'
  };
  const result = [];
  function findRow(letter) {
    for (let i = 0; i < Object.values(keyboard).length; i += 1) {
      if (Object.values(keyboard)[i].includes(letter)) return Object.keys(keyboard)[i];
    }
  }

  // Loop through the words array
  for (let i = 0; i < words.length; i += 1) {
    // Loop through the letters of each word
    const word = words[i].toLowerCase();
    // First we find the row of the first letter. Other letters in the same word should be in the same row as well.
    const rowOfFirstLetter = findRow(word[0]);
    for (let j = 0; j < word.length; j += 1) {
      if (!keyboard[rowOfFirstLetter].includes(word[j])) break;
      if (j === word.length - 1) result.push(words[i]);
    }
  }
  return result;
};
// @lc code=end

