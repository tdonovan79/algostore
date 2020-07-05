// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7
var addTwoNumbers = function(l1, l2) {
    let onePtr = l1, twoPtr = l2, carry = 0, dummy = new ListNode, current = dummy, sum = 0, oneStack = [], twoStack = [], answerStack = []
    while(onePtr || twoPtr){//push all values onto stacks so they can be read backwards
        if(onePtr){
            oneStack.push(onePtr.val)
            onePtr = onePtr.next
        }
        if(twoPtr){
            twoStack.push(twoPtr.val)
            twoPtr = twoPtr.next
        }
    }
    while(oneStack.length || twoStack.length){//while one of the stacks is not empty
        if(!oneStack.length){sum = twoStack.pop() + carry}//if one stack is empty, pop other and add to carry
        else if(!twoStack.length)(sum = oneStack.pop()  + carry)
        else{sum = oneStack.pop()  + twoStack.pop()  + carry}//else, pop both stacks and add carry
        if(sum >= 10) {//if sum is over ten, get carry and change sum to last digit
            carry = 1
            sum = sum % 10
        }
        else{//else, no carry
            carry = 0
        }
        answerStack.push(new ListNode(sum)) //push sum Node onto a stack
    }
    if(carry){//if there's a leftover value, add to stack
        answerStack.push(new ListNode(carry))
    }
    while(answerStack.length){//pop from stack and make new linked list
        current.next = answerStack.pop()
        current = current.next
    }
    return dummy.next
};