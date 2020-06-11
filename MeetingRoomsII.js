// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// Example 1:

// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2
// Example 2:

// Input: [[7,10],[2,4]]
// Output: 1
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
var minMeetingRooms = function(intervals) {
    let starts = [], ends = []
    for(let i = 0 ; i < intervals.length ; i++){//split start and end times into different arrays
        starts.push(intervals[i][0])
        ends.push(intervals[i][1])
    }
    starts.sort((a, b) => {//sort both stat and end times
        return a - b
    })
    ends.sort((a, b) => {
        return a - b
    })
    let currentEnd = 0, rooms = 0//initialize end pointer and number of rooms
    for(let i = 0 ; i < starts.length ; i++){//iterate through start times
        if(starts[i] >=  ends[currentEnd]){//if start is greater than current end time, a room has opened up. decrement amount of room and increment end pointer
            rooms--
            currentEnd++
        }
        rooms++//if no room opened up, need another room. if a room opened up, total rooms does not change
    }
    return rooms
};