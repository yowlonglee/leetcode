/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0];
  let prefix = "";
  for (let i = 1; i <= 200 ; i += 1) {
    
    for (let j = 1; j < strs.length; j += 1) {
      if (strs[0].slice(0, i) !== strs[j].slice(0, i)) break;
      if (j === strs.length - 1) prefix = strs[0].slice(0, i);
    }
    
  }
  // console.log(prefix);
  return prefix;
};
// @lc code=end

