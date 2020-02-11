// Determine whether an integer is a palindrome.An integer is a palindrome when it reads the same backward as forward.


var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    var n = x.toString();
    var y = n.split("");
    
    if (y === y.reverse()) {
        console.log(y);
        console.log(y.reverse());
        return true;
    } else {
        
        return false;
    }
};

isPalindrome(10);