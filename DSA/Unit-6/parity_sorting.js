/*
Description :
Given an integer array. Sort the array in such a way that all the odd number are in the beginning of the array followed by the even numbers.
The odd number and even number should follow an ascending order.

Input :
The first line contains the number of integers N
The second line contains the elements of the array

Constraints :
1<=N<=10^4

Output :
Print the final array.

i/p :
5
2 5 1 4 2 
o/p :
1 5 2 2 4
*/

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  arr.sort(function (a, b) {
    return a - b;
  });
  paritySorting(n, arr);
}

function paritySorting(n, arr) {
  var odd = [];
  var even = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  console.log(...odd, ...even);
}

