/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // Return the node if it is the last one or an empty list
  if (!head || !head.next) return head;
  if (head.val === head.next.val) {
    // If the current and next values are the same, remove the next node
    // Put the head back to check incase the next value is also same
    head.next = head.next.next;
    deleteDuplicates(head);
  } else {
    // If the current and next values are different, advance to the next level
    deleteDuplicates(head.next);
  }
  return head;
};
// @lc code=end

