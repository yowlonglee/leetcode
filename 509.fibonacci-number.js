/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // Create a memo map to save previous fibonacci numbers
  const memo = {};

  // A helper function to get a fibonacci number or to create a new one
  function helper(x) {
    // Return the number if it is already in the memo
    if (memo[x]) return memo[x];
    // Because F(1) = 1, F(0) = 0
    if (x === 1 || x === 0) return x;
    // Create and return the new number
    return memo[x] = helper(x - 1) + helper(x - 2);
  }
  return helper(n);
};
// @lc code=end

