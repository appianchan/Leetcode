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
    if (nums.length === 1 && nums[0] === target) {
        return [0, 0];
    }
    var arr = [];
    for (var x = 0; x < nums.length; x++) {
        var num = nums[x];
        if (num === target && arr.length === 0) {
            arr.push(x);
        }

        if (num > target && arr.length === 1) {
            arr.push(x - 1);
            return arr;
        }
    }
    if (arr.length === 0) {
        return [-1, -1];
    } else {
        return [arr[0], nums.length - 1];
    }

};

// Given a non - empty array of digits representing a non - negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

//     Example 1:

// Input: [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4, 3, 2, 1]
// Output: [4, 3, 2, 2]
// Explanation: The array represents the integer 4321.


var plusOne = function (digits) {
    let array = [];
    let counter = 1;
    for (var x = digits.length - 1; x >= 0; x--) {
        if (counter === 1) {
            let num = digits[x] + 1;
            if (num === 10 && x !== 0) {
                num = 0;
                array.unshift(num);
            } else if (x !== 0 && num !== 10) {
                counter = 0;
                array.unshift(num);
            } else if (x === 0 && num === 10) {
                array.unshift(0);
                array.unshift(1);
            } else {
                array.unshift(num);
            }
        } else {
            array.unshift(digits[x])
        }

    }
    return array;
};

// Given an array nums and a value val, remove all instances of that value in -place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// The order of elements can be changed.It doesn't matter what you leave beyond the new length.

// Example 1:

// Given nums = [3, 2, 2, 3], val = 3,

//     Your function should return length = 2, with the first two elements of nums being 2.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2,

//     Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

// Note that the order of those five elements can be arbitrary.

// It doesn't matter what values are set beyond the returned length.

var removeElement = function (nums, val) {
    var x = 0;
    while(x < nums.length){
        var num = nums[x];
        if(num !== val){
            x = x + 1;
        }else{
            nums.splice(x, 1);
        }
    }
    return nums.length;
};

// Given an array, rotate the array to the right by k steps, where k is non - negative.

//     Example 1:

// Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]
// Explanation:
// rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
// rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
// rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
// Example 2:

// Input: [-1, -100, 3, 99] and k = 2
// Output: [3, 99, -1, -100]
// Explanation:
// rotate 1 steps to the right: [99, -1, -100, 3]
// rotate 2 steps to the right: [3, 99, -1, -100]

var rotate = function (nums, k) {
    while (k > 0) {
        var x = nums.pop();
        nums.unshift(x);
        k = k - 1;
    }
    return nums;
};

// Given a non - empty array of integers, every element appears twice except for one.Find that single one.

//     Note:

// Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?

//     Example 1:

// Input: [2, 2, 1]
// Output: 1
// Example 2:

// Input: [4, 1, 2, 1, 2]
// Output: 4

var singleNumber = function (nums) {
    var final = {};
    for (var x = 0; x < nums.length; x++) {
        var num = nums[x];
        if (final[num] !== 1) {
            final[num] = 1;
        } else {
            final[num] += 1;
        }

    }
    for (var key in final) {
        if (final[key] === 1) {
            return key;
        }
    }
};

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

//     Example:

// Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
var counter = [];
var isHappy = function (n) {
    if (n === 1) {
        counter = [];
        return true;
    }
    if (counter.includes(n)) {
        counter = [];
        return false;
    } else {
        counter.push(n);
    }

    if (n < 10) {
        return isHappy(Math.pow(n, 2))
    }
    var y = n.toString();
    var arr = y.split('');
    var final = 0;
    for (var x = 0; x < arr.length; x++) {
        var z = parseInt(arr[x], 10);
        final += Math.pow(z, 2);
    }


    return isHappy(final);
};

// Given an array nums of integers, return how many of them contain an even number of digits.


//     Example 1:

// Input: nums = [12, 345, 2, 6, 7896]
// Output: 2
// Explanation:
// 12 contains 2 digits(even number of digits). 
// 345 contains 3 digits(odd number of digits). 
// 2 contains 1 digit(odd number of digits). 
// 6 contains 1 digit(odd number of digits). 
// 7896 contains 4 digits(even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
//     Example 2:

// Input: nums = [555, 901, 482, 1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.
var findNumbers = function (nums) {
    var counter = 0;
    for (var x = 0; x < nums.length; x++) {
        if ((nums[x] > 9 && 100 > nums[x]) || (nums[x] > 999 && nums[x] < 10000)) {
            counter += 1;
        }
    }
    return counter;
};

// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.



//     Example 1:

// Input: arr = [1, 2, 2, 1, 1, 3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
//     Example 2:

// Input: arr = [1, 2]
// Output: false
// Example 3:

// Input: arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
// Output: true

var uniqueOccurrences = function (arr) {
    var anobject = {};
    for (var x = 0; x < arr.length; x++) {
        var num = arr[x];
        if (anobject[num] === undefined) {
            anobject[num] = 1;
        } else {
            anobject[num] += 1;
        }
    }
    var final = [];
    var array = Object.values(anobject);
    for (var x = 0; x < array.length; x++) {
        if (final.includes(array[x])) {
            return false;
        } else {
            final.push(array[x])
        }
    }
    return true;


};
uniqueOccurrences([1, 2, 2, 1, 1, 3]);

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.



//     Example 1:

// Input: arr = [17, 18, 5, 4, 6, 1]
// Output: [18, 6, 6, 6, 1, -1]


// Constraints:

// 1 <= arr.length <= 10 ^ 4
// 1 <= arr[i] <= 10 ^ 5

var checkHighestElement = function (arr) {
    var counter = 0;
    for (var x = 0; x < arr.length; x++) {
        var num = arr[x];
        if (num > counter) {
            counter = num;
        }
    }
    return counter;
}
var replaceElements = function (arr) {
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            final.push(-1);
            break;
        }
        if (i === arr.length - 2) {
            final.push(arr[arr.length - 1]);
            continue;
        }
        final.push(checkHighestElement(arr.slice(i + 1, arr.length)))
    }
    return final;
};
// Write a function that reverses a string.The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.



//     Example 1:

// Input: ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]
// Example 2:

// Input: ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]

var reverseString = function (s) {
    var final = [];
    for (var x = s.length - 1; x >= 0; x--) {
        final.push(s[x]);
    }
    for (var x = 0; x < s.length; x++) {
        s[x] = final[x];
    }
};

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

//     Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

var fizzBuzz = function (n) {
    var final = [];
    for (var x = 1; x <= n; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
            final.push("FizzBuzz");
        } else if (x % 3 === 0) {
            final.push("Fizz");
        } else if (x % 5 === 0) {
            final.push("Buzz");
        } else {
            final.push(x.toString());
        }
    }
    return final;
};

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.



// Example 1:

// Input: [1, 0, 2, 3, 0, 4, 5, 0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1, 0, 0, 2, 3, 0, 0, 4]
// Example 2:

// Input: [1, 2, 3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1, 2, 3]


// Note:

// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9
var duplicateZeros = function (arr) {
    var x = 0;
    while (x < arr.length) {
        var num = arr[x];
        if (num === 0) {
            arr.splice(x + 1, 0, 0);
            arr.pop(arr.length - 1);
            x = x + 2;
        } else {
            x++;
        }
    }
};

// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice.Find the two elements that appear only once.

//     Example:

// Input: [1, 2, 1, 3, 2, 5]
// Output: [3, 5]
// Note:

// The order of the result is not important.So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity.Could you implement it using only constant space complexity ?

var singleNumber = function (nums) {
    var final = [];
    var obj = {};
    for (var x = 0; x < nums.length; x++) {
        var num = nums[x];
        if (obj[num] === undefined) {
            obj[num] = 1;
        } else {
            obj[num] += 1
        }
    }
    for (var key in obj) {
        if (obj[key] === 1) {
            final.push(key);
        }
    }
    return final;
};

// In LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition.Now, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition.

// You may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately.

//     Example 1:

// Input: [1, 4], 2
// Output: 4
// Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately.
// This poisoned status will last 2 seconds until the end of time point 2.
// And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds. 
// So you finally need to output 4.


// Example 2:

// Input: [1, 2], 2
// Output: 3
// Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned.
// This poisoned status will last 2 seconds until the end of time point 2.
// However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status.
// Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3. 
// So you finally need to output 3.

var findPoisonedDuration = function (timeSeries, duration) {
    if (timeSeries.length === 0) {
        return 0;
    }
    var x = 0;
    var counter = duration;
    while (x < timeSeries.length - 1) {
        var num = timeSeries[x];
        var next_num = timeSeries[x + 1];
        if (next_num < num + duration) {
            counter = counter + (next_num - num);
        } else {
            counter = counter + duration;
        }
        x++;
    }
    return counter;
};

// Given an array of integers, 1 ≤ a[i]≤ n(n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime ?

//     Example :
//     Input:
// [4, 3, 2, 7, 8, 2, 3, 1]

// Output:
// [2, 3]

var findDuplicates = function (nums) {
    var final = [];
    var obj = {};
    for (var x = 0; x < nums.length; x++) {
        var num = nums[x];
        if (obj[num] === 1) {
            obj[num] = 2;
        } else {
            obj[num] = 1;
        }
    }
    for (var key in obj) {
        if (obj[key] === 2) {
            final.push(key);
        }
    }
    return final;
};


// We are given two sentences A and B.  (A sentence is a string of space separated words.Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words.

// You may return the list in any order.

// Example 1:

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet", "sour"]
// Example 2:

// Input: A = "apple apple", B = "banana"
// Output: ["banana"]
// Note:

// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A and B both contain only spaces and lowercase letters.

var uncommonFromSentences = function (A, B) {
    var arr1 = A.split(" ");
    var arr2 = B.split(" ");
    var obj = {};
    var final = [];
    for (var x = 0; x < arr1.length; x++) {
        var word = arr1[x];
        if (obj[word] === undefined) {
            obj[word] = 1;
        } else {
            obj[word] += 1;
        }
    }
    for (var x = 0; x < arr2.length; x++) {
        var word = arr2[x];
        if (obj[word] === undefined) {
            obj[word] = 1;
        } else {
            obj[word] += 1;
        }
    }
    for (var key in obj) {
        if (obj[key] === 1) {
            final.push(key);
        }
    }
    return final;

};

var printVertically = function (s) {

};

Given a string s.Return all the words vertically in the same order in which they appear in s.
Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
Each word would be put on only one column and that in one column there will be only one word.



    Example 1:

// Input: s = "HOW ARE YOU"
// Output: ["HAY", "ORO", "WEU"]
// Explanation: Each word is printed vertically. 
//  "HAY"
// "ORO"
// "WEU"
// Example 2:

// Input: s = "TO BE OR NOT TO BE"
// Output: ["TBONTB", "OEROOE", "   T"]
// Explanation: Trailing spaces is not allowed. 
// "TBONTB"
// "OEROOE"
// "   T"
// Example 3:

// Input: s = "CONTEST IS COMING"
// Output: ["CIC", "OSO", "N M", "T I", "E N", "S G", "T"]


// Constraints:

// 1 <= s.length <= 200
// s contains only upper case English letters.
//     It's guaranteed that there is only one space between 2 words.

var printVertically = function (s) {
    var arr = s.split(" ");
    var final = new Array(arr.length);
    var counter = false;
    var counter2 = 0;
    while (counter === false) {
        var counter3 = 0;
        for (var x = 0; x < arr.length; x++) {
            if (arr[x].length - 1 >= counter2) {
                final[x] += " ";
                counter3 += 1;
            } else {
                final[x] += arr[x][counter2];
            }

        }
        if (counter3 === arr.length - 1) {
            counter === true;
        }
        counter2 += 1;

    }
    return final;
};
// X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.Each digit must be rotated - we cannot choose to leave it alone.

// A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

// Now given a positive number N, how many numbers X from 1 to N are good ?

//     Example :
//     Input: 10
// Output: 4
// Explanation:
// There are four good numbers in the range[1, 10] : 2, 5, 6, 9.
// Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
//     Note:

// N  will be in range[1, 10000].

var rotatedDigits = function (N) {
    // var counter = 0;
    // for (var x = 1; x <= N; x++) {
    //     var arr = [];
    //     if (x < 10) {
    //         if (x === 2 || x === 5 || x === 6 || x === 9) {
    //             counter += 1;
    //         }
    //     } else if (x < 100) {
    //         var single = x % 10;
    //         arr.push(single);
    //         arr.push(x - single)
    //     }

    // }
};

// We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

//     Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
//         Example:
// Input: 28
// Output: True
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// Note: The input number n will not exceed 100, 000, 000. (1e8)

var checkPerfectNumber = function (num) {
    if (num === 0) {
        return false;
    }
    var arr = [];
    var final = 0;
    for (var x = 1; x < num; x++) {
        if (num % x === 0) {
            arr.push(x);
        }
    }
    for (var x = 0; x < arr.length; x++) {
        final += arr[x];
    }
    if (final === num) {
        return true;
    }
    return false;
};

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.



//     Example 1:

// Input: [1, 2, 2, 3]
// Output: true
// Example 2:

// Input: [6, 5, 4, 4]
// Output: true
// Example 3:

// Input: [1, 3, 2]
// Output: false
// Example 4:

// Input: [1, 2, 4, 5]
// Output: true
// Example 5:

// Input: [1, 1, 1]
// Output: true


// Note:

// 1 <= A.length <= 50000
//     - 100000 <= A[i] <= 100000

var isMonotonic = function (A) {
    if (A.length > 2) {
        var less = false;
        var great = false;
        for (var x = 2; x < A.length; x++) {
            var num1 = A[0];
            var num2 = A[1];
            var num3 = A[x];
            if (num1)
        }
        return true;
    } else {
        return true;
    }
};

// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

//     Example 1:

// Input: nums = [1, 2, 3, 1], k = 3
// Output: true
// Example 2:

// Input: nums = [1, 0, 1, 1], k = 1
// Output: true
// Example 3:

// Input: nums = [1, 2, 3, 1, 2, 3], k = 2
// Output: false
var containsNearbyDuplicate = function (nums, k) {
    for (var x = 0; x < nums.length - 1; x++) {
        for (var y = x + 1; y < nums.length; y++) {
            var num1 = nums[x];
            var num2 = nums[y];
            if (num1 === num2 && Math.abs(x - y) <= k) {
                return true;
            }
        }
    }
    return false;
};

// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non - negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

//     Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
// the decimal part is truncated, 2 is returned.

var mySqrt = function (x) {
    var y = -1;
    var counter = 1;
    if (x === 1) {
        return 1;
    }
    while (y < x) {
        if (counter * counter > x) {
            return counter - 1;
        }
        counter++;
    }
};

// Given a non - negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5


// Example 2:

// Input: 3
// Output: False

var judgeSquareSum = function (c) {
    for (var y = 0; y * y <= c; y++) {
        for (var z = 0; z * z <= c; z++) {
            if (y * y + z * z === c) {
                return true;
            }
        }
    }
    return false;
};

// Count the number of prime numbers less than a non - negative number, n.

//     Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

var isPrime = function (n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2 || n === 3) {
        return true;
    }
    for (var x = 2; x < n; x++) {
        if (n % x === 0) {
            return false;
        }
    }
    return true;
}
var countPrimes = function (n) {
    var counter = 0
    for (var x = 2; x < n; x++) {
        if (isPrime(x)) {
            counter++;
        }
    }
    return counter;
};

// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not).A common subsequence of two strings is a subsequence that is common to both strings.



// If there is no common subsequence, return 0.



// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

var longestCommonSubsequence = function (text1, text2) {

    
};

// Given a non - negative integer num, repeatedly add all its digits until the result has only one digit.

//     Example:

// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
// Since 2 has only one digit, return it.

var addDigits = function (num) {
    if (num < 10) {
        return num;
    }
    var counter = 0;
    var x = num.toString();
    var z = x.split('');
    for (var y = 0; y < z.length; y++) {
        var num_string = z[y];
        var number = parseInt(num_string, 10);
        counter += number;
    }
    return addDigits(counter);
};

// In a forest, each rabbit has some color.Some subset of rabbits(possibly all of them) tell you how many other rabbits have the same color as them.Those answers are placed in an array.

// Return the minimum number of rabbits that could be in the forest.

//     Examples:
// Input: answers = [1, 1, 2]
// Output: 5
// Explanation:
// The two rabbits that answered "1" could both be the same color, say red.
// The rabbit than answered "2" can't be red or the answers would be inconsistent.
// Say the rabbit that answered "2" was blue.
// Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
// The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

// Input: answers = [10, 10, 10]
// Output: 11

// Input: answers = []
// Output: 0

var numRabbits = function (answers) {
    var counter = 0;
    var unique = {};
    for (var x = 0; x < answers.length; x++) {
        var num = answers[x];
        if (unique[num] === undefined) {
            unique[num] = 1;
            counter += (num + 1);
        } else if (unique[num] === num + 1) {
            unique[num] = 1;
            counter += (num + 1)
        } else {
            unique[num] += 1;
        }
    }

    return counter;
};