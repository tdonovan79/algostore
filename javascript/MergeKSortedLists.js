// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
Output: 1->1->2->3->4->4->5->6
let mergeLists = function(list1, list2){
    let node1 = list1, node2 = list2, merged = new ListNode(), dummy = merged
    while(node1 || node2){//while either node is end of list
        if(!node1){//if list 1 is at end, add from list2
            merged.next = node2
            node2 = node2.next
            merged = merged.next
        }
        else if(!node2){//if list2 is at end, add from list1
            merged.next = node1
            node1 = node1.next
            merged = merged.next
        }
        else if(node1.val < node2.val){//if node1 val less than node2, add node1
            merged.next = node1
            node1 = node1.next
            merged = merged.next
        }
        else {//if node2 val less than node1, add node2
            merged.next = node2
            node2 = node2.next
            merged = merged.next
        }
    }
    return dummy.next
}
var mergeKLists = function(lists) {
    if(!lists.length){//if empty array, return null
        return null
    }
    if(lists.length === 1){//if one list in array, return list
        return lists[0]
    }
    let mid = Math.floor(lists.length / 2)//find midpoint: performing merge sort on lists
    return mergeLists(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid, lists.length)))//recursibly merge two halves of array
    
};