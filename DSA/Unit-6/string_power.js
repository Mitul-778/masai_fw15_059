/*
Description :
Given a string s, find the power of the string.
The power of the string is defined as the longest length of the substring possible having only the same single character.

Input :
The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test cases. Then t test cases follow.
The first line of each test case contains the string s (1 ≤ |s| ≤ 10000) — the length of the string.

Output :
For each test case, print the answer: The power of the string.

i/p :
4
aaaaaa
aaabbb
asd
aabbcc

o/p :
6
3
1
2

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (let i = 0; i < tc; i++) {
    var str = input[line++];
    stringPower(str);
  }
}

function stringPower(str) {
  var max = -Infinity;
  var long = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      long++;
    } else {
      if (long > max) {
        max = long;
      }
      long = 0;
    }
  }
  console.log(max + 1);
}
