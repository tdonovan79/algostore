// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
var generate = function(numRows) {
    let triangle = new Array(numRows)//create new array length of rows
    for(let i = 0 ; i < triangle.length ; i++){//iterate throguh rows
        triangle[i] = new Array(i + 1)//each row, add array length of that row
        for(let j = 0 ; j < triangle[i].length ; j++){//iterate through row
            if(j === 0 || j === triangle[i].length - 1){//if first or last in row, element is one
                triangle[i][j] = 1
            }
            else{//else, it is the sum of the row above, element previous + row above same element
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
            }
        }
    }
    return triangle
};