//Splicing of array
//syntax:splice(No.of elements to be added, no.of elements to be deleted/removed,"Element name")

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1,0,"Grapes");//Grapes replaced the position of orange but orange is not removed
console.log(fruits);

//Slicing of Array

let arr= ["Banana", "Orange", "Kiwi","Grapes"];
arr1=arr.slice(1,3);
console.log(arr1);

//Replacing of Array can be done using splice()

fruits.splice(1,1,"Kiwi");//Kiwi replaced the position of grapes and grapes is also removed by setting no. of elements to be deleted
console.log(fruits);

//String search()

let str="Hey, Hai! How you do?"
pos=str.search("How");
console.log(pos);

//String slice()
//syntax: splice.(start position,end position)
let names ="Roy, Aravind, Jack";
name=names.slice(5,12);
name1=names.slice(-5);
console.log(name);
console.log(name1);

//String substr()
//Second Parameter in the substring specifies the length 

let result=names.substr(0,4);
console.log(result);

//Replacing of String

let exm="Hello George!!"
example=exm.replace("George","roy");
console.log(example);

//String trim()

let string = "       hai    "
strn=string.trim();
console.log(strn);


