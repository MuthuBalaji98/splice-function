let subject=["Tamil","English","Maths","Science","Social"];
console.log("original array :", subject);
console.log("length of the array is "+subject.length);
console.log("method : array.splice()");
subject.splice( 3, 1, "Computer","Biology");
console.log("change in array : ",subject);
console.log("return: length of array after splice() is "+subject.length);