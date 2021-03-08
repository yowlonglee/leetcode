/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  // Set an initial to hold the max sub array sum
  let max = -Infinity;
  let current = 0;
  for (let i = 0; i < nums.length; i += 1) {
    max = Math.max(current + nums[i], max);
    max = Math.max(max, nums[i]);
    current = Math.max(current + nums[i], nums[i]);
  }
  return max;
};
// @lc code=end

