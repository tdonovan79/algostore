// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
var rightSideView = function(root) {
    if(!root){//if root null return empty array
        return []
    }
    let rightVals = [], queue = [root]//return right vals and queue for BFT
    while(queue.length){
        let rowLength = queue.length//each row will fill queue, get length to get length of row
        for(let i = 0 ; i < rowLength ; i++){//iterate through current row
            let currentNode = queue.pop()
            if(currentNode.left){queue.unshift(currentNode.left)}//add left and right to queue
            if(currentNode.right){queue.unshift(currentNode.right)}
            if(i === rowLength - 1){rightVals.push(currentNode.val)}//if this is last element in row, push onto return array
        }
    }
    return rightVals
};