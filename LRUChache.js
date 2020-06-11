// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4
var LRUCache = function(capacity) {//get nodes O(1) with map, insert with double link list
    this.capacity = capacity
    this.count = 0
    this.nodesMap = new Map()
    this.head = new Node("head", "head")
    this.tail = new Node("tail", "tail")
    this.head.next = this.tail
    this.tail.prev = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.nodesMap.has(key)){//if map has key
        let currentNode = this.nodesMap.get(key)
        if(currentNode.prev !== this.head){//if not first in list, make first in list
            disconnect(currentNode)
            insertAfter(currentNode, this.head)
        }
        return currentNode.value//return val
    }
    else {//else return -1
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.nodesMap.has(key)){//if already in cache, update value and move to front of list
        let currentNode = this.nodesMap.get(key)
        currentNode.value = value
        if(currentNode.prev !== this.head){
            disconnect(currentNode)
            insertAfter(currentNode, this.head)
        }
    }
    else{//else make new node, if capacity has been reached delete node before tail, if not add and increment count
        if(this.capacity === this.count){
            let temp = this.tail.prev
            disconnect(temp)
            this.nodesMap.delete(temp.key)
            this.nodesMap.set(key, new Node(key, value))
            insertAfter(this.nodesMap.get(key), this.head)
        }
        else{
            this.nodesMap.set(key, new Node(key, value))
            insertAfter(this.nodesMap.get(key), this.head)
            this.count++
        }
    }
};

let Node = function(key, value, next = null, prev = null){//node
    this.key = key
    this.value = value
    this.next = next
    this.prev = prev
}
let insertAfter = function(insertNode, head) {//insert after a node
    insertNode.next = head.next
    insertNode.prev = head
    head.next.prev = insertNode
    head.next = insertNode
}
let disconnect = function(disNode){//disconnect from list
    disNode.prev.next = disNode.next
    disNode.next.prev = disNode.prev
}