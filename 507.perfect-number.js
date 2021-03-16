/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  let sum = 0;
  for (let i = 1; i < num; i += 1) {
    if (num % i === 0) sum += i;
    if (sum > num) return false;
  }
  // console.log(sum);
  return sum === num;
};
// @lc code=end

