/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  if (nums.length === 1) return nums[0];
  const maxNumbers = [];
  const arr = nums.sort((a,b) => b - a);
  maxNumbers.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < maxNumbers[maxNumbers.length - 1]) {
      maxNumbers.push(arr[i]);
      if (maxNumbers.length >= 3) break;
    }
  }
  return maxNumbers.length === 3 ? maxNumbers.pop() : maxNumbers.shift();
};
// @lc code=end

