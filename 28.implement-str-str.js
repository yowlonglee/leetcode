/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // If needle is empty, return 0
  if (needle.length === 0) return 0;
  // Start looping through haystack
  for (let i = 0; i < haystack.length; i += 1) {
    // As soon as we see a character that matches
    if (haystack.charAt(i) === needle.charAt(0)) {
      // We start another loop through needle and add up indexs from both strings
      for (let j = 0; j < needle.length; j += 1) {
        // When the haystack index (i + j) is larger than it should be, break the loop
        if (i + j > haystack.length - 1) break;
        // Break the loop if the characters don't match
        if (haystack.charAt(i + j) !== needle.charAt(j)) break;
        // Return the index of the first chracter from haystack if we have checked the entire needle string
        if (j === needle.length - 1) return i;
      }
    }
  }
  // Return -1 if there's not match
  return -1;
};
// @lc code=end

