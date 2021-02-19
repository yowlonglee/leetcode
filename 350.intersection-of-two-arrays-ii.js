/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  // Choose the smallest array to make hash table to save memory usage
  const smallArr = nums1.length === Math.min(nums1.length, nums2.length) ? nums1 : nums2;
  const longArr = nums2.length === Math.max(nums1.length, nums2.length) ? nums2 : nums1;
  const hash = {};
  for (item of smallArr) {
    hash[item] ? hash[item]++ : hash[item] = 1;
  }
  // console.log(hash);
  // Compare the other array items to the hash table and find intersections
  const result = [];
  for (item of longArr) {
    if (hash[item] > 0) {
      hash[item]--; 
      result.push(item);
    }
  }
  return result;
};
// @lc code=end

