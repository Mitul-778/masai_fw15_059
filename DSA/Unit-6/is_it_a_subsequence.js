/*
Description :
Given two strings, s1 and s2, you need to print YES if s1 is a subsequence of s2 else NO.

Input :
1<=T<=10
1<=|S1|<=100
1<=|S2|<=10000

Output :
output YES or NO for each test case.

i/p :
2
abc
adbce
ax
xaa
o/p :
YES
NO

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (let i = 0; i < tc; i++) {
    var s1 = input[line++];
    var s2 = input[line++];
    if (isItAsubSequence(s1, s2)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}

function isItAsubSequence(s1, s2) {
  var i = 0;
  for (let j = 0; j < s2.length && i < s1.length; j++) {
    if (s1[i] == s2[j]) {
      i++;
    }
  }
  return i === s1.length;
}
