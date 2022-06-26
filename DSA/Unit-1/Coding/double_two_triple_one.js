/*
Description :
You are given four numbers, stored in the variables with the following names
one, two, three, four
Perform the following operations on the four numbers
The value stored in one and two is doubled, such that, if it was 2 initially, it becomes 4
The value stored in three is multiplied by 3, such that, if it was 4, it becomes 12
The value stored in four, is increased by 4, such that if it was 7 initially, it becomes 11
Find the sum of the values stored inone, two, three, four, after the above operations are performed

Input :
The first and the only line of the input contains the values stored in variablesone, two, three, four
1 2 3 4

Output :
Print the sum of the values stored inone, two, three, four, after the required operations are performed
23

Hint :
In the sample test case, the values stored in the variables are as follows
one = 1, two = 2, three = 3, four = 4
The value stored at one and two is doubled, therefore,one = 2, and two = 4
The value stored at three is multiplied by three, so that three = 9
The value stored at four is increased by four, so that four = 8
Therefore, the final sum becomes2 + 4 + 9 + 8 = 23, which is the required answer
*/

function doubleTwoTripleOne(one, two, three, four) {
    // Write code here
    console.log(one*2 + two*2 + three*3 + four+4);
}

doubleTwoTripleOne(1,2,3,4);