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

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.However, the numeral for four is not IIII.Instead, the number four is written as IV.Because the one is before the five we subtract it making four.The same principle applies to the number nine, which is written as IX.There are six instances where subtraction is used:

// I can be placed before V(5) and X(10) to make 4 and 9.
// X can be placed before L(50) and C(100) to make 40 and 90.
// C can be placed before D(500) and M(1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.Input is guaranteed to be within the range from 1 to 3999.
var romanToInt = function (s) {
    var reference = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    var final = 0;
    var x = 0;
    while (x < s.length) {
        var numeral = s.charAt(x);
        if (numeral === 'I') {
            if (s.charAt(x + 1) === 'V') {
                final = final + 4;
                x = x + 2;
                continue;
            } else if (s.charAt(x + 1) === 'X') {
                final = final + 9;
                x = x + 2;
                continue;
            } else {
                final = final + 1;
                x = x + 1;
            }
        } else if (numeral === 'X') {
            if (s.charAt(x + 1) === 'L') {
                final = final + 40;
                x = x + 2;
                continue;
            } else if (s.charAt(x + 1) === 'C') {
                final = final + 90;
                x = x + 2;
                continue;
            } else {
                final = final + 10;
                x = x + 1;
            }
        } else if (numeral === 'C') {
            if (s.charAt(x + 1) === 'D') {
                final = final + 400;
                x = x + 2;
                continue;
            } else if (s.charAt(x + 1) === 'M') {
                final = final + 900;
                x = x + 2;
                continue;
            } else {
                final = final + 100;
                x = x + 1;
            }
        } else {
            final = final + reference[numeral];
            x = x + 1;
        }
    }
    return final;
    
    
};

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

//     Example 1:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]
// Example 2:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]

var searchRange = function (nums, target) {
    var arr = [];
    for (var x = 0; x < nums.length; x++) {
        var num = nums[x];
        if (num === target && arr.length === 0) {
            arr.push[x];
        }

        if (num > target && arr.length === 1) {
            arr.push[(x - 1)];
            return arr;
        }
    }
    return [-1, -1];
};



