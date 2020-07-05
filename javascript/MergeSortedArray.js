// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
var merge = function(nums1, m, nums2, n) {
    let n1Ptr = m  - 1, n2Ptr = n - 1 //set n1Ptr to length of elements in nums 1, same for n2
    for(let i = m + n - 1 ; i >= 0 ; i--){//iterate from sum of total elements
        if(n2Ptr < 0 || nums1[n1Ptr] > nums2[n2Ptr]){//if nums1 element greater than nums2 or out of nums2 elements add nums1 element to end
            nums1[i] = nums1[n1Ptr]
            n1Ptr--
        }
        else {//elese add nums2 element
            nums1[i] = nums2[n2Ptr]
            n2Ptr--
        }
    }
};