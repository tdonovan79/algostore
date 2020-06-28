// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

var reverseWords = function(s) {
    let slow = 0, fast = 0, split = s.split("")//split string into array for easy reversing
    while(slow < split.length){
        while(s[fast] !== " " && fast < split.length){//advance fast pointer until space is found or reached end of array
            fast++
        }
        reverseOneWord(slow, fast - 1, split)//reverse word from start to position before fast
        fast++//increment fast to next word
        slow = fast//move slow up
    }
    return split.join("")//join array back into string
};

let reverseOneWord = function(start, end, s){
    while(start < end){//while start and end have not met
        let temp = s[start]//save start in temp
        s[start] = s[end]//start end end
        s[end] = temp//end equals start
        start++//both pointers move toward center
        end--
    }
}