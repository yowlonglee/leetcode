/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // Quickly return result if x is negative or zero
  if (x < 10) return x >= 0;
  
  let reverse = 0;
  let origin = x;
  while (origin > 0) {
    reverse = reverse * 10 + origin % 10;
    origin = Math.floor(origin / 10);
  }
  return reverse === x;
};
// @lc code=end

