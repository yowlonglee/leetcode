/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const str = n.toString(2).padStart(32, '0').split('').reverse().join('');
  // console.log(Number.parseInt(str, 2));
  return Number.parseInt(str, 2);
};
// @lc code=end

