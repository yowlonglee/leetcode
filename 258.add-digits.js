/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) return num;

  let sum = 0;
  function recursive(n) {
    if (sum + n < 10) return sum = sum + n;
    if (n < 10) {
      n = sum + n;
      sum = 0;
    } else {
      sum = sum + n % 10;
      n = Math.floor(n / 10);
    }
    recursive(n);
  }
  recursive(num);
  return sum;
};
// @lc code=end

