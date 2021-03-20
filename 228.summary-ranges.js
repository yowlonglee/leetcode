/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length === 0) return nums;
  const result = [];
  let i = 0;
    
  for (let j = i; j < nums.length; j++) {
    if (nums[i] + (j - i) !== nums[j]) {
      const range = j - i > 1 ? `${nums[i]}->${nums[j - 1]}` : `${nums[i]}`;
      result.push(range);
      i = j;
    } 
    if (j === nums.length - 1) {
      const range = i === j ? `${nums[j]}` : `${nums[i]}->${nums[j]}`;
      result.push(range);
    } 
  }
  return result;
};
// @lc code=end

