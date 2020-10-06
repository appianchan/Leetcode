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

// Given a string s.Return all the words vertically in the same order in which they appear in s.
// Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
// Each word would be put on only one column and that in one column there will be only one word.



//     Example 1:

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
    if (Math.sqrt(c) % 1 === 0) {
        return true;
    }
    var arr = [];
    for (var x = 0; x <= c; x++) {
        if (x * x > c) {
            break;
        }
        arr.push(x);
    }
    for (var x = 0; x < arr.length; x++) {
        var num1 = arr[x];
        for (var y = 0; y < arr.length; y++) {
            var num2 = arr[y];
            if (num1 * num1 + num2 * num2 === c) {
                return true
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
    var y = 0;
    var returnlength = 0;
    var counter = 0;
    for (var x = 0; x < text1.length; x++) {
        var a1 = text1[x];
        y = counter;
        while (y < text2.length) {
            var a2 = text2[y];
            if (a2 === a1) {
                returnlength += 1;
                counter = y + 1;
                break;
            }
            y++;
        }


    }
    return returnlength;

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

// Given an array of integers A sorted in non - decreasing order, return an array of the squares of each number, also in sorted non - decreasing order.



//     Example 1:

// Input: [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]
// Example 2:

// Input: [-7, -3, 2, 3, 11]
// Output: [4, 9, 9, 49, 121]

var sortedSquares = function (A) {
    var final = [];
    for (var x = 0; x < A.length; x++) {
        final.push(A[x] * A[x]);
    }
    // var counter = false;
    // while(counter = false){
    //     counter = true;
    //     for(var x = 0; x < final.length - 1; x++){
    //         var num = final[x];
    //         var num2 = final[x + 1];
    //         if(num2 < num){
    //             counter = false;
    //             final = final.slice(0, x) + [num2] + [num] + final.slice(x + 2, final.length);
    //         }
    //     }
    // }
    final.sort((a, b) => a - b);
    return final;
};

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Note:

// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function (nums) {
    var counter = 0;
    for (var x = 0; x < nums.length; x++) {
        if (nums[x] === 0) {
            counter += 1;
        }
    }
    var y = 0;
    while (y < nums.length) {
        if (counter === 0) {
            break;
        }
        var num = nums[y];
        if (num === 0) {
            nums.splice(y, 1);
            nums.push(0);
            counter--;
            continue;
        }
        y++;
    }
    return nums;
};

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.



// Example 1:

// Input: arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
// Output: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]


// Constraints:

// arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// Each arr2[i] is distinct.
// Each arr2[i] is in arr1.

var relativeSortArray = function (arr1, arr2) {
    var final = [];
    var leftovers = [];
    for (var x = 0; x < arr2.length; x++) {
        var num2 = arr2[x];
        for (var y = 0; y < arr1.length; y++) {
            var num1 = arr1[y];
            if (num2 === num1) {
                final.push(num1);
            }
        }
    }
    for (var x = 0; x < arr1.length; x++) {
        if (arr2.includes(arr1[x]) === false) {
            leftovers.push(arr1[x]);
        }
    }

    return final.concat(leftovers.sort((a, b) => a - b));
};

// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list(including duplicates).For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.



//     Example 1:

// Input: ["bella", "label", "roller"]
// Output: ["e", "l", "l"]
// Example 2:

// Input: ["cool", "lock", "cook"]
// Output: ["c", "o"]


// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

var commonChars = function (A) {
    var first = A.shift();
    first = first.split("");
    var arr = [];
    for (var x = 0; x < first.length; x++) {
        var letter = first[x];
        var counter = false;
        for (var y = 0; y < A.length; y++) {
            var word = A[y].split("");
            if (!word.includes(letter)) {
                counter = true;
                break;
            }
            // else{
            //     A[y] = word.splice(word.indexOf(letter), 1).join();
            // }
        }
        if (counter === false) {
            arr.push(letter);
            for (var z = 0; z < A.length; z++) {
                var word = A[z];
                A[z] = A[z].replace(letter, '')
            }
        }
        counter = false;
    }
    return arr;

};
// Given a function f(x, y) and a value z, return all positive integer pairs x and y where f(x, y) == z.

// The function is constantly increasing, i.e.:

// f(x, y) < f(x + 1, y)
// f(x, y) < f(x, y + 1)
// The function interface is defined like this:

// interface CustomFunction {
//     public:
//     // Returns positive integer f(x, y) for any given positive integer x and y.
//     int f(int x, int y);
// };
// For custom testing purposes you're given an integer function_id and a target z as input, where function_id represent one function from an secret internal list, on the examples you'll know only two functions from the list.

// You may return the solutions in any order.



//     Example 1:

// Input: function_id = 1, z = 5
// Output: [[1, 4], [2, 3], [3, 2], [4, 1]]
// Explanation: function_id = 1 means that f(x, y) = x + y
// Example 2:

// Input: function_id = 2, z = 5
// Output: [[1, 5], [5, 1]]
// Explanation: function_id = 2 means that f(x, y) = x * y

var findSolution = function (customfunction, z) {

};


// Every email consists of a local name and a domain name, separated by the @sign.

// For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

// Besides lowercase letters, these emails may contain '.'s or '+'s.

// If you add periods('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

//     If you add a plus('+') in the local name, everything after the first plus sign will be ignored.This allows certain emails to be filtered, for example m.y + name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

//     It is possible to use both of these rules at the same time.

// Given a list of emails, we send one email to each address in the list.How many different addresses actually receive mails ?



//     Example 1:

// Input: ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

var numUniqueEmails = function (emails) {
    var final = [];
    for (var x = 0; x < emails.length; x++) {
        var emailz = emails[x];
        emailz = emailz.split("@");
        var local = emailz[0];
        var domain = emailz[1];
        local = local.split(".").join("");
        if (local.search("/+/") !== -1) {
            var n = local.search("/+/");
            local = local.slice(0, n);
        }
        domain = domain.split(".").join("");
        emailz.join("@");
        final.push(emailz);
    }
    return Array.from(new Set(final));
};

// Given an array A of non - negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.



//     Example 1:

// Input: [4, 2, 5, 7]
// Output: [4, 5, 2, 7]
// Explanation: [4, 7, 2, 5], [2, 5, 4, 7], [2, 7, 4, 5] would also have been accepted.


var sortArrayByParityII = function (A) {
    var true_length = A.length;
    var final = [];
    var i = 0;
    while (A.length !== 0) {
        if (i % 2 === 0) {
            for (var x = 0; x < A.length; x++) {
                if (A[x] % 2 === 0) {
                    final.push(A[x]);
                    A.splice(x, 1);
                    break;
                }
            }
        } else {
            for (var x = 0; x < A.length; x++) {
                if (A[x] % 2 !== 0) {
                    final.push(A[x]);
                    A.splice(x, 1);
                    break;
                }
            }
        }
        i++;
    }
    return final;
};

// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

//     Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

var shortestToChar = function (S, C) {
    var shortestToChar = function (S, C) {
        var final = [];
        for (var x = 0; x < S.length; x++) {

            var char = S[x];
            if (char === C) {
                final.push(0);
                continue;
            }
            var backchar = null;
            var forwardchar = null;
            for (var y = x + 1; y < S.length; y++) {
                var char2 = S[y];
                if (char2 === C) {
                    forwardchar = y - x;
                    break;
                }
            }
            for (var z = x - 1; z >= 0; z--) {
                var char3 = S[z];
                if (char3 === C) {
                    backchar = x - z;
                    break;
                }
            }
            if (forwardchar === null) {
                final.push(backchar);
                continue;
            }
            if (backchar === null) {
                final.push(forwardchar);
                continue;
            }
            if (forwardchar <= backchar) {
                final.push(forwardchar);
                continue;
            }
            if (forwardchar > backchar) {
                final.push(backchar);
                continue;
            }
        }
        return final;
    };
};

// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair[a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr


// Example 1:

// Input: arr = [4, 2, 1, 3]
// Output: [[1, 2], [2, 3], [3, 4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
//     Example 2:

// Input: arr = [1, 3, 6, 10, 15]
// Output: [[1, 3]]
// Example 3:

// Input: arr = [3, 8, -10, 23, 19, -4, -14, 27]
// Output: [[-14, -10], [19, 23], [23, 27]]

var minimumAbsDifference = function (arr) {
    var final = [];
    arr = arr.sort((a, b) => a - b);
    var difference = null;
    for (var x = 0; x < arr.length - 1; x++) {
        var num1 = arr[x];
        for (var y = x + 1; y < arr.length; y++) {
            var num2 = arr[y];
            if (difference === null) {
                difference = (num2 - num1);
                final.push([num1, num2]);
            } else {
                if (num2 - num1 < difference) {
                    final = [];
                    difference = num2 - num1;
                    final.push([num1, num2]);
                } else if (num2 - num1 === difference) {
                    final.push([num1, num2]);
                }
            }
        }
    }
    return final;
};

// Given an array arr.You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.



//     Example 1:

// Input: arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7]
// Output: 2
// Explanation: Choosing { 3, 7 } will make the new array[5, 5, 5, 2, 2] which has size 5(i.e equal to half of the size of the old array).
// Possible sets of size 2 are { 3, 5 }, { 3, 2 }, { 5, 2 }.
// Choosing set { 2, 7 } is not possible as it will make the new array[3, 3, 3, 3, 5, 5, 5] which has size greater than half of the size of the old array.
//     Example 2:

// Input: arr = [7, 7, 7, 7, 7, 7]
// Output: 1
// Explanation: The only possible set you can choose is { 7 }.This will make the new array empty.
//     Example 3:

// Input: arr = [1, 9]
// Output: 1
// Example 4:

// Input: arr = [1000, 1000, 3, 7]
// Output: 1
// Example 5:

// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: 5

var minSetSize = function (arr) {

};

// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.



//     Example 1:

// Input: matrix =
//     [
//         [0, 1, 1, 1],
//         [1, 1, 1, 1],
//         [0, 1, 1, 1]
//     ]
// Output: 15
// Explanation:
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.
// Example 2:

// Input: matrix =
//     [
//         [1, 0, 1],
//         [1, 1, 0],
//         [1, 1, 0]
//     ]
// Output: 7
// Explanation:
// There are 6 squares of side 1.
// There is 1 square of side 2.
// Total number of squares = 6 + 1 = 7.


// Constraints:

// 1 <= arr.length <= 300
// 1 <= arr[0].length <= 300
// 0 <= arr[i][j] <= 1
var countSquares = function (matrix) {

};

// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

//     Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

var reverseWords = function (s) {
    var y = [];
    s = s.split(" ");
    for (var x = 0; x < s.length; x++) {
        var word = s[x];
        var new_word = "";
        for (var z = word.length - 1; z >= 0; z--) {
            new_word = new_word + word[z];
            if (z === 0) {
                // new_word = new_word + word[z];
                y.push(new_word);
            }
        }

    }
    return y.join(" ");
};
// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array.If there are multiple lucky integers return the largest of them.If there is no lucky integer return -1.



// Example 1:

// Input: arr = [2, 2, 3, 4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1, 2, 2, 3, 3, 3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
//     Example 3:

// Input: arr = [2, 2, 2, 3, 3]
// Output: -1
// Explanation: There are no lucky numbers in the array.
//     Example 4:

// Input: arr = [5]
// Output: -1
// Example 5:

// Input: arr = [7, 7, 7, 7, 7, 7, 7]
// Output: 7

var findLucky = function (arr) {
    var obj = {};
    for (var x = 0; x < arr.length; x++) {
        var num = arr[x];
        if (obj[num] === undefined) {
            obj[num] = 1;
        } else {
            obj[num] += 1;
        }

    }
    var arr = [];
    for (var key in obj) {
        // return key !== obj[key];
        if (key == obj[key]) {
            arr.push(obj[key]);
        }
    }
    if (arr.length !== 0) {
        return arr[arr.length - 1]
    }
    return -1;
};

// Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

// After this process, we have some array B.

// Return the smallest possible difference between the maximum value of B and the minimum value of B.



//     Example 1:

// Input: A = [1], K = 0
// Output: 0
// Explanation: B = [1]
// Example 2:

// Input: A = [0, 10], K = 2
// Output: 6
// Explanation: B = [2, 8]
// Example 3:

// Input: A = [1, 3, 6], K = 3
// Output: 0
// Explanation: B = [3, 3, 3] or B = [4, 4, 4]
var smallestRangeI = function (A, K) {
    if (A.length === 1) {
        return 0;
    }
    A.sort((a, b) => a - b)
    var num = A[A.length - 1] - A[0] - K * 2;
    if (num < 0) {
        return 0;
    }
    return num;

};

// ZigZag Conversion
// Medium
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//     P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I
var zigzag = function(string, numRows){
    var z = "";
    for (var y = 0; y < numRows; y++) {
        Var a = y;
        while (y < string.length) {
            Z += string[y];
            Y = y + (numRows - 1) + (numRows - 1);
        }
        Y = a;
    }
    Return z;

}


// Reverse Integer
// Easy
// Given a 32 - bit signed integer, reverse digits of an integer.
//     Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers within the 32 - bit signed integer range: [−231, 231 − 1].For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function (x) {
    if (x === 0) {
        return 0;
    }
    var negative = false
    if (x < 0) {
        negative = true;
        x = x * -1
    }
    var a = x.toString();

    var arr = a.split("");
    // return arr;
    var final = [];
    var counter = 0;
    for (var x = arr.length - 1; x >= 0; x--) {
        if (arr[arr.length - 1] === '0' && counter === 0 && arr[x - 1] !== '0') {
            counter = 1;
            continue;
        } else {
            final.push(arr[x]);
        }
    }
    // arr = arr.reverse();
    final = final.join("");
    var number = parseInt(final, 10);
    if (negative === false && number < 2147483647) {
        return number;
    } else if (negative === true && (number * -1) > -2147483648) {
        return number * -1;
    } else {
        return 0;
    }

};

var maxArea = function (height) {
    var highest = 0;
    for (var x = 0; x < height.length - 1; x++) {
        var num1 = height[x];
        for (var y = x + 1; y < height.length; y++) {
            var num2 = height[y];
            if (num1 > num2) {
                // final.push(num2 * (y - x));
                if (highest < num2 * (y - x)) {
                    highest = num2 * (y - x);
                }
            } else {
                // final.push(num1 * (y - x));
                if (highest < num1 * (y - x)) {
                    highest = num1 * (y - x);
                }
            }
        }
    }
    return highest;
};

// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" }.



// Example 1:

// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"
// Example 2:

// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"
// Example 3:

// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"

var dayOfTheWeek = function (day, month, year) {
    var date = new Date(month + " " + day + ", " + year + " 00:00:00");
    var num = date.getDay();
    if (num === 0) {
        return "Sunday";
    }
    if (num === 1) {
        return "Monday";
    }
    if (num === 2) {
        return "Tuesday";
    }
    if (num === 3) {
        return "Wednesday";
    }
    if (num === 4) {
        return "Thursday";
    }
    if (num === 5) {
        return "Friday";
    }
    if (num === 6) {
        return "Saturday";
    }


};

// Write a function, `anagrams(str1, str2)`, that takes in two words and returns
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false
function anagrams(str1, str2) {
    const letters = {};

    str1.split("").forEach(char => {
        if (!letters[char]) letters[char] = 0;
        letters[char] += 1;
    });

    str2.split("").forEach(char => {
        if (!letters[char]) letters[char] = 0;
        letters[char] -= 1;
    });

    return Object.values(letters).every(letterCount => letterCount === 0);
}


// You've given an array of integers where each integer represents a jump of it's value in the array. 
// For instanceof, the integer 2 represents a jump of two indices forward in the array; the integer -3 represents a jump of three indices backward in the array. 

// If a jump spills past the array bounds, it wraps over the other SVGAnimatedEnumeration. For instanceof, a jump of -1 at index 0 brings us to the
// last index in the array. Similarly, a jump of 1 at the last index in the array brings us to the index 0. 

// Write a function that returns a boolean representing whether the jumps in the array form a 
// single containsNearbyDuplicate. A single cycle occurs if, starting at any index in the array and following 
// the jumps, every element in the array is visited exactly once before landing back ont he starting index.reverse

// Sample input:
// array = [2, 3, 1, -4, -4, 2]

// sample output:
// true

function hasSingleCycle(array){
    let numElementsVisited = 0;
    let currentIdx = 0;
    while(numElementsVisited < array.length){
        if(numElementsVisited > 0 && currentIdx === 0) return false;
        numElementsVisited++;
        currentIdx = getNextIdx(currentIdx, array);
    }
    return currentIdx === 0;
}

function getNextIdx(currentIdx, array){
    const jump = array[currentIdx];
    const nextIdx = (currentIdx + jump) % array.length;
    return nextIdx >= 0 ? nextIdx + array.length;
}

// Write a function that takes in an array of integers and returns a sorted version of that array. 
// Use the Insertion Sort algorithm to sort the array. 

// Sample Input
// array = [8, 5, 2, 9, 5, 6, 3];

// Sample Output
// [2, 3, 5, 5, 6, 8, 9]

function insertion_sort(array){
    for (var x = 0; x < array.length; x++) {
        var number = array[x];
        array.splice(x, 1); //remove number from array
        for (var y = 0; y < array.length; y++) {
            if (number < array[y]) {
                if (number > array[y + 1]) {
                    array.splice(y, 0, number); //insert number back in
					break;
                }
            }
        }
    }
    return array;

}

// Write a function that takes in an array of strings and groups anagrams together.reverse

// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman"
// are anagrams; similarly, "foo" and "ofo" are anagrams. 

// Your function should return a list of anagram groups in no particular order.reverse


// Sample Input
// words = ["yo", "act", "flop", "tac", "cat", "oy", "olfp"]

// Sample Output
// [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"]]

function groupAnagrams(words){
    const anagrams = {};
    for(const word of words){
        const sortedWord = word.split('').sort().join('');
        if(sortWord in anagrams){
            anagrams[sortedWord].push(word);     
        } else {
            anagrams[sortedWord] = [word];
        }
    }
    return Object.values(anagrams);
}

// I give you a scrambled list of n unique integers between 0 and n. Tell me what number is missing. 
function ordernumbers(arr){
    arr.sort((a, b) => a-b);
    for(var x = 0; x < arr.length; x++){
        var num = arr[x];
        if(num !== x + 1){
            return (x + 1);
        }
    }
}

// Write a function that takes in the head of a Singly Linked List. The function should reverse the list 
// and return its new head. Note that every node in the Singly Linked List has a "value" property storing its value 
// as well as a "next" property pointing to the next node in the list or None(null) if it is the tail of the list

function reverseLinkedList(head){
    let p1 = null;
    let p2 = head;
    while(p2 !== null){
        const p3 = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = p3;
    }
    return p1;
}

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.
//     Note:
// The solution set must not contain duplicate triplets.
//     Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

//     A solution set is:
// [
//     [-1, 0, 1],
//     [-1, -1, 2]
// ]
function sets(arr){
    var arr = [];
    for (var x = 0; x < nums.length; x++) {
        for (var y = x + 1; y < nums.length; y++) {
            for (var z = y + 1; z < nums.length; z++) {
                if (nums[x] + nums[y] + nums[z] = 0) {
                    var subset = [num[x], num[y], num[z]].sort((a, b) a - b);
                    arr.push(subset);
                }
            }
        }
    }
    return arr;

}

// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in -place.
//     Example 1:
// Input:
// [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
// ]
// Output:
// [
//     [1, 0, 1],
//     [0, 0, 0],
//     [1, 0, 1]
// ]

// Example 2:
// Input:
// [
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5]
// ]
// Output:
// [
//     [0, 0, 0, 0],
//     [0, 4, 5, 0],
//     [0, 3, 1, 0]
// ]

function arrayto0(array){
    var zeros = [];
    for (var y = 0; y < array.length; y++) {
        var row = array[y];
        for (var x = 0; x < row.length; x++) {
            if (row[x] === 0) {
                zeros.push([x, y]);
            }
        }
    }
    var row_length = array[0].length;
    var column_length = array.length;
    for (var z = 0; z < zeros.length; z++) {
        var position = zeros[z];
        var position_y = position[1];
        for (var x = 0; x < row_length.length; x++) {
            array[x][position_y] = 0
        }

    }
    for (var z = 0; z < zeros.length; z++) {
        var position = zeros[z];
        var position_x = position[0];
        for (var y = 0; y < column_length.length; y++) {
            array[position_x][y] = 0
        }

    }
    return array;
}

// Given an array nums containing n + 1 integers where each integer is between 1 and n(inclusive), prove that at least one duplicate number must exist.Assume that there is only one duplicate number, find the duplicate one.

//     Example 1:

// Input: [1, 3, 4, 2, 2]
// Output: 2
// Example 2:

// Input: [3, 1, 3, 4, 2]
// Output: 3
var findDuplicate = function (nums) {
    var obj = {};
    for (var x = 0; x < nums.length; x++) {
        var num = nums[x];
        if (!obj[num]) {
            obj[num] = 1
        } else {
            obj[num] += 1
        }
    }
    for (var key in obj) {
        if (obj[key] >= 2) {
            return key
        }
    }
};
// Given a string s and a non - empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20, 100.

// The order of output does not matter.

//     Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
//     Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
var findAnagrams = function (s, p) {
    var final = [];
    var anagrams = {};
    for (var x = 0; x < p.length; x++) {
        var letter = p[x];
        if (!anagrams[letter]) {
            anagrams[letter] = 1
        } else {
            anagrams[letter] += 1
        }
    }

    for (var y = 0; y < s.length - p.length; y++) {
        var anagrams2 = {};
        for (var z = y; z < y + p.length; z++) {
            var letter = s[z];
            if (!anagrams2[letter]) {
                anagrams2[letter] = 1
            } else {
                anagrams2[letter] += 1
            }
        }
        if (JSON.stringify(anagrams) === JSON.stringify(anagrams2)) {
            final.push(y);

        }
    }
    return final;
};

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

//     Example 1:

// Input: [1, 2, 3, 1]
// Output: true
// Example 2:

// Input: [1, 2, 3, 4]
// Output: false
// Example 3:

// Input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true
var containsDuplicate = function (nums) {
    var obj = {};
    for (var x = 0; x < nums.length; x++) {
        var num = nums[x];
        if (!obj[num]) {
            obj[num] = 1
        } else {
            obj[num] += 1
        }
    }
    for (var key in obj) {
        if (obj[key] >= 2) {
            return true
        }
    }
    return false;
};


// Given a string, find the first non - repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

var firstUniqChar = function (s) {
    if (s.length === 0) {
        return -1;
    }
    if (s.length === 1) {
        return 0;
    }
    var counter = 0;
    while (s.length > 1) {
        var letter = s[0];
        s = s.slice(1, -1);
        if (s.search(letter) === -1) {
            return counter;
        }
        counter++;
    }
    return -1;
};

// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

//     Example:

// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.

var findTheDifference = function (s, t) {
    var obj1 = {};
    var obj2 = {};
    for (var x = 0; x < t.length; x++) {
        var letter1 = t[x];
        if (!obj1[letter1]) {
            obj1[letter1] = 1;
        } else {
            obj1[letter1] += 1;
        }
    }
    for (var y = 0; y < s.length; y++) {
        var letter2 = s[y];
        obj1[letter2] -= 1;

    }
    for (var key in obj1) {
        if (obj1[key] !== 0) {
            return key;
        }
    }
};

// Given a non - negative integer num, return the number of steps to reduce it to zero.If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.



//     Example 1:

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12

var numberOfSteps = function (num) {
    var counter = 0;
    while (num !== 0) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num -= 1;
        }
        counter++;
    }
    return counter;
};

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters.Letters are case sensitive, so "a" is considered a different type of stone from "A".

//     Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0

var numJewelsInStones = function (J, S) {
    var compare = [];
    var counter = 0;
    for (var x = 0; x < J.length; x++) {
        compare.push(J[x]);
    }
    for (var y = 0; y < S.length; y++) {
        var letter = S[y];
        if (compare.includes(letter)) {
            counter++;
        }
    }
    return counter;
};

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.



//     Example 1:

// Input: nums = [8, 1, 2, 2, 3]
// Output: [4, 0, 1, 1, 3]
// Explanation:
// For nums[0] = 8 there exist four smaller numbers than it(1, 2, 2 and 3).
// For nums[1] = 1 does not exist any smaller number than it.
// For nums[2] = 2 there exist one smaller number than it(1).
// For nums[3] = 2 there exist one smaller number than it(1).
// For nums[4] = 3 there exist three smaller numbers than it(1, 2 and 2).
//     Example 2:

// Input: nums = [6, 5, 4, 8]
// Output: [2, 1, 0, 3]
// Example 3:

// Input: nums = [7, 7, 7, 7]
// Output: [0, 0, 0, 0]
var smallerNumbersThanCurrent = function (nums) {
    var arr = [];
    for (var x = 0; x < nums.length; x++) {
        var current_number = nums[x];
        var counter = 0;
        for (var y = 0; y < nums.length; y++) {
            var compare = nums[y];
            if (current_number > compare) {
                counter++;
            }
        }
        arr.push(counter);
    }
    return arr;
};


// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


//     Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

// Constraints:

// 1 <= n <= 10 ^ 5

var subtractProductAndSum = function (n) {
    var sum = 0;
    var product = 1;
    var num = 0;
    var test_for_zero = n;
    test_for_zero = test_for_zero.toString();
    test_for_zero.split();
    for (var x = 0; x < test_for_zero.length; x++) {
        if (test_for_zero[x] === "0") {
            product = product * 0;
            break;
        }
    }
    if (n % 100000 !== n) {
        num = (n - n % 100000) / 100000;
        sum = sum + num;
        product = product * num;
        n = n % 100000;
    }
    if (n % 10000 !== n) {
        num = (n - n % 10000) / 10000;
        sum = sum + num;
        product = product * num;
        n = n % 10000;
    }
    if (n % 1000 !== n) {
        num = (n - n % 1000) / 1000;
        sum = sum + num;
        product = product * num;
        n = n % 1000;
    }
    if (n % 100 !== n) {
        num = (n - n % 100) / 100;
        sum = sum + num;
        product = product * num;
        n = n % 100;
    }
    if (n % 10 !== n) {
        num = (n - n % 10) / 10;
        sum = sum + num;
        product = product * num;
        n = n % 10;
    }
    sum = sum + n;
    product = product * n;

    var difference = product - sum;
    return (difference);

};

// Given two arrays of integers nums and index.Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.



//     Example 1:

// Input: nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1]
// Output: [0, 4, 1, 3, 2]
// Explanation:
// nums       index     target
// 0            0[0]
// 1            1[0, 1]
// 2            2[0, 1, 2]
// 3            2[0, 1, 3, 2]
// 4            1[0, 4, 1, 3, 2]
// Example 2:

// Input: nums = [1, 2, 3, 4, 0], index = [0, 1, 2, 3, 0]
// Output: [0, 1, 2, 3, 4]
// Explanation:
// nums       index     target
// 1            0[1]
// 2            1[1, 2]
// 3            2[1, 2, 3]
// 4            3[1, 2, 3, 4]
// 0            0[0, 1, 2, 3, 4]
// Example 3:

// Input: nums = [1], index = [0]
// Output: [1]


// Constraints:

// 1 <= nums.length, index.length <= 100
// nums.length == index.length
// 0 <= nums[i] <= 100
// 0 <= index[i] <= i

var createTargetArray = function (nums, index) {
    var target = [];
    for (var x = 0; x < nums.length; x++) {
        target.splice(index[x], 0, nums[x]);
    }
    return target;
};

// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.
Array.prototype.myReduce = function (callback, acc) {
    const array = this.slice();
    if (typeof acc === 'undefined') {
        acc = array.shift();
    }

    array.myEach(el => {
        acc = callback(acc, el);
    });

    return acc;
};
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 
var shuffle = function(nums, n) {
    var final = [];
    for(var x = 0; x < nums.length - n; x++){
        final.push(nums[x]);
        final.push(nums[x + n]);
    }
    return final;
};
// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

var balancedStringSplit = function(s) {
    var l_counter = 0;
    var r_counter = 0;
    var final = 0;
    s.split();
    for(var x = 0; x < s.length; x++){
        var char = s[x];
        if(char === "L"){
            l_counter++;
        }
        if(char === "R"){
            r_counter++;
        }
        if(l_counter === r_counter ){
            final++;
            l_counter = 0;
            r_counter = 0;
        }
    }
    return final;
};

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.
var runningSum = function (nums) {
    var final = [];
    var counter = 0;
    for (var x = 0; x < nums.length; x++) {
        counter = counter + nums[x];
        final.push(counter);

    }
    return final;
};

// Given the array of integers nums, you will choose two different indices i and j of that array.Return the maximum value of(nums[i] - 1) * (nums[j] - 1).


//     Example 1:

// Input: nums = [3, 4, 5, 2]
// Output: 12
// Explanation: If you choose the indices i = 1 and j = 2(indexed from 0), you will get the maximum value, that is, (nums[1] - 1) * (nums[2] - 1) = (4 - 1) * (5 - 1) = 3 * 4 = 12.
// Example 2:

// Input: nums = [1, 5, 4, 5]
// Output: 16
// Explanation: Choosing the indices i = 1 and j = 3(indexed from 0), you will get the maximum value of(5 - 1) * (5 - 1) = 16.
// Example 3:

// Input: nums = [3, 7]
// Output: 12

var maxProduct = function (nums) {
    nums.sort((a, b) => a - b);
    var x = nums.length - 1;
    return (nums[x] - 1) * (nums[x - 1] - 1);
};

// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them.Notice that multiple kids can have the greatest number of candies.

var kidsWithCandies = function (candies, extraCandies) {
    var final = [];
    var largest = 0;
    for (var x = 0; x < candies.length; x++) {
        if (largest < candies[x]) {
            largest = candies[x];
        }
    }
    for (var x = 0; x < candies.length; x++) {
        if (candies[x] + extraCandies >= largest) {
            final.push(true);
        } else {
            final.push(false);
        }

    }
    return final;
};

// Given a m * n matrix grid which is sorted in non - increasing order both row - wise and column - wise.

// Return the number of negative numbers in grid.

var countNegatives = function (grid) {
    var final = 0;
    for (var x = 0; x < grid.length; x++) {
        for (var y = 0; y < grid[x].length; y++) {
            if (grid[x][y] < 0) {
                final++;
            }
        }
    }
    return final;
};

// Given a set of distinct integers, nums, return all possible subsets(the power set).

//     Note: The solution set must not contain duplicate subsets.

//         Example:

// Input: nums = [1, 2, 3]
// Output:
// [
//     [3],
//     [1],
//     [2],
//     [1, 2, 3],
//     [1, 3],
//     [2, 3],
//     [1, 2],
//     []
// ]

// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
// Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"

var toLowerCase = function (str) {
    return str.toLowerCase();
};

// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example 1:

// Input: 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
// Example 3:

// Input: 14
// Output: false
// Explanation: 14 is not ugly since it includes another prime factor 7.
var isUgly = function (num) {
    if (num <= 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }
    var number = [];
    while (num !== 2 && num !== 3 && num !== 5) {
        if (num % 2 === 0) {
            num = num / 2;
            continue;
        }
        if (num % 3 === 0) {
            num /= 3;
            continue;
        }
        if (num % 5 === 0) {
            num /= 5;
            continue;
        }
        return false;
    }
    return true;
};


// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

//     Note:

// Your returned answers(both index1 and index2) are not zero - based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
//     Example:

// Input: numbers = [2, 7, 11, 15], target = 9
// Output: [1, 2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

var twoSum = function (numbers, target) {
    for (var x = 0; x < numbers.length; x++) {
        for (var y = x + 1; y < numbers.length; y++) {
            var num1 = numbers[x];
            var num2 = numbers[y];
            if (num1 + num2 === target) {
                return [x + 1, y + 1];
            }
        }
    }
};

// Write a program to find the n - th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example:

// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
//     Note:

// 1 is typically treated as an ugly number.
// n does not exceed 1690.

var isUgly = function (num) {
    if (num <= 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }
    var number = [];
    while (num !== 2 && num !== 3 && num !== 5) {
        if (num % 2 === 0) {
            num = num / 2;
            continue;
        }
        if (num % 3 === 0) {
            num /= 3;
            continue;
        }
        if (num % 5 === 0) {
            num /= 5;
            continue;
        }
        return false;
    }
    return true;
};
var nthUglyNumber = function (n) {
    var counter = 0;
    var stepper = 1
    while (counter <= n) {
        if (isUgly(stepper) === true) {
            counter++;
        }
        if (counter === n) {
            return stepper;
        }
        stepper++;

    }
};

// Given an array A of non - negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.



//     Example 1:

// Input: [3, 1, 2, 4]
// Output: [2, 4, 3, 1]
// The outputs[4, 2, 3, 1], [2, 4, 1, 3], and[4, 2, 1, 3] would also be accepted.


//     Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

var sortArrayByParity = function (A) {
    var arr = [];
    for (var x = 0; x < A.length; x++) {
        var num = A[x];
        if (num % 2 === 1) {
            arr.push(num);
        } else {
            arr.unshift(num);
        }
    }
    return arr;
};

// Students are asked to stand in non - decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non - decreasing order of height.

// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

var heightChecker = function (heights) {
    var counter = 0;

    var final = [...heights];
    final.sort((a, b) => a - b);

    for (var x = 0; x < final.length; x++) {
        if (heights[x] !== final[x]) {
            counter = counter + 1;
        }
    }
    return counter;
    
};

// Given an array of integers where 1 ≤ a[i]≤ n(n = size of array), some elements appear twice and others appear once.

// Find all the elements of[1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime ? You may assume the returned list does not count as extra space.

//     Example:

// Input:
// [4, 3, 2, 7, 8, 2, 3, 1]

// Output:
// [5, 6]
var findDisappearedNumbers = function (nums) {
    var final = [];
    for (var x = 1; x <= nums.length; x++) {
        if (!nums.includes(x)) {
            final.push(x);
        }
    }
    return final;
};

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

//     Example 1:

// Input: [3, 0, 1]
// Output: 2
// Example 2:

// Input: [9, 6, 4, 2, 3, 5, 7, 0, 1]
// Output: 8

var missingNumber = function (nums) {
    var x = 0;
    while (x > -1) {
        if (!nums.includes(x)) {
            return x;
        }
        x++;
    }
};

// For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

// 1. The area of the rectangular web page you designed must equal to the given target area.

// 2. The width W should not be larger than the length L, which means L >= W.

// 3. The difference between length L and width W should be as small as possible.
// You need to output the length L and the width W of the web page you designed in sequence.
//     Example:
// Input: 4
// Output: [2, 2]
// Explanation: The target area is 4, and all the possible ways to construct it are[1, 4], [2, 2], [4, 1].
// But according to requirement 2, [1, 4] is illegal; according to requirement 3, [4, 1] is not optimal compared to[2, 2].So the length L is 2, and the width W is 2.

var constructRectangle = function (area) {
    var final = [];
    for (var x = 1; x <= area; x++) {
        if (area % x === 0) {
            final.push([x, area / x])
        }
    }

    var smallest = area - 1;
    var final_answer = 0;
    for (var y = 0; y < final.length; y++) {
        var arr = final[y];
        if (arr[0] < arr[1]) {
            continue;
        }
        if (smallest >= (arr[0] - arr[1])) {
            smallest = arr[0] - arr[1];
            final_answer = arr;
        }
    }
    return final_answer;
};

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.



//     Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function (ransomNote, magazine) {
    var obj1 = {};
    var obj2 = {};
    for (var x = 0; x < ransomNote.length; x++) {
        var letter = ransomNote[x];
        if (obj1[letter] === undefined) {
            obj1[letter] = 1;
        } else {
            obj1[letter] += 1;
        }

    }
    for (var x = 0; x < magazine.length; x++) {
        var letter = magazine[x];
        if (obj2[letter] === undefined) {
            obj2[letter] = 1;
        } else {
            obj2[letter] += 1;
        }
        // if(obj1[letter] === undefined){
        //     continue;
        // }
        // obj1[letter] -= 1;
        // if(obj1 === {}){
        //     return true;
        // }
    }
    for (var letter in obj1) {
        if (obj2[letter] === undefined || obj1[letter] > obj2[letter]) {
            return false
        }
    }
    return true;
};

// Given an array of integers nums.

// A pair(i, j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.



//     Example 1:

// Input: nums = [1, 2, 3, 1, 1, 3]
// Output: 4
// Explanation: There are 4 good pairs(0, 3), (0, 4), (3, 4), (2, 5) 0 - indexed.
//     Example 2:

// Input: nums = [1, 1, 1, 1]
// Output: 6
// Explanation: Each pair in the array are good.
//     Example 3:

// Input: nums = [1, 2, 3]
// Output: 0

var numIdenticalPairs = function (nums) {
    var final = 0;
    for (var x = 0; x < nums.length; x++) {
        for (var y = x + 1; y < nums.length; y++) {
            if (nums[x] === nums[y]) {
                final++;
            }
        }
    }
    return final;
};

// Given the array prices where prices[i] is the price of the ith item in a shop.There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

// Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.



//     Example 1:

// Input: prices = [8, 4, 6, 2, 3]
// Output: [4, 2, 4, 2, 3]
// Explanation:
// For item 0 with price[0] = 8 you will receive a discount equivalent to prices[1] = 4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1] = 4 you will receive a discount equivalent to prices[3] = 2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2] = 6 you will receive a discount equivalent to prices[3] = 2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.
//     Example 2:

// Input: prices = [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4, 5]
// Explanation: In this case, for all items, you will not receive any discount at all.
//     Example 3:

// Input: prices = [10, 1, 1, 6]
// Output: [9, 0, 1, 6]
var finalPrices = function (prices) {
    var final = [];
    for (var x = 0; x < prices.length; x++) {
        var num1 = prices[x];
        var counter = false;
        for (var y = x + 1; y < prices.length; y++) {
            var num2 = prices[y];
            if (num1 >= num2) {
                final.push(num1 - num2);
                counter = true;
                break;
            }
        }
        if (counter === true) {
            counter = false;
        } else {
            final.push(num1)
        }
    }
    return final;
};

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.



//     Example 1:

// Input: paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city.Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
//     Example 2:

// Input: paths = [["B", "C"], ["D", "B"], ["C", "A"]]
// Output: "A"
// Explanation: All possible trips are:
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A".
// Clearly the destination city is "A".
//     Example 3:

// Input: paths = [["A", "Z"]]
// Output: "Z"


// Constraints:

// 1 <= paths.length <= 100
// paths[i].length == 2
// 1 <= cityAi.length, cityBi.length <= 10
// cityAi != cityBi
// All strings consist of lowercase and uppercase English letters and the space character.

var destCity = function (paths) {
    var start = [];
    var end = [];
    for (var x = 0; x < paths.length; x++) {
        start.push(paths[x][0]);
    }
    for (var x = 0; x < paths.length; x++) {
        end.push(paths[x][1]);
    }
    for (var x = 0; x < end.length; x++) {
        var place = end[x];
        if (start.includes(place)) {
            continue;
        } else {
            return place;
        }
    }
};

// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit(6 becomes 9, and 9 becomes 6).



//     Example 1:

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
//     Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

var maximum69Number = function (num) {
    var placeholder = num;
    if (num === 6) {
        return 9;
    }
    if (num === 9) {
        return 9;
    }
    if (num === 9999) {
        return 9999;
    }
    if (num > 1000) {
        if (num - 9000 > 0) {
            placeholder = placeholder - 9000;
            if (placeholder - 900 > 0) {
                placeholder = placeholder - 900;
                if (placeholder - 90 > 0) {
                    placeholder -= 90;
                    if (placeholder - 9 === 0) {
                        return num;
                    } else {
                        return num + 3;
                    }
                } else {
                    return num + 30;
                }
            } else {
                return num + 300;
            }
        } else {
            return num + 3000;
        }
    }
    if (num > 100) {
        if (placeholder - 900 > 0) {
            placeholder = placeholder - 900;
            if (placeholder - 90 > 0) {
                placeholder -= 90;
                if (placeholder - 9 === 0) {
                    return num;
                } else {
                    return num + 3;
                }
            } else {
                return num + 30;
            }
        } else {
            return num + 300;
        }
    }
    if (num > 10) {
        if (placeholder - 90 > 0) {
            placeholder -= 90;
            if (placeholder - 9 === 0) {
                return num;
            } else {
                return num + 3;
            }
        } else {
            return num + 30;
        }
    }


};

// Given an integer n, return any array containing n unique integers such that they add up to 0.



// Example 1:

// Input: n = 5
// Output: [-7, -1, 1, 3, 4]
// Explanation: These arrays also are accepted[-5, -1, 1, 2, 3], [-3, -1, 2, -2, 4].
//     Example 2:

// Input: n = 3
// Output: [-1, 0, 1]
// Example 3:

// Input: n = 1
// Output: [0]

var sumZero = function (n) {
    var final = [];
    if (n % 2 === 0) {
        for (var x = n / 2; x > 0; x--) {
            final.push(x);
            final.push(x * -1);
        }
    } else {
        for (var x = (n - 1) / 2; x > 0; x--) {
            final.push(x);
            final.push(x * -1);
        }
        final.push(0);
    }
    return final;
};

// Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Return the maximum number of water bottles you can drink.



//     Example 1:



// Input: numBottles = 9, numExchange = 3
// Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.
// Example 2:



// Input: numBottles = 15, numExchange = 4
// Output: 19
// Explanation: You can exchange 4 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 15 + 3 + 1 = 19.
// Example 3:

// Input: numBottles = 5, numExchange = 5
// Output: 6
// Example 4:

// Input: numBottles = 2, numExchange = 3
// Output: 2

var numWaterBottles = function (numBottles, numExchange) {
    var change = true;
    var drunk = numBottles;
    var empty = numBottles % numExchange;
    var exchanged = (numBottles - empty) / numExchange;

    while (change === true) {
        change = false;
        if ((exchanged + empty) >= numExchange) {
            var new_full = exchanged + empty;
            var placeh = empty;
            change = true;
            drunk += exchanged;
            empty = (exchanged + placeh) % numExchange;
            exchanged = (new_full - empty) / numExchange;
        } else {
            drunk += exchanged;
        }
    }
    return drunk;
};

// Given an array of string words.Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and / or right side of words[j].



//     Example 1:

// Input: words = ["mass", "as", "hero", "superhero"]
// Output: ["as", "hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero", "as"] is also a valid answer.
//     Example 2:

// Input: words = ["leetcode", "et", "code"]
// Output: ["et", "code"]
// Explanation: "et", "code" are substring of "leetcode".
//     Example 3:

// Input: words = ["blue", "green", "bu"]
// Output: []

var stringMatching = function (words) {
    var final = [];
    for (var x = 0; x < words.length - 1; x++) {
        for (var y = x + 1; y < words.length; y++) {
            var word1 = words[x];
            var word2 = words[y];
            if (word1.length > word2.length) {
                if (word1.includes(word2) && !final.includes(word2)) {
                    final.push(word2);

                }
            } else if (word2.length > word1.length) {
                if (word2.includes(word1) && !final.includes(word1)) {
                    final.push(word1);

                }
            } else if (word1 === word2) {
                final.push(word1);
            }
        }
    }
    return final;
    // var final = [];
    // for (var x = 0; x < words.length - 1; x++) {
    //     for (var y = x + 1; y < words.length; y++) {
    //         var word1 = words[x];
    //         var word2 = words[y];
    //         if (word1.length > word2.length) {
    //             for (var z = 0; z < (word1.length - word2.length + 1); z++) {
    //                 var sub = word1.substring(z, z + word2.length);
    //                 if (sub === word2 && !final.includes(sub)) {
    //                     final.push(word2);
    //                     break;
    //                 }
    //             }
    //         } else if (word2.length > word1.length) {
    //             for (var z = 0; z < (word2.length - word1.length + 1); z++) {
    //                 var sub = word2.substring(z, z + word1.length);
    //                 if (sub === word1 && !final.includes(sub)) {
    //                     final.push(word1);
    //                     break;
    //                 }
    //             }
    //         } else if (word1 === word2) {
    //             final.push(word1);
    //         }
    //     }
    // }
    // return final;
};

// Given a 2D grid of size m x n and an integer k.You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.



//     Example 1:


// Input: grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 1
// Output: [[9, 1, 2], [3, 4, 5], [6, 7, 8]]
// Example 2:


// Input: grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], k = 4
// Output: [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]]
// Example 3:

// Input: grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 9
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

var shiftGrid = function (grid, k) {
    var arr = grid;
    while (k > 0) {
        var arr2 = [];
        for (var x = 0; x < grid.length; x++) {
            arr2.push([]);
        }
        // arr2[0].push(arr[arr.length - 1][arr[0].length - 1])
        for (var x = 0; x < arr.length; x++) {
            for (var y = 0; y < arr[0].length; y++) {
                if (x === 0 && y === 0) {
                    arr2[0].push(arr[arr.length - 1][arr[0].length - 1])
                } else if (y === 0 && x !== 0) {
                    arr2[x].push(arr[x - 1][arr[0].length - 1]);
                } else {
                    arr2[x].push(arr[x][y - 1]);
                }

            }
        }
        arr = arr2;
        k--;
    }
    return arr;
};
// Given an array of integers nums, sort the array in ascending order.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

var sortArray = function (nums) {
    return nums.sort(function (a, b) { return a - b })
};

// There is a robot starting at position(0, 0), the origin, on a 2D plane.Given a sequence of its moves, judge if this robot ends up at(0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move.Valid moves are R(right), L(left), U(up), and D(down).If the robot returns to the origin after it finishes all of its moves, return true.Otherwise, return false.

//     Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc.Also, assume that the magnitude of the robot's movement is the same for each move.

// Example 1:

// Input: "UD"
// Output: true
// Explanation: The robot moves up once, and then down once.All moves have the same magnitude, so it ended up at the origin where it started.Therefore, we return true.


//     Example 2:

// Input: "LL"
// Output: false
// Explanation: The robot moves left twice.It ends up two "moves" to the left of the origin.We return false because it is not at the origin at the end of its moves.

var judgeCircle = function (moves) {
    var obj = {};
    for (var x = 0; x < moves.length; x++) {
        var letter = moves[x];
        if (obj[letter] === undefined) {
            obj[letter] = 1
        } else {
            obj[letter] += 1;
        }

    }
    if (obj["U"] === obj["D"] && obj["L"] === obj["R"]) {
        return true;
    } else {
        return false;
    }
};

// A sentence S is given, composed of words separated by spaces.Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin"(a made - up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel(a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.

// If a word begins with a consonant(i.e.not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".

// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.



//     Example 1:

// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:

// Input: "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

var toGoatLatin = function (S) {
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var counter = 1;
    S = S.split(" ");
    for (var x = 0; x < S.length; x++) {
        var first = S[x][0];
        if (vowels.includes(first)) {
            S[x] = S[x].concat("ma");
        } else {
            S[x] = S[x].substr(1).concat(first, "ma");
        }
        var counter2 = counter;
        while (counter > 0) {
            S[x] = S[x].concat("a");
            counter--;
        }
        counter = counter2 + 1;
    }
    return S.join(" ");
};

// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ...arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ...arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].



//     Example 1:

// Input: arr = [0, 1, 0]
// Output: 1
// Example 2:

// Input: arr = [0, 2, 1, 0]
// Output: 1
// Example 3:

// Input: arr = [0, 10, 5, 2]
// Output: 1
// Example 4:

// Input: arr = [3, 4, 5, 1]
// Output: 2
// Example 5:

// Input: arr = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19]
// Output: 2

var peakIndexInMountainArray = function (arr) {
    for (var x = 1; x < arr.length; x++) {
        if (arr[x] < arr[x - 1]) {
            return x - 1;
        }
    }
};

// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime.More formally, return the number of students where queryTime lays in the interval[startTime[i], endTime[i]] inclusive.



//     Example 1:

// Input: startTime = [1, 2, 3], endTime = [3, 2, 7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
// Example 2:

// Input: startTime = [4], endTime = [4], queryTime = 4
// Output: 1
// Explanation: The only student was doing their homework at the queryTime.
//     Example 3:

// Input: startTime = [4], endTime = [4], queryTime = 5
// Output: 0
// Example 4:

// Input: startTime = [1, 1, 1, 1], endTime = [1, 3, 2, 4], queryTime = 7
// Output: 0
// Example 5:

// Input: startTime = [9, 8, 7, 6, 5, 4, 3, 2, 1], endTime = [10, 10, 10, 10, 10, 10, 10, 10, 10], queryTime = 5
// Output: 5


// Constraints:

// startTime.length == endTime.length
// 1 <= startTime.length <= 100
// 1 <= startTime[i] <= endTime[i] <= 1000
// 1 <= queryTime <= 1000
var busyStudent = function (startTime, endTime, queryTime) {
    var counter = 0;
    for (var x = 0; x < startTime.length; x++) {
        if (queryTime >= startTime[x] && queryTime <= endTime[x]) {
            counter++;
        }
    }
    return counter;

};

// Given an array of integers arr, and three integers a, b and c.You need to find the number of good triplets.

// A triplet(arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
//     | arr[i] - arr[j] | <= a
//     | arr[j] - arr[k] | <= b
//     | arr[i] - arr[k] | <= c
// Where | x | denotes the absolute value of x.

// Return the number of good triplets.
//     Example 1:

// Input: arr = [3, 0, 1, 1, 9, 7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3, 0, 1), (3, 0, 1), (3, 1, 1), (0, 1, 1)].
//     Example 2:

// Input: arr = [1, 1, 2, 2, 3], a = 0, b = 0, c = 1
// Output: 0
// Explanation: No triplet satisfies all conditions.

var countGoodTriplets = function (arr, a, b, c) {
    var counter = 0;
    for (var x = 0; x < arr.length - 2; x++) {
        for (var y = x + 1; y < arr.length - 1; y++) {
            for (var z = y + 1; z < arr.length; z++) {
                var value1 = Math.abs(arr[x] - arr[y]);
                var value2 = Math.abs(arr[y] - arr[z]);
                var value3 = Math.abs(arr[x] - arr[z]);
                if (value1 <= a && value2 <= b && value3 <= c) {
                    counter++;
                }

            }
        }
    }
    return counter;
};





// Given two integer arrays of equal length target and arr.

// In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

// Return True if you can make arr equal to target, or False otherwise.

 

// Example 1:

// Input: target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
// 3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.
// Example 2:

// Input: target = [7], arr = [7]
// Output: true
// Explanation: arr is equal to target without any reverses.
// Example 3:

// Input: target = [1,12], arr = [12,1]
// Output: true
// Example 4:

// Input: target = [3,7,9], arr = [3,7,11]
// Output: false
// Explanation: arr doesn't have value 9 and it can never be converted to target.
// Example 5:

// Input: target = [1,1,1,1,1], arr = [1,1,1,1,1]
// Output: true
var canBeEqual = function (target, arr) {
    var obj = {};
    for (var x = 0; x < target.length; x++) {
        var num = target[x];
        if (!obj[num]) {
            obj[num] = 1;
        } else {
            obj[num] += 1;
        }
    }
    for (var x = 0; x < arr.length; x++) {
        var num = arr[x];
        if (!obj[num]) {
            return false;
        } else {
            obj[num] -= 1;
        }
    }
    var final = Object.values(obj);
    for (var x = 0; x < final.length; x++) {
        var num = final[x];
        if (num !== 0) {
            return false;
        }
    }
    return true;
};

// Given an array of positive integers arr, calculate the sum of all possible odd - length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd - length subarrays of arr.



//     Example 1:

// Input: arr = [1, 4, 2, 5, 3]
// Output: 58
// Explanation: The odd - length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1, 4, 2] = 7
// [4, 2, 5] = 11
// [2, 5, 3] = 10
// [1, 4, 2, 5, 3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// Example 2:

// Input: arr = [1, 2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and[2].Their sum is 3.
// Example 3:

// Input: arr = [10, 11, 12]
// Output: 66

var sumOddLengthSubarrays = function (arr) {
    var sum = 0;
    var counter = 1;
    while (counter <= arr.length) {
        var empty = [];
        for (var x = counter - 1; counter < arr.length; x++) {
            var counter2 = 0;
            while (counter2 !== counter) {
                sum += arr[x + counter2]
                counter2 = counter2 + 1;
            }
        }
        counter += 2;
    }

    return sum;
};

// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.It is guaranteed the answer is unique.



//     Example 1:

// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".


//     Note:

// 1 <= S.length <= 20000
// S consists only of English lowercase letters.

var removeDuplicates = function (S) {
    S = S.split("");
    var counter = false;
    while (counter === false) {
        counter = true;
        for (var x = 0; x < S.length - 1; x++) {
            if (S[x] === S[x + 1]) {
                counter = false;
                S.splice(x, 2);
                break;
            }
        }
    }
    S = S.join("");
    return S;
};

// Given an integer array arr, return true if there are three consecutive odd numbers in the array.Otherwise, return false.


//     Example 1:

// Input: arr = [2, 6, 4, 1]
// Output: false
// Explanation: There are no three consecutive odds.
//     Example 2:

// Input: arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]
// Output: true
// Explanation: [5, 7, 23] are three consecutive odds.


//     Constraints:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000

var threeConsecutiveOdds = function (arr) {
    var counter = 0;
    for (var x = 0; x < arr.length; x++) {
        var num = arr[x];
        if (num % 2 === 0) {
            counter = 0;
        } else {
            counter++;
        }
        if (counter === 3) {
            return true;
        }
    }
    return false;
};

// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.



//     Example 1:

// Input: matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
// Example 2:

// Input: matrix = [[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
//     Example 3:

// Input: matrix = [[7, 8], [1, 2]]
// Output: [7]

var luckyNumbers = function (matrix) {
    var final = [];
    for (var x = 0; x < matrix.length; x++) {
        var row = matrix[x];
        var min = row.reduce((a, b) => Math.min(a, b));
        var arr = [];
        var max = 0;
        for (var z = 0; z < matrix.length; z++) {
            arr.push(matrix[z][x]);

        }
        max = arr.reduce((a, b) => Math.max(a, b));

        for (var y = 0; y < row.length; y++) {
            var num = row[y];
            if (num === min && num === max) {
                final.push(num);
            }
        }
    }
    return final;
};

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
var defangIPaddr = function (address) {
    return address.split(".").join("[.]");
};

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.



//     Example 1:


// Input: s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
//     Example 2:

// Input: s = "abc", indices = [0, 1, 2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.
//     Example 3:

// Input: s = "aiohn", indices = [3, 1, 4, 2, 0]
// Output: "nihao"
// Example 4:

// Input: s = "aaiougrt", indices = [4, 0, 2, 6, 7, 3, 1, 5]
// Output: "arigatou"
// Example 5:

// Input: s = "art", indices = [1, 0, 2]
// Output: "rat"

var restoreString = function (s, indices) {
    s = s.split("");
    var arr = [];
    for (var x = 0; x < s.length; x++) {
        var index = indices.indexOf(x);
        // return index;
        arr.push(s[index]);
    }
    arr = arr.join("");
    return arr;
};

// We are given a list nums of integers representing a list compressed with run - length encoding.

// Consider each adjacent pair of elements[freq, val] = [nums[2 * i], nums[2 * i + 1]](with i >= 0).For each such pair, there are freq elements with value val concatenated in a sublist.Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.



//     Example 1:

// Input: nums = [1, 2, 3, 4]
// Output: [2, 4, 4, 4]
// Explanation: The first pair[1, 2] means we have freq = 1 and val = 2 so we generate the array[2].
// The second pair[3, 4] means we have freq = 3 and val = 4 so we generate[4, 4, 4].
// At the end the concatenation[2] + [4, 4, 4] is[2, 4, 4, 4].
//     Example 2:

// Input: nums = [1, 1, 2, 3]
// Output: [1, 3, 3]

var decompressRLElist = function (nums) {
    // idk why the comment out code doesn't work
    // var final = [];
    // for(var x = 0; x < nums.length; x += 2){
    //     var freq = nums[x];
    //     var val = nums[x + 1];
    //     var temp = [];
    //     for(var y = 0; y < freq; y++){
    //         temp.push(val);
    //     }
    //     final.push(temp);
    // }
    // return final;
    // var answer = final[0];
    // for(var x = 1; x < final.length; x++){
    //     answer.concat(final[x]);
    // }
    // return answer;
    var final = [];
    for (var x = 0; x < nums[0]; x++) {
        final.push(nums[1]);
    }
    var counter = nums.length / 2;
    for (var x = 1; x < counter; x++) {
        var temp = [];
        var val = nums[2 * x + 1];
        var freq = nums[2 * x];
        for (var y = 0; y < freq; y++) {
            temp.push(val);
        }
        final = final.concat(temp);
    }
    return final;


};

// There are n soldiers standing in a line.Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index(i, j, k) with rating(rating[i], rating[j], rating[k]).
// A team is valid if: (rating[i] < rating[j] < rating[k]) or(rating[i] > rating[j] > rating[k]) where(0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).



//     Example 1:

// Input: rating = [2, 5, 3, 4, 1]
// Output: 3
// Explanation: We can form three teams given the conditions. (2, 3, 4), (5, 4, 1), (5, 3, 1).
//     Example 2:

// Input: rating = [2, 1, 3]
// Output: 0
// Explanation: We can't form any team given the conditions.
// Example 3:

// Input: rating = [1, 2, 3, 4]
// Output: 4

var numTeams = function (rating) {

};
// Given an array arr.You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.



//     Example 1:

// Input: arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7]
// Output: 2
// Explanation: Choosing { 3, 7 } will make the new array[5, 5, 5, 2, 2] which has size 5(i.e equal to half of the size of the old array).
// Possible sets of size 2 are { 3, 5 }, { 3, 2 }, { 5, 2 }.
// Choosing set { 2, 7 } is not possible as it will make the new array[3, 3, 3, 3, 5, 5, 5] which has size greater than half of the size of the old array.
//     Example 2:

// Input: arr = [7, 7, 7, 7, 7, 7]
// Output: 1
// Explanation: The only possible set you can choose is { 7 }.This will make the new array empty.
//     Example 3:

// Input: arr = [1, 9]
// Output: 1
// Example 4:

// Input: arr = [1000, 1000, 3, 7]
// Output: 1
// Example 5:

// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: 5
var minSetSize = function (arr) {

};

// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be[1, 1, 4, 2, 1, 1, 0, 0].

//     Note: The length of temperatures will be in the range[1, 30000].Each temperature will be an integer in the range[30, 100].
var dailyTemperatures = function (T) {

};