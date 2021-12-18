//1. JS console API (Application Programming Interface)
//console.log("Hello World");
// alert("mm");
// document.write("this is document write");

//2. Javascript console API
//console.warn("this is Warning ", 4 * 6, "Another log");
//console.warn("this is warning");
//console.error("this is an error");

// 3. JS Variables -->Containers to store data values ex-water store in tank
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

//4.Data types in JS
//Numbers
var num1 = 455;
var num2 = 47.99;
//String
var str1 = "This is a string";

//Objects
var marks = {
  ravi: 45,
  sumit: 34,
  namit: 38,
};
const person = {
  name: "mosh",
  walk() {},
  talk() {},
};

//Booleans
var a = true;
var b = false;

// var undefined and null
var n = null;
var und;

/*At a very high level ,there are 2 types of Data_Types in JS
1.Primitive Data_Types : undefined,null,number,string,boolean,Symbol
2.Reference Data Type : Arrays and Object  */
var arr = [1, 2, 3, "i love India", 4, 5];

//Operations in JavaScript
var a = 44;
var b = 89;
//console.log("the value of a+b",a+b);
//console.log("the value of b-=2 =",b-=2);
//console.log(true && true)
//console.log(!false) logical not

//FUNCTIONS
// DRY =Do not repeat
function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(3, 10);
c3 = c1 + c2;
//console.log(c1,c2)

/*Conditional in JS
var age =6;
if(age > 8 ){console.log("You are not Kid");}
else {console.log("You are Kid")} */

// Loops for and while

for (var i = 0; i < arr.length; i++) {
  // for loop
  //  console.log(arr[i]);
}

arr.forEach(function (element) {
  // for loop ,both are same
  //    console.log(element)
});

// const ab; //cannot change value
let j = 0;
while (j < arr.length) {
  // while loop
  //console.log(arr[j]);
  j++;
}

let newArr = ["fun", "nun", null, 56, true];
// newArr.pop();
// newArr.push("ABC");
// newArr.shift();
// newArr.unshift("DEF");
// // console.log(newArr);
// const newLength=newArr.unshift("Allow");
// console.log(newArr.length) || console.log(newLength);

//String in JS
// ..........................

let myString = "I am good good good fine";
// console.log(myString.length);
// console.log(myString.indexOf("am"));
// console.log(myString.lastIndexOf("good"));
// console.log(myString.slice(1,6));
// const d=myString.replace("am","me and You");
// console.log(d)

let d = new Date();
// console.log(d);
// console.log(d.getTime());
// console.log(d.getFullYear());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());

// DOM Manipulaton
// ...............................................
let elem = document.getElementById("click");
// console.log(elem);
let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background="yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
elemClass[0].classList.remove("text-success");
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// console.log(elem.innerHTML);
tg = document.getElementsByTagName("div");
// console.log(tg);
createdElement = document.createElement("p");
createdElement.innerText = " This is created element para";
createdElement2 = document.createElement("p");
createdElement2.innerText = " This is created element 2nd para";
tg[0].appendChild(createdElement);
tg[0].replaceChild(createdElement2, createdElement);
//removeChild(element);--->remove an element

// document property explore

// Selecting using query
// .......................

sel = document.querySelector(".container");
// console.log(sel);
sel = document.querySelectorAll(".container");
// console.log(sel);

// Events in JS
// ......................
function clicked() {
  console.log("the button was clicked");
}
// window.onload =function(){
//   console.log("the document was loaded");
// }
//  firstContainer.addEventListener("click",function(){
//    document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
//   console.log('click hua container pr');
//  })
// firstContainer.addEventListener("mouseover",function(){
//   console.log('mouseOver');
// })
// firstContainer.addEventListener("mouseout",function(){
// //   console.log('mouseout');})

// let prevHTML =document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener("mousedown",function(){
//   document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//    console.log('mousedown');
//  })
//  firstContainer.addEventListener("mouseup",function(){
//   document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
//   console.log('mouseup hua');
//  })

// Arrow Function
function multiply() {
  return a + b;
}
multiply1 = () => {
  return a + b;
};

//SetTimeout and setInterval

logKaro = () => {
  document.querySelectorAll(".container")[1].innerHTML = "Hello Moto";
  console.log("I M yr Log");
};
// setTimeout(logKaro,2000);
// clr =setInterval(logKaro,2000);
// clearTimeout(clr); clearInterval(clr) to stop

// JavaScript Local Storage

// localStorage
// localStorage.setItem('name','verma');
// console.log(localStorage.getItem('name'))
localStorage.removeItem("name");

// JSON (JavaScript Object Noatation)
// It is used to exchange the data

obj = { naam: "harry", length: 1, a: { this: 'tha"t' } };
jso = JSON.stringify(obj);
console.log(jso);
parsed = JSON.parse('{"naam":"harry","length":1 , "a":{"this":"that"}}');
console.log(parsed);