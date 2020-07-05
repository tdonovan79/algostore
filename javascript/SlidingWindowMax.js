// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

// Follow up:
// Could you solve it in linear time?

// Example:

// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7] 
// Explanation: 

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7


// Constraints:

// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 1 <= k <= nums.length
// var maxSlidingWindow = function(nums, k) {
//     let left = new Array(nums.length), right = new Array(nums.length), maxes = new Array()
//     for(let i = 0 ; i < nums.length ; i++){//get max for each k window from left to right
//         if(i % k === 0){//if first element in window, max is itself
//             left[i] = nums[i]
//         }
//         else {//else max between this or previous element in window
//             left[i] = Math.max(nums[i], left[i - 1])
//         }
//     }
//     for(let i = nums.length - 1 ; i >= 0 ; i--){//get max for each k window from left to right
//         if(i % k === 0 || i === nums.length - 1){//if first in window or last on array, itself
//             right[i] = nums[i]
//         }
//         else {//else max between this or previous element in window
//             right[i] = Math.max(nums[i], right[i + 1])
//         }
//     }
//     for(let i = 0 ; i < nums.length - k + 1 ; i++){//get maxin each window by either max of left side of window coming from the right, or max of right side of window coming from left
//         maxes[i] = Math.max(right[i], left[i + k - 1])
//     }
//     return maxes
// };
//**BETTER SOLUTION */
var maxSlidingWindow = function(nums, k) {
    let queue = [0]//intitialize queue, must be kept largest to smallest
    for(let i = 1 ; i < k ; i++){//loop through intial k values
        while(queue.length && ((nums[queue[queue.length - 1]] < nums[i]))){
            queue.pop()//while items in queue and last element smaller than current, pop
        }
        queue.push(i)//push current element onto queue
    }
    let maxes = [nums[queue[0]]]//first max is beginining of queue
    for(let fast = k, slow = 1 ; fast < nums.length ; fast++, slow++){//initalize values to start and end of window
        while(queue.length && ((nums[queue[queue.length - 1]] < nums[fast]))){
            queue.pop()//while items in queue and last element smaller than current, pop
        }
        while(queue[0] < slow){
            queue.shift()//while first element is not in window, pop
        }
        queue.push(fast)//push current element onto queue
        maxes.push(nums[queue[0]])//add current max to maxes array
    }
    return maxes
};