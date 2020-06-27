// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

var MinStack = function() {//solution calls for two stacks. one keeps only min values, other keeps all values, allowing all function in O(1)
    this.minStack = []
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */

MinStack.prototype.push = function(x) {//if pushed value is less than or equal to top of min stack, push on to min stack. regardless, push onto main stack
    if (
        this.minStack.length === 0 || 
        x <= this.minStack[this.minStack.length - 1]
    ){
        this.minStack.push(x);
    };
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {//pop value from main stack. if this value is equal to the value on the min stack, pop that as well
    const popped = this.stack.pop()
    if (popped === this.minStack[this.minStack.length - 1]){
        this.minStack.pop()
    }
    return popped
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {//return top of the main stack, easy peasy
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {//return top of min stack
    return this.minStack[this.minStack.length - 1]
};