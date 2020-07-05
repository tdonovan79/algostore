// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

var islandPerimeter = function(grid) {
    let perimeter = 0//keep track of total perimeter and iterate through entire grid
    for(let i = 0 ; i < grid.length ; i++){
        for(let j = 0 ; j < grid[i].length ; j++){
            if(grid[i][j] === 1){//if this space is an island, add 4 to perimeter
                perimeter += 4
                if(i > 0 && grid[i - 1][j]){//if island has more island to left, decrement perimeter by 2 (1 for each island square. only check up and left as to not repeat decrement)
                    perimeter -= 2
                }
                if(j > 0 && grid[i][j - 1]){
                    perimeter -= 2
                }
            }
            
        }
    }
    return perimeter
};