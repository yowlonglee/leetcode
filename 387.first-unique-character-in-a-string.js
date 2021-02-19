/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (s.length === 0) return -1;
  if (s.length === 1) return 0;
  // Make hash table
  const hashTable = {};
  for (let i = 0; i < s.length; i++) {
    // Create property
    if (!hashTable[s[i]]) {
      hashTable[s[i]] =  [i];
    } else {
      hashTable[s[i]].push(i);
    }
  }
  // console.log(hashTable);
  // Loop through the string and find its appearance in the hash table
  // Return the first unique character
  
  for (let i = 0; i < s.length; i++) {
    if (hashTable[s.charAt(i)].length === 1) return hashTable[s.charAt(i)][0];
  }
  // If found nothing, return -1
  return -1;
};
// @lc code=end

