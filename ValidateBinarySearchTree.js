// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
var isValidBST = function(root) {
    if(!root){//if no root, return true
        return true
    }
    let nodeStack = [root], minMaxStack = [[-Infinity, Infinity]]//queue for nodes and that nodes min and max values
    while(nodeStack.length){//while no nodes in the stack
        let currentNode = nodeStack.pop(), minMax = minMaxStack.pop()//get next node and min/max in stack
        if(currentNode.val <= minMax[0] || currentNode.val >= minMax[1]){//if violates min/max return false
            return false
        }
        //push node and new min/max values onto stack. on right, min is current value, left max is current value
        if(currentNode.left){
            nodeStack.push(currentNode.left)
            minMaxStack.push([minMax[0], currentNode.val])
        }
        if(currentNode.right){
            nodeStack.push(currentNode.right)
            minMaxStack.push([currentNode.val, minMax[1]])
        }
    }
    return true
};