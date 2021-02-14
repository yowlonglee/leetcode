/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 3) return 0;
  const primes = [2];
  for (let i = 3; i < n; i++) {
    for (let j = 0; j < primes.length; j++) {
      if (i % primes[j] === 0) break;
      if (primes[j] > Math.sqrt(i)) {
        primes.push(i);
        break;
      };
    }
  }
  return primes.length;
};
// @lc code=end

