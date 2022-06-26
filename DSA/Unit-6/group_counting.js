/*
Description :
You are given a grid of size N, M where N refers to the number of rows and M refers to the number of columns of the grid. 
The grid only contains 0 or 1 at each cell, where 1 represents a sheep and 0 represents fencing. The size of a group of sheep is the number of 1’s connected 4-directionally (horizontal or vertical).
You may assume all four sides of the grid are fenced. You will be given Q queries wherein each query you will be given an integer P, you need to find the number of groups of sheep of size P.

Input :
The first line contains 3 space-separated integers N, M, Q denoting the dimensions of the grid and the number of queries.
The next N lines contain M space-separated integers either 0 to 1. Each line denotes the row of the grid.
The next line contains Q space-separated integers denoting the query parameter P for each query.

Constraints :
1<= N, M <=10^3
1<= Q <=10^5
1 <= P <=10^3

Output :
The output must contain Q space-separated integers denoting the answer of each query.

i/p :
4 5 3
1 0 0 1 1
1 1 1 0 1
0 0 0 0 0 
1 1 1 1 1 
1 4 5
o/p : 0 1 1

i/p :
3 3 2
0 1 0
1 0 1
1 0 0
1 2 
o/p : 2 1

Hint :
Explanation for Sample 1

We have 1 group of size 4, 1 group of size 3, and 1 group of size 5.
For query 1 we have 0 groups of size 1.
For query 2 we have 1 group of size 4.
For query 3 we have 1 group of size 5.
So we return {0,1,1}.
*/