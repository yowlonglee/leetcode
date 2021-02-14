/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums.lastIndexOf(nums[i])) return true;
  }
  return false;
};
// @lc code=end

