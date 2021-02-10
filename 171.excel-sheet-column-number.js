/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function getIndex(x) {
    return alphabets.indexOf(x);
  }
  const arr = [...s];

};
// @lc code=end

