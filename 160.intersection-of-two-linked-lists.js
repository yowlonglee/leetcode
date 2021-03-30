/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  // Create a Set object from headA  
  const setA = (function(head) {
    const set = new Set();
    // A recursive function add linked list nodes to set object
    // Because the lists must retain their original structure so we can't use loops
    function addSetValues(set, head) {
      if (!head) return;
      set.add(head);
      addSetValues(set, head.next);
    }
    addSetValues(set, head);
    return set;
  })(headA);
  
  // Find if any node in headB is in setA
  // If true, return the found node value
  // If false, return null
  function getFirstIntersectionNode(set, head) {
    // console.log(set.has(head), head.val);
    if(!head) return null;
    if(set.has(head)) {
      return head;
    } else {
      return getFirstIntersectionNode(set, head.next);
    }
  }
  return getFirstIntersectionNode(setA, headB);
};
// @lc code=end

