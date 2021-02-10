/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const formatted = s.replace(/[\W_]/ig, '').toLowerCase();
  // console.log(formatted);
  let palindrome = true;
  const median = Math.floor(formatted.length / 2);
  // console.log(median);
  for ( let i = 0; i < median; i++) {
    if (formatted.charAt(i) !== formatted.charAt(formatted.length - (1 + i))) {
      palindrome = false;
      break;
    }
  }
  // console.log(palindrome);
  return palindrome;
};
// @lc code=end

