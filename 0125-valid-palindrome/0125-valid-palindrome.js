/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     let result = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = result.split("").reverse().join("")

    return result === reversed;


    

    
};