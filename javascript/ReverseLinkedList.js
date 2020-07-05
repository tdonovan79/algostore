// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?
var reverseList = function(head) {
    if(!head || !head.next){//if empty or one node, return head
        return head
    }
    let slow = null, fast = head//one ptr behind, one ahead
    while (fast){//while fast pointer is not null, hold pointer ahead of fast in temp, and reverse next
        let temp = fast.next
        fast.next = slow
        slow = fast//move fast and slow up
        fast = temp
    }
    return slow
};