/*
Description :
Sherlock has a matrix of dimension [nxm]. All the elements in this matrix are zero (Initialised as 0).
Sherlock has q queries to execute on the matrix. Each query has two integers i.e, the type of query and the index.
So if the type is 0, the index represents the index of row. Similarly, if the type is 1, the index represents the index of the column.
Sherlock has to increase the value by 1 of all the elements that are present in that row or column depending on the type and index.
In the end, after executing all queries, Sherlock is curious and wants to find the number of elements of the matrix which are odd (not divisible by 2).
Note - 0-based indexing is followed here.

Input :
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
The first line of each test case contains two integers n,m (1≤ n ≤ 1000, 1≤ m ≤1000)  — the number of rows and columns, respectively.
The second line of each test case contains a single integer q (1 ≤ q ≤ 100000) — the number of queries.
The next q lines of each test case contain 2 integers type and index ( 0 ≤ type ≤ 1, 0 ≤ index ≤ n-1(for row) and m-1(for col) ) - the info on the query.

Output
For each test case, print the answer: The number of elements of the matrix which are odd.

i/p :
2
2 2
4
0 1
0 0
0 0
1 1
4 4
10 
0 1
0 2
0 0
0 1
0 1
0 1
1 1
1 1
1 3
1 0

o/p :
2 
8

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0].trim();
  var line = 1;
  for (let i = 0; i < tc; i++) {
    var [n, m] = input[line++].trim().split(" ").map(Number);
    var mat = [];
    for (let k = 0; k < n; k++) {
      var arr = [];
      for (let z = 0; z < m; z++) {
        arr.push(0);
      }
      mat.push(arr);
    }
    var qu = +input[line++].trim();
    for (let h = 0; h < qu; h++) {
      var [r, c] = input[line++].trim().split(" ").map(Number);
      sherlockAndHisQueries(mat, r, c, n, m);
    }
    console.log(countOdd(mat));
  }
}

function sherlockAndHisQueries(mat, r, c, n, m) {
  if (r === 0) {
    for (let i = 0; i < m; i++) {
      mat[c][i]++;
    }
  } else {
    for (let j = 0; j < n; j++) {
      mat[j][c]++;
    }
  }
}

function countOdd(mat) {
  var count = 0;
  for (let a = 0; a < mat.length; a++) {
    for (let b = 0; b < mat[0].length; b++) {
      if (mat[a][b] % 2 !== 0) {
        count++;
      }
    }
  }
  return count;
}
