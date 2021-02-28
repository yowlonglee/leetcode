/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  const result = s.split('').reduce((accum, item, i, arr) => {
    return map[item] < map[arr[i + 1]] ? accum -= map[item] : accum += map[item];
  }, 0);
  return result;
};
// @lc code=end

