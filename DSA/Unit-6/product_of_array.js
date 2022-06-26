/*
Description :
Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. 
where 0 <= i <= n-1 . See sample test case for better understanding.
You are not allowed to use division operator. It is given that product will fit in 32 bit integer.

Input :
First Line contains T, size number of test cases.
First Line of each test case contains N, size of array.
Second Line of each test case contains N integers, numbers of array.

Constraints :
1 <=T<= 10
1 <=N= 10^6
1 <= A[i] <=100

Output :
For each test output resulting array on a new line.

i/p :
2
5
1 2 3 4 5
3
3 2 7
o/p :
120 60 40 30 24
14 21 6

Hint :
For test case 1
i = 0 ==> 2*3*4*5 = 120
i = 1 ==> 1*3*4*5 = 60
i = 3 ==> 1*2*4*5 = 40
i = 4 ==> 1*2*3*5 = 30
i = 5 ==> 1*2*3*4 = 24

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (let i = 0; i < tc; i++) {
    var n = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    productOfArray(n, arr);
  }
}

function productOfArray(n, arr) {
  var sum = 1;
  var ans = [];
  for (let i = 0; i < n; i++) {
    sum = sum * arr[i];
  }
  for (let i = 0; i < n; i++) {
    ans[i] = sum * Math.pow(arr[i], -1);
  }
  console.log(ans.join(" "));
}
