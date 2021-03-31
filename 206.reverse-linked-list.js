/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function(head) {
  // Create an empty variable for the reversed linked list
  let prev = null;
  // We will take out each node one by one from the head to the reversed list
  while (head) {
    // Create a temp variable to store head.next list in each iteration
    const temp = head.next;
    // Attach the already reversed list to the current head
    // Every node befor the current one will become after
    // If this is the first time, head.next will be null so the first head will be the last on in the new list
    head.next = prev;
    // Take out current head in each iteration and store in the "prev" global variable
    prev = head;
    // Copy temp to head, therefor head is shorter by one node
    head = temp;
  }
  return prev;
};
// @lc code=end

