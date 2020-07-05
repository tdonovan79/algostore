// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

 

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3
// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

 

// Constraints:

// The number of elements of the BST is between 1 to 10^4.
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
var kthSmallest = function(root, k) {
    if(!root){//if root null return null
        return root
    }
    let stack = [], currentNode = root, count = 0//keep track of stack, current Node, and count of nodes processed
    while(stack.length || currentNode){
        if(currentNode !== null){//if current node, push onto stack and curret is left child
            stack.push(currentNode)
            currentNode = currentNode.left
        }
        else{//if current node is null, pop from stack and increment count. ush right child onto stack
            currentNode = stack.pop()
            count++
            if(count === k){//if count = k, return node
                return currentNode.val
            }
            currentNode = currentNode.right//
        }
    }
    return null
    
};