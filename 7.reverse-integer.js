/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) return 0;
  const negative = x < 0;
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  if (reversed >= Math.pow(2, 31)) return 0;
  return negative ? reversed * -1 : reversed;
  
};
// @lc code=end

