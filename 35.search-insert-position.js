/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // Return the first index of target if target is found
  if (nums.indexOf(target) >= 0) return nums.indexOf(target);
  // Loop through nums to find the insert position
  for (let i = 0; i < nums.length; i += 1) {
    // As soon as we encounter the first number bigger than target, return the index
    if (nums[i] > target) return i;
  }
  // If all number in nums are smaller than target, return the nums length
  return nums.length;
};
// @lc code=end

