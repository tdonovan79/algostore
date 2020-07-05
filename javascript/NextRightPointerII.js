// Given a binary tree

// struct Node {
//     int val;
//     Node * left;
//     Node * right;
//     Node * next;
// }
// Populate each next pointer to point to its next right node.If there is no next right node, the next pointer should be set to NULL.

//     Initially, all next pointers are set to NULL.



// Follow up:

// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.


//     Example 1:



//     Input: root = [1, 2, 3, 4, 5, null, 7]
// Output: [1,#, 2, 3,#, 4, 5, 7,#]
// Explanation: Given the above binary tree(Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.


//     Constraints:

// The number of nodes in the given tree is less than 6000.
//     - 100 <= node.val <= 100
var connect = function(root) {
    if(!root){//if no root, return null
        return root
    }
    let leftmost = root, currentNode = root//keep track of leftmost in next row and currentNode
    while(currentNode){
        let nextNode = currentNode.next
        while(nextNode){//find next node in row that has children, if there is one
            if(!nextNode.left && !nextNode.right){
                nextNode = nextNode.next
            }
            else {
                break
            }
        }
        if(currentNode.left && !leftmost){//if no leftmost node, set it
            leftmost = currentNode.left
        }
        if(currentNode.right && !leftmost){
            leftmost = currentNode.right
        }
        if(currentNode.left){//if left child, set it to closest horizontal node to right as next
            if(currentNode.right){
                currentNode.left.next = currentNode.right
            }
            else if(nextNode){
                if(nextNode.left){
                    currentNode.left.next = nextNode.left
                }
                else {
                    currentNode.left.next = nextNode.right
                }
            }
            else {//if one is not found, end of row, leftmost is null
                currentNode = leftmost
                leftmost = null
                continue
            }
        }
        if(currentNode.right){//if right child, set it to closest horizontal node to right as next
            if(nextNode && nextNode.left){
                currentNode.right.next = nextNode.left
            }
            else if(nextNode && nextNode.right){
                currentNode.right.next = nextNode.right
            }
            else {//if one is not found, end of row, leftmost is null
                currentNode = leftmost
                leftmost = null
                continue
            }
        }
        if(currentNode.next){//if next node, set currentNode
            currentNode = currentNode.next
        }
        else{//else set to null, traversal finished
            currentNode = null
        }
    }
    return root
};