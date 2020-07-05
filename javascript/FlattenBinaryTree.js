// Given a binary tree, flatten it to a linked list in -place.

// For example, given the following tree:

// 1
//     / \
// 2   5
//     / \   \
// 3   4   6
// The flattened tree should look like:

// 1
// \
// 2
// \
// 3
// \
// 4
// \
// 5
// \
// 6
var flatten = function (root) {
    if (!root) {//if no root, return null
        return root
    }
    let listEnd = null, nodeStack = [root] // create stack of nodes to be processed and tail of list
    while (nodeStack.length !== 0) {
        let currentNode = nodeStack.pop()
        if (currentNode.right) {//push nodes right, then left (preorder traversal)
            nodeStack.push(currentNode.right)
            currentNode.right = null//set nodes to null as once in stack, tree structure can be destroyed
        }
        if (currentNode.left) {
            nodeStack.push(currentNode.left)
            currentNode.left = null//set nodes to null as once in stack, tree structure can be destroyed
        }
        if (listEnd) {//add node to linked list, keep track with listEnd
            let temp = listEnd.right
            listEnd.right = currentNode
            listEnd = listEnd.right
            listEnd.right = temp
        } else { listEnd = currentNode }//for root
    }
};