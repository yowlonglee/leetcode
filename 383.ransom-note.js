/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  // Create a blank hash table
  const hash = {};

  for (let i = 0; i < ransomNote.length; i += 1) {
    // Check if current ransomNote character is in hash table
    // If true, get the last appeared index
    const lastIndex = hash[ransomNote[i]] ? hash[ransomNote[i]][hash[ransomNote[i]].length - 1] + 1: 0;
    // console.log(lastIndex);
    // If current character can be found in magazine string, save it and its index from magazine in hash table
    const indexFromMagazine = magazine.indexOf(ransomNote[i], lastIndex);
    if(indexFromMagazine >= 0) {
      hash[ransomNote[i]] ? hash[ransomNote[i]].push(indexFromMagazine) : hash[ransomNote[i]] = [indexFromMagazine];
    } else {
      // If current character is not in magazine string, return false
      return false;
    }
  }
  // console.log(hash);
  // If all characters are in magazine string, return true
  return true;
};
// @lc code=end

