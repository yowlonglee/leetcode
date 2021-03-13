/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  // Return false on conditions when i and j are the same
  if (nums.length === 1 || k === 0) return false;

  for (let i = 0; i < nums.length; i += 1) {
    // find the next same item after i
    const j = nums.indexOf(nums[i], i + 1);
    // if item found, match their index difference against k
    if (j > 0 && Math.abs(i - j) <= k) return true;
  }
  // return false if no items match
  return false;
};
// @lc code=end

