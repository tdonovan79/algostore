// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
var spiralOrder = function (matrix) {
    if (!matrix.length) {
        return matrix
    }
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1,
        spiral = []
    while (top <= bottom && left <= right) {//evaluate top row
        for (let i = left; i <= right; i++) {
            spiral.push(matrix[top][i])
        }
        for (let i = top + 1; i <= bottom; i++) {//evaluate right column, excepting the top member which is part of the top row
            spiral.push(matrix[i][right])
        }
        if (left < right && top < bottom)//if not on final row
        {
            for (let i = right - 1; i >= left; i--) {//evaluate bottom row, excepting the rightmost element
                spiral.push(matrix[bottom][i])
            }
            for (let i = bottom - 1; i > top; i--) {//evaluate the left column, excepting the bottom and top elements
                spiral.push(matrix[i][left])
            }
        }

        top++ //tighten the "loop"
        bottom--
        left++
        right--
    }
    return spiral
};