// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL
var reverseBetween = function(head, m, n) {
    if(!head || m === n){ //if head null or m and n same node return head
        return head
    }
    let dummy = new ListNode(null, head)
    let before = dummy, after = dummy//set up pointers to before and after reversed list
    for(let i = 0 ; i < n + 1 ; i++){//iterate to node after reverse list
        after = after.next
    }
    for(let i = 0 ; i < m - 1 ; i++){//iterate to node before reverse list
        before = before.next
    }
    let slow = before.next, fast = before.next.next // set slow and fast pointers to first and second nodes in reverse list
    slow.next = after//the first node in reversed list should point to first node after
    while (fast !== after){//reverse list
        let temp = fast.next
        fast.next = slow
        slow = fast
        fast = temp
    }
    before.next = slow//node before list should now point to new "begining" of list
    return dummy.next//need dummy in case n = 0
};