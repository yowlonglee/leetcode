/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // Choose the smallest array to make hash table to save memory usage
  const smallArr = nums1.length === Math.min(nums1.length, nums2.length) ? nums1 : nums2;
  const longArr = nums2.length === Math.max(nums1.length, nums2.length) ? nums2 : nums1;
  const hash = {};
  for (item of smallArr) {
    if (!hash[item]) hash[item] = true;
  }
  const result = [];
  for (item of longArr) {
    if (hash[item]) {
      result.push(item);
      hash[item] = false;
    }
  }
  return result;
};
// @lc code=end

