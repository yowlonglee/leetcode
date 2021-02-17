/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let left = right = 0;
  
  while (right < nums.length) {
    if (nums[left] === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    } 
    if (nums[left] !== 0) {
      left++;
    }
    right++;
  }
};
// @lc code=end

