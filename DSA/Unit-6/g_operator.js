/*
Description :
You are given a range of integers [1,n], (Both inclusive).
An operator G(a,b) is defined as: {gcd(a,b)}, where a and b are distinct and are selected from the given range.
Find the maximum possible value using operator G.

Input :
The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test cases. Then t test cases follow.
The first line of each test case contains a single integer n (2 ≤ n ≤ 1000000).

Output :
For each test case, print the answer.

i/p :
3
2
11
12

o/p :
1
5
6

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (let i = 0; i < tc; i++) {
    var n = +input[line++];
    gOperator(n);
  }
}

function gOperator(n) {
  if (n % 2 === 0) {
    console.log(n / 2);
  } else {
    console.log((n - 1) / 2);
  }
}
