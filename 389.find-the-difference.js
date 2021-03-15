/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  // Create a blank hash table
  const hash = {};

  for (let i = 0; i < t.length; i += 1) {
    // Check if current letter from string t is in hash table.
    // If true, get the last index it appeared from string s and plus one. We will search after that index.
    const lastIndex = hash[t[i]] ? hash[t[i]][hash[t[i]].length - 1] + 1 : 0;
    // If current letter can be found in string s, save the letter and the index from string s in hash table.
    const indexFromS = s.indexOf(t[i], lastIndex);
    if (indexFromS >= 0) {
      hash[t[i]] ? hash[t[i]].push(indexFromS) : hash[t[i]] = [indexFromS];
    } else {
      // If current letter can not be found in string s, this is the added letter.
      return t[i];
    }
  }
};
// @lc code=end

