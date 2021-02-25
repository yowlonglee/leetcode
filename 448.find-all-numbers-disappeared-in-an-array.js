/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // Create an empty array to hold results
  const result = [];
  // Count from 1 to nums.length + 1 and try to find the number in array
  // Push it to the result if it is missing from the
  for (let i = 1; i < nums.length + 1; i += 1 ) {
    if (nums.indexOf(i) < 0) result.push(i);
  }
  return result;
};
// @lc code=end

