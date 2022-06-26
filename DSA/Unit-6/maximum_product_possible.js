/*
Description :
Given an array A with n integers, find the maximum product possible with two array elements having distinct indexes.
Mathematically, find the max (Ai*Aj) where i not equal to j.

Input :
The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test cases. Then t test cases follow.
The first line of each test case contains a single integer n (2 ≤ n ≤ 10000) — the number of elements in the array A.
The second line of each test case contains n integers (1 ≤ Ai ≤ 10000).

Output :
For each test case, print the answer: The maximum product possible.

i/p :
3
6 
1 0 7 2 4 0
5
1 2 3 4 5
2
0 0

o/p :
28
20
0

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (let i = 0; i < tc; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    arr.sort(function (a, b) {
      return a - b;
    });
    maximimProductPossible(n, arr);
  }
}

function maximimProductPossible(n, arr) {
  console.log(arr[n - 1] * arr[n - 2]);
}
