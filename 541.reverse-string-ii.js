/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let reverse = true;
  let result = [];
  let substring = [];

  for (let i = 0, j = 1; i < s.length; i++, j++) {
    // console.log({i,j,reverse});
    if (reverse) {
      substring.push(s[i]);
    } else {
      result.push(s[i]);
    }

    if (j === k) {
      if(reverse) result = [...result, ...substring.reverse()];
      j = 0;
      reverse = !reverse;
      substring = [];
    }
  }
  // console.log(result);
  if (substring.length) result = [...result, ...substring.reverse()];
  return result.join('');
};
// @lc code=end

