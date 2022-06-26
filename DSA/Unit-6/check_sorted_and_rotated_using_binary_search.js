/*
Description :
Given an array of N distinct integers. Check if this array is sorted and rotated counter-clockwise.
A sorted array is not considered as sorted and rotated, i.e., there should be at least one rotation.


Input :
First line consists of integer N
Second consists of N integers separated by spaces.

Constraints :
1 <= N <= 1000

Output :
Print "YES" if the array is sorted and rotated at least once else print "NO"

i/p : 
6
3 4 7 9 1 2
o/p :
YES

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  check_sorted_and_rotated_using_binary_search(n, arr);
}

function check_sorted_and_rotated_using_binary_search(n, arr) {
  var min = Infinity;
  var mid = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
      mid = i;
    }
  }
  var flag1 = 1;
  for (let i = 0; i < mid; i++) {
    if (arr[i] < arr[i - 1]) {
      flag1 = 0;
      break;
    }
  }
  var flag2 = 1;
  for (let i = mid + 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      flag2 = 0;
      break;
    }
  }
  if (flag1 == 1 && flag2 == 1 && arr[n - 1] < arr[0]) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
