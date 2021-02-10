/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Infinity;
  let max = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
    if (prices[i] - min < max || i === prices.length - 1) {
      profit += max;
      min = prices[i];
      max = 0;
    }
  }
  // console.log(profit);
  return profit;
};
// @lc code=end

