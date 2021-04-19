/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  // Make both strings the same length by padding 0 to the left of the shorter string
  const str1 = num1.padStart(Math.max(num1.length, num2.length), '0');
  const str2 = num2.padStart(Math.max(num1.length, num2.length), '0');
  let result = '';
  let carry = 0;
  
  // Adding single digits from both strings each iteration
  for (let i = str1.length - 1; i >= 0; i--) {
    let sum = parseInt(str1[i]) + parseInt(str2[i]) + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }
    result = sum + result;
  }
  if (carry) result = 1 + result;
  return result;
};
// @lc code=end

