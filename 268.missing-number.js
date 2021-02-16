/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 <= n && !nums.includes(nums[i] + 1)) return nums[i] + 1;
    if (nums[i] - 1 >= 0 && !nums.includes(nums[i] - 1)) return nums[i] - 1;
  }
};
// @lc code=end

