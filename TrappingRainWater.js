// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
var trap = function(height) {
    let left = 0, right = height.length - 1, leftMax = -Infinity, rightMax = -Infinity, total = 0
    while(left < right){//while pointers do not meet
        if(height[left] < height[right]){//if left pointer is higher than right pointer, evaluate left
            if(height[left] > leftMax){//if this is highest left has seen so far, record in left max
                leftMax = height[left]
            }
            else {//else, total rainwater increases by the leftMax minus current height. since left  right, we know it is bounded by leftMax and leftMax < rightMax
                total += leftMax - height[left]
            }
            left++//increment
        }
        else{
            if(height[right] > rightMax){//if this is highest left has seen so far, record in right max
                rightMax = height[right]
            }
            else {//else, total rainwater increases by the rightMax minus current height
                total += rightMax - height[right]
            }
            right--//increment
        }
    }
    
    
    return total
};