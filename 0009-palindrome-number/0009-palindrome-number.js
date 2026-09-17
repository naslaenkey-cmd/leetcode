/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString();
    let result = num.split("").reverse().join("")

    return num === result
    
};