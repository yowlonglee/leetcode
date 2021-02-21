/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // Take a number from the nums array
  // Find the index of the other number after the first number that the sum of the two equals the target
  // If the other number is not found
  // Continue to try the next number
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(target - nums[i], i + 1);
    if (index >= 0) {
      return [i, index];
    }
  }
};
// @lc code=end

