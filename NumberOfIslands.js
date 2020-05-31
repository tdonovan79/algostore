// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3
var numIslands = function(grid) {
    let numIslands = 0//keep track of number of islands
    for(let i = 0 ; i < grid.length ; i++){
        for(let j = 0 ; j < grid[i].length ; j++){
            if(grid[i][j] === '1'){
                numIslands++//if new '1' value found, increment numIslands
                let queue = [[i, j]]//intialize a queue for BFS
                while(queue.length){
                    let [row, column] = queue.pop()//get row and column from queue
                    grid[row][column] = '0'
                    if(row < grid.length - 1 && grid[row + 1][column] === '1'){//check all around point for values of '1'
                        queue.unshift([row+1, column])//add to queue
                        grid[row + 1][column] = '0'//set to '0' to prevent double checking/queueing
                    }
                    if(row > 0 && grid[row - 1][column] === '1'){
                        queue.unshift([row-1, column])
                        grid[row - 1][column] = '0'
                    }
                    if(column < grid[row].length - 1 && grid[row][column + 1] === '1'){
                        queue.unshift([row, column+1])
                        [row, column+1] = '0'
                    }
                    if(column > 0 && grid[row][column - 1] === '1'){
                        queue.unshift([row, column - 1])
                        grid[row][column - 1] = '0'
                    }
                }
            }
        }
    }
    return numIslands
};