/*
Description :
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the nextpointer. 
Internally,posis used to denote the index of the node that the tail'snextpointer is connected to.
Note-pos is not passed as a parameter.

Complete the function below. No need to take any input, just return if the given linked list has a cycle in it or not.
Return true if there is a cycle in the linked list. Otherwise, return false.
Note- All the nodes are different


Input :
This is a function complete problem.
Refer to sample input for understanding
The first line contains the number of cases (t)
Next line contains number of nodes in the first linked list (n)
Next n lines contains the linked list
Next line contains the position of the node that the tail of the linked list points to. (If it's -1 then it doesn't point to anything)

t <= 10
n <= 10

Output :
Complete the function

i/p : 
1
3
1
2
3
-1 
o/p :
false

*/

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below
var hasCycle = function (head) {
  var slow = head;
  var fast = head;
  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};
