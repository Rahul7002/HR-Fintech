// var myName = "Rahul";
// var myAge = 26;
// var imRahul = true;
// var test = 9 + "20";
// var imStandby,
//   imUseless = null;
// console.log(typeof(myName));
// // console.log(typeof(myAge));
//  console.log(typeof(imUseless));

// var num = 12,
//   num2 = 10;
// var temp;
// // console.log(num,num2);
// num = num + num2; // num=22
// num2 = num - num2; //num2=12
// num = num - num2;
// console.log("After Swapping",num,num2);
// console.log(num);
// console.log(num);

// //Write a leap year program
// debugger;
// var year=1900;
// if(year%4==0)
// {
//     if(year%100==0){
//         if(year%400==0){
//             console.log(year,'is a leap year');
//         }
//         else{
//             console.log(year,'is not a leap year');
//         }
//     }
//     else{
//         console.log(year,'is not a leap year');
//     }
// }
// else{
//     console.log(year,'is not a leap year');
// }
var age = 16;
// if(age>= 18){
//     console.log('Eligle for vote');
// }
// else{
//     console.log('not eligble');
// }

// age =(age>=18)?console.log('Eligle for vote'):console.log('Not for vote');
// var area='circle';
// var pi=3.14,l=5,b=6,r=10;
// switch(area){
//     case'circle':console.log('area of circle is ',pi*r**2);
//     break;
//     case'triangle':console.log('area of triangle is ',(l*b)/2);break;
//     case'square':console.log('area of square is ',l*b);break;
//     default:console.log('defalut data ');

var data;
// do{
//     debugger;
//     console.log(data);
//      data++;
// }while(data<10);
// debugger;
// var x=9;
// for(data=1;data<=10;data++){
//     console.log(x +'*'+data+'='+ data*x);
// // }
// debugger;
// var anonymous=function(a,b){
//     // console.log(a-b);
//     return a+b;
// }
// var sum1 =anonymous(5,9);
// var sum2 =anonymous(51,9);
// var sum3 =anonymous(5,19);
// console.log(sum1,sum2,sum3);
// console.log(sum1>sum2);
// sum(50,10);
// sum(3,8);

// let a = "abcd";
// console.log(a);

//  a="dance";
// console.log(a);
// function myname(){
//     const myFisrtName="Rahul";
//     console.log(myFisrtName);
//     if(true){
//         var myLastName='verma';
//         console.log('inner '+  myLastName);
//         console.log('outer '+  myFisrtName);
//     }
//     console.log('inner + Outer = '+ myFisrtName+" "+ myLastName);
// }
// // console.log('inner'+ myFisrtName);
// myname()

//TEMPLATE LITERALS
// for(let i=1;i<=10;i++)
// {
//     let tableof=17;
//     // console.log(tableof +' * '+i+'='+ tableof*i);
//     console.log(` ${tableof}*${i} = ${tableof * i}  `);
// }

// DEFAULT PARAMETER
// const mul = (a,b=6)=>{
//   return a*b;
// }
// console.log(mul());
// console.log(mul(3));
// console.log(mul(3,5));

// FAT ARROW Function

// const sum=()=>
// `the sum is ${a=5+(b=6)}`

//  console.log(sum());


// Array In JAVASCRIPT
//Traversal
// var myFriends=['Sumit','Golu','Rohan','6'];
// console.log(myFriends[2],myFriends[0]);
// console.log(myFriends[myFriends.length%myFriends.length]);
// console.log(15/4);
// for(var i=0;i<myFriends.length;i++){
//   console.log(myFriends[i]);
// }
// for(let data in myFriends){
//   console.log(data);
// }
// for(let data of myFriends){
//   console.log(data);
// }
//  myFriends.forEach(function(e,i,ar){
//   console.log(e+ ' index: '+i + " Array:"+ar);
// });

// myFriends.forEach(function(e,i,ar){
//   console.log(e+ ' index: '+i + " Array:"+ar);
// });

// myFriends.forEach((element,index,ar) => {
//   console.log(element+ ' index: '+index+ " Array:"+ar);
// });

// Searching and Filters in Array 

// let myFriends=['Sumit','Golu','Rohan','Sumit'];
// var mySearch=myFriends.indexOf("Rohan",3);
// console.log(mySearch);

//Find Method
//  const prices=[100,200,300,400,500,600,700];
//  prices.find(function(element,index,array){
//    console.log(element<400);
//  })
// const prices=[600,400,300,200,500,100,700];
// const findElement=prices.filter(element =>element>400)
// console.log(prices.sort());
// const sort=[1,38,4,28,5,32];
// console.log(sort.sort());

// Array SubSection: Perform Crud 
// const animals=['Goat','pig','sheep'];
// console.log(animals)
// console.log(animals.shift());
// // retrn=animals.unshift('dear','bear');
// console.log(animals);

// Challange Time 
// const months=['jan','march','April','June','July'];
// // console.log(months);
// let search =months.indexOf('June');
// if(search !==-1){
//     months.splice(search+1,0,'August');
// }
// else{
//     console.log("Nothing founded")
// }
// // console.log(months);
// console.log(months.splice(search+1,1,'Feb'));
// console.log(months);
// search=months.indexOf('June');
// months.splice(search,1);
// console.log(months);


//FIND SQUARE ROOT of each element
// let arr=[25,36,49,64,81];
// let arr=[2,3,4,6,8];
// let arrSqr=arr.map(function(element,index,array){
    // return `The element is ${element} ,index is ${index},belongs to array  ${array}`
    // return Math.sqrt(element);
    // let mul =element*2;
    // //  if(mul>10)
    // // console.log(element);
//     return element*2
// }).filter(element=>{
//     return element>10;
// })

// let arrFilter=arr.map(e=>e*2).filter(e=>e>10).reduce((a,e)=>a+=e);
// // console.log(arr);
//  console.log(arrFilter);

// STRINGS

let myString = "My NaMe is Verma";
let str2 = "i Live in Lucknow";
// console.log(myString.length);
// console.log(myString.lastIndexOf('Rahul',5));

// console.log(myString.slice(-2));
// console.log(myString.substring(4));
// console.log(myString.substr(-2));



// CONCAT 
// console.log(myString.replace('name','place'));
// console.log(myString.toLocaleUpperCase(0,6));
// console.log(myString.concat(' ',str2));
// console.log(myString+" "+str2);
// console.log(`${myString} ${str2}`)

// Converting to a string into a Array

// var string='convert in$to array';
// console.log(string.split(" "));
// console.log(string.split("$"));

// console.log(new Date().toLocaleString());
// console.log(new Date (1997,11,7).toLocaleString());
// console.log(new Date(dateString));
// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());
// console.log(new Date().getDay());
// console.log(new Date().getDate());

// console.log(new Date().setFullYear(2022,11,14));


// let fruit=[king:'mango','orange','tomato','potato'];
// console.log(Object.entries(fruit));
// console.log(fruit);
// const person = {name: 'Fred',age:87};
// console.log(Object.entries(person));
// console.log(person);

// let num=Number.MAX_SAFE_INTEGER;
// let n=9007199254740991n+50n;
// console.log(typeof(n));

// "use Strict";
"use strict";
x=3.14;
console.log(x);