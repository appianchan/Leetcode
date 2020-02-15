// Determine whether an integer is a palindrome.An integer is a palindrome when it reads the same backward as forward.


var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    var n = x.toString();
    var y = n.split("");
    for (var x = 0; x < y.length; x++) {
        if (y[x] !== y[y.length - 1 - x]) {
            return false;
        }
    }
    return true;
};


// Given a sorted array nums, remove the duplicates in -place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

var removeDuplicates = function (nums) {
    var x = 0; 
    var y = {};
    while(x < nums.length){
        if(y[nums[x]] !== 1){
            y[nums[x]] = 1
            x = x + 1;
        } else {
            nums.splice(x, 1)
        }
    }
    return nums.length;
};

// Given a sorted array and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.

var searchInsert = function (nums, target) {
    for (var x = 0; x < nums.length; x++) {
        if (nums[x] === target) {
            return x;
        } else if (nums[x] > target) {
            return x;
        }
    }
    return nums.length;

};

