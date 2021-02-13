/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const history = [];
  function recursive (n) {
    if (n === 1) return true;
    if (history.includes(n)) return false;
    history.push(n);

    let sum = 0;
    while (n > 0) {
      const mod = n % 10;
      sum += Math.pow(mod, 2);
      n = Math.trunc(n / 10);
    }
    return recursive(sum);
  }
  return recursive(n);
};
// @lc code=end

