/*
Description :
Given a string s, rearrange the string in such a way that all the vowels appear at the beginning of the string.
The relative order between vowels remains the same and the relative order between consonants also remains the same.
Please look at the sample testcases for more clarity.

Input :
The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test cases. Then t test cases follow.
The first line of each test case contains the string s (1 ≤ |s| ≤ 10000) — the length of the string.

Output :
For each test case, print the answer: The final rearranged string.

i/p :
4
eio
masaischool
ubcdefghioel
rhythm

o/p :
eio
aaioomsschl
ueioebcdfghl
rhythm

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (let i = 0; i < tc; i++) {
    var str = input[line++].trim();
    vowelsPriority(str);
  }
}
function vowelsPriority(str) {
  var ovel = [];
  var con = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      ovel.push(str[i]);
    } else {
      con.push(str[i]);
    }
  }
  console.log([...ovel, ...con].join(""));
}
