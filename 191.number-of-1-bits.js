/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return n.toString(2).split('').sort((a,b) => b - a).lastIndexOf('1') + 1;
};
// @lc code=end

