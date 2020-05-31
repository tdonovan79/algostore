// Given preorder and inorder traversal of a tree, construct the binary tree.

//     Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]
// Return the following binary tree:

// 3
//     / \
// 9  20
//     /  \
// 15   7
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {//if either empty, return null
        return null
    }
    let i = 0
    while (inorder[i] !== preorder[0]) {//find root (first nodes where values are same)
        i++
    }
    return new TreeNode(//recursive solution
        preorder[0], //current node
        buildTree(preorder.slice(1, i + 1), inorder.slice(0, i + 1)),//preorder left side up to root, inorder left side up to i
        buildTree(preorder.slice(i + 1), inorder.slice(i + 1))//preorder right side after i, inorder left side up to 1
    )
};