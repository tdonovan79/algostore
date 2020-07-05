// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Example:

// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3
var MovingAverage = function(size) {
    this.size = size
    this.sum = 0
    this.count = 0
    this.queue = []
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.count === this.size){//if count reached, dequeue val and insert new val, adjust sum, and return average
        this.sum -= this.queue.pop()
        this.sum += val
        this.queue.unshift(val)
        return this.sum / this.count
    }
    else{//ele ad val to queue and add to sum, increment cunt, return average
        this.sum += val
        this.queue.unshift(val)
        this.count++
        return this.sum / this.count
    }
};