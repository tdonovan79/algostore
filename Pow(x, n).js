// mplement pow(x, n), which calculates x raised to the power n (xn).

// Example 1:

// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:

// Input: 2.10000, 3
// Output: 9.26100
// Example 3:

// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
// Note:

// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]

var myPow = function(x, n) {
    let helper = function square(x, n){
        if( n === 0){//base case
            return 1
        }
        let half = helper(x, Math.floor(n/2))//get the exp amount of half exponent
        if(n %  2 === 0) {//if even numbered, multiply the two halves together
            return half * half
        }
        else {//else, tack on another mult of base. this is why 0 works as the base case, as 1 will be 1 * 1 * x
            return half * half * x
        }
    }
    if(n < 0){//if exponent is negative, flip x and make n positive
        x = 1/x
        n = -n
    }
    return helper(x, n)
};