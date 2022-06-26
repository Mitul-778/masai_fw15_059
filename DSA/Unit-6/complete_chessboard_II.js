/*
Description :
You're given a N*N chessboard which initially has some queens present at some of the places on the chessboard. 
Find if you can place N queens on the chessboard such that no queen can attack any other queen. 
An empty cell is shown by '.' and a queen is shown by 'Q'.


Input :
The first line contains the size of the array , N
The next N lines contains N characters ('Q' or '.') as the value of the cell

Constraints :
1<=N<=9

Output
Print "YES" if you place N queens on the chessboard, else print "NO"

i/p :
2
..
..
o/p :
NO

i/p : 
4
Q...
....
....
..Q.
o/p :
NO

i/p :
4
.Q..
....
Q...
....
o/p :
YES

Hint :
In the sample test case, there is no way you can arrange 2 Queens, so that no two queens can attack each other. Hence, the output is NO

In the second sample test case, the initial condition of the chessboard is as follows

Q...
....
....
..Q.
Now, since the 2 Queens are already placed, we need to place 2 more queens, such that none of the queens is under attack. 
But, if you notice closely, there is no way that we can do that, hence the answer is NO

In the third sample test case, the initial condition of the board is as follows

.Q..
....
Q...
....
Now, since the 2 Queens are already placed, we need to place 2 more queens, such that none of the queens is under attack. 
The following combination is possible, such that none of the queen is under attack
.Q..
...Q
Q...
..Q.
Since, we were able to place N = 4 queens, hence the output is YES
*/