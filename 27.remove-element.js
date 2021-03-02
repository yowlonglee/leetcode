/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  nums.sort((a,b) => a - b);
  const startIndex = nums.indexOf(val);
  const lastIndex = nums.lastIndexOf(val);
  if (startIndex < 0) return nums.length;
  // console.log({startIndex, lastIndex});
  nums.splice(startIndex, lastIndex - startIndex + 1);
  return nums.length;
};
// @lc code=end

