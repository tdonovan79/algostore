// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })//sort intervals by starting time
    let i = 1
    while (i < intervals.length) {//iterate over intervals starting with second interval
        if (intervals[i][0] <= intervals[i - 1][1]) {//if start time of current interval is less than or equal to end time of previous interval, they must be joined  
            intervals[i - 1][1] = intervals[i][1] > intervals[i - 1][1] ?//set end time of previous interval to whichever interval has larger end time. no need to check for start as they are already sorted
                intervals[i][1] :
                intervals[i - 1][1]
            intervals.splice(i, 1)//eliminate current interval from array. do not increment i
        }
        else {//if intervals seperate, move on to next interval
            i++
        }
    }
    return intervals
};