/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let subStringEnd = 0;
  let subStringIndex = 0;
  for (let i = 0; i < s.length; i++) {
    console.log([s[i], s[subStringIndex], i, subStringIndex, subStringEnd]);
    if (s[i] === s[0]) {
      subStringIndex = 0;
    } 
    if (subStringIndex > subStringEnd) subStringEnd = subStringIndex;
    if (i < s.length - 1) subStringIndex++;
  }
  return subStringIndex === subStringEnd;
};
// @lc code=end

