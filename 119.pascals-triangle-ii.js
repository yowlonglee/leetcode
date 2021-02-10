/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  
  function newRow(row) {
    if (rowIndex === 0) return row;
    const items = [1];
    for (let i = 0; i < row.length; i++) {
      const item = (i === row.length - 1) ? 1 : row[i] + row[i + 1];
      items.push(item);
    }
    rowIndex--;
    return newRow(items);
  }
  // const r = newRow([1]);
  // console.log(r);
  return newRow([1]);
};
// @lc code=end

