// var arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(2, 3));
// // output --> [3,4,5]
// console.log(arr);
// // output --> [1,2]

// // on my observation what I had came to know is :
// // 1. splice() will take two arguement that is start point and from start till which index. I had pass start as 2 and and from 2 i want 3 elements.
// // 2. splice will delete those element and create a new Array of those deleted elements.
// // 3. So my output will be [3,4,5]
// // 4. Now if I try to print my original array , i will get changed and print the remaining elements i.e original array content will be changed.
// // 5. We can say that splice function will split an array into two parts and change the original array.

// var arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.slice(2, 5));
// // output --> [3,4,5]
// console.log(arr1);
// // output --> [1,2,3,4,5]

// // 1. Slice() will take two arguements, start and end index.
// // 2. It will copy those elements from start to end point into a new array.
// // 3. The original array is not changed i.e the content inside the array remains same.
// // 4. We can say that  slice will copy the part of that array and original array remains unchanged.
// // 5. So Slice is immutable.

// const x=10;
// console.log(x)
// // 1. const is used so that we cannot change the value of 'x' that is immutable and also we cannot re-assign them to different values.
// // 2. If we try to re-assign it will give 'TypeError'
// const person ={
//     name:"hello"
// }
// person.name="bye"
// console.log(person.name)
// // 1. But in this case, objects are mutable so const will not work here that is we change the value of name.
// // 2. It will not throw any error.
// // 3. To make object immutable we use Object.freeze();

// const person1 ={
//     name1:'hello'
// }
// Object.freeze(person1);
// person1.name1='bye'
// console.log(person1.name1)
// // 1. Here if we try to change the value of the name it will throw TypeError because we freezed  the object  



