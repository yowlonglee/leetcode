/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let result = 0;
  let i = 1;
  while (Math.pow(5, i) <= n) {
    result += Math.trunc(n / Math.pow(5, i));
    i++;
  }
  return result;
};
// @lc code=end

