/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  // Initialize count value
  var count = '1';
  for (var i = 1; i < n; i++) {
    // Use regular expression and String.replace to split count into groups
    var pattern = /(\d)\1*/g;
    var countSplit = count.replace(pattern, function(match, p1, offset) {
      // console.log({match, p1, offset});  
      return offset > 0 ? '-' + match : match;
    });
    
    // Split number string into an array
    var countArr = countSplit.split('-');
    // "Say" the array into a new number string
    // console.log(countArr);
    var say = '';
    countArr.forEach(function(item){
      say = say + item.length + item.slice(0, 1);
    });
    // console.log(say);
    // Return the number string as new count
    count = say;
    // return count;
  }
  // Return n-1th count value
  // console.log(count);
  return count;    
};
// @lc code=end

