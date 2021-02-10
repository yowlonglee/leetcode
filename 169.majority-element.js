/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) - i + 1 > nums.length / 2) {
      return nums[i];
    }
    i = nums.lastIndexOf(nums[i]);
  }
};
// @lc code=end

