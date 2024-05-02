/*
Table of content:
1) Accept User Input: Line #43.
2) Type Conversion: Line #46.
3) Math properties in js: Line #48.
4) Random number generator code line: Line #61.
5) .checked property in js: Line #63.
6) Ternary operator in js: Line #65.
7) String manipulation:: Line #66.
8) CallBack function concept: Line #82.
10) variables in java script: Line #86.
11) String data Type: Line #94.
12) boolean datatype: Line #99.
13) Examples of using some string functions: Line #103.
14) Method chaining in Java Script: Line #138.
15) Spread Operator in js: Line #157.
16) More About call back functions: Line #169.
17) map function: Line #180.
18) Objects in JS: Line #203.
19) Constructors is js: Line #226.
20) inheritance in js: Line #281.
21) Destructuring in java script: Line #299.
22) Nested Objects in java Script: Line #362.
23) Sorting: Line #394.
24) Some info: Line #431.
25) synchronous & asynchronous: Line #433.
26) try {}, catch{}, finally{} just names: Line #453.
27) Element selectors in js: Line #455.
28) Dom navigation in js: Line #466.
29) Event listeners in js: Line #483.
30) Node List is java script: Line #502.
31) Class List in js: line #506.
31) Call Back hell?: Line #516.
32) Promises in js: Line #549
33) Async/await in js: Line #604.




``````````````````````[Java script notes]``````````````````````````

we already know about variables and arithmetic operators right
1. Accept User input
	1. we can use window prompt because its a easy way.
	2. we can use a text box because its a professional way to do it.
2. type conversion
	we can use Number() function and String function for typecasting.
3. Math properties 
	Math.round();
	Math.floor();
	Math.ceil();
	Math.trunc();
	Math.pow();
	Math.sqrt();
	Math.log();
	Math.sin();
	Math.cos();
	Math.tan();
	Math.abs();
	Math.sign();
4. Random number generator code line
	let randomNumber = Math.floor(Math.random() * max) + min);
5. .checked property in js
	used to determine weather the box is checked or not
6. Ternary operator in js
	it is a shortcut to if else statement, and it's syntax is condition? true case : false case;
7. String manipulation:
	let str = "John Doe";
	str.charAt(0);
	str.indexOf("h");
	str.lastIndexOf("n");
	str.length;
	str = str.trim();	
	str = str.toUpperCase();
	str = str.toLowerCase();
	str = str.repeat(3);
	result = str.startsWith("a"); it will return a boolean value if a string start with a it returns true otherwise false
	result = str.endsWith("s");
	result = str.includes("J");
	result = str.padStart(number capacity: 15 , what to put"0");
	str = str.padEnd();
8. CallBack function
	Function passed as argument to another function.
    
    
```````````````````[variables in java script]```````````````````
1. declaration let x;
2. initialization x = 10;

Number datatype
let gpa = 4;
let age = 25;

`````````[String data Type]`````````
let firstName = "John";
let email = "john123@gmail.com";
let favFood = "Pizza";

`````````[boolean datatype]`````````
let online = true;
let forSale = false;

Example using some string functions:
let myName = "Muhammad Umar Draz";
myName = myName.trim();
console.log(myName.lastIndexOf("r"));

let myName = "Goku";
myName = myName.includes("G");
if(myName) {
    console.log("Yeah!");
} else {
    console.log("Nope");
}


let myNumber = "+92-323-6020139";
let result = myNumber.replaceAll("-","");
console.log(result);


let myName = "John";

myName = myName.slice(0,-1);

console.log(myName);

let fullName = "Muhammad Umar";

let firstName = fullName.slice(0, fullName.indexOf(" "));

let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(`Your first name is ${firstName} and last name is ${lastName}`);
console.log(`${firstName}\n${lastName}`);


`````````````````````[Method chaining in Java Script]```````````````````````

let userName = window.prompt("Enter your user name:");

Without method chaining
userName = userName.trim();
let firstChar = userName.charAt(0);
firstChar = firstChar.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = firstChar+extraChars;
console.log("User Name: " + userName);

With Method Chaining
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);

`````````[Spread operator (...) unpack something like array elements in other words expands an array]`````````

let number = [1,2,3,4,5,6,7,8,9,10];
let maxValue = Math.max(...number);
let minValue = Math.min(...number);
console.log(maxValue);
console.log(minValue);


Info: [rest parameters bundles separate elements into an array function(...rest)]


```````````[CallBack functions]```````````

function passed to another function as an argument to insure that its gonna run after the first function completes

Used mostly in 

1. Reading a file
2. Network request
3. Interacting with databases


```````````[map function]```````````

let dates = ["2022-1-2","2023-10-2","2024-12-1"];
let formatDates = dates.map(formatDatesFun);
console.log(formatDates);
function formatDatesFun(element) {
    let newDates = element.split("-");
    return `${newDates[1]}/${newDates[2]}/${newDates[0]}`
}

const count = document.getElementById('myH1');
let i;
function display(element) {
        console.log(element);
    }
    
    for (let i = 0; i < 100; i++) {
    setTimeout(function () {
            count.textContent = `Counter: ${i}`
        }, i * 1000);
    }
    

```````````[Objects in JS]```````````
person object with normal function 
const person = {
        Name: "john",
        Age: "19",
        hello: function() {
        console.log(`My name is ${this.Name} and i am ${this.Age} years old`)
    }
}

person.hello();

person object with arrow function 
this keywords can't work with arrow functions
const person = {
        name: "John",
        hello: () => {
        console.log(`My name is ${this.name}`);
    }
}

person.hello();

```````````[Constructors is js}``````````` 

function Car(make, model, year, color) {
        this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = function () {
                console.log(`Your are driving ${this.model}`);
            }
        }
        
        const car1 = new Car("Honda", "CIVIC", "2024", "Black");
        
        console.log(car1.make);
        console.log(car1.model);
        console.log(car1.year);
        console.log(car1.color);
        car1.drive()
        
        10. classes in js 
        
        class person {
                constructor(name,age) {
                        this.name = name;
                        this.age = age;
                    }

    display() {
            console.log(`Your name is ${this.name} and you are ${this.age} year old`);
        }
    }
    
    const p1 = new person("John Doe","20");
    p1.display();
    

    static keyword in js (It belongs to class not to the objects of class) you can clearly see it in below example

    
    class User {
            static userCount = 0;
            constructor(Name) {
                    this.Name = Name;
                    User.userCount++;
    }
}

const user1 = new User("John");
const user2 = new User("John");
const user3 = new User("John");
const user4 = new User("John");
const user5 = new User("John");
console.log(User.userCount);

```````````[inheritance in js]``````````` 
class Animal{
        hello() {
                console.log(`Hello i am ${this.name}`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
}

const rabbit = new Rabbit();
rabbit.hello(); 

super keyword is used to call the methods and access the properties of a parent class 

getters and setters in js this._name shows this is a private name property

```````````[Destructuring in java script]``````````` 
-> Array destructuring []
-> Object destructuring {}
1) we can use it to swap values :
Example 1:
let a = 5, b = 10;
[a,b] = [b,a]
console.log(a);
console.log(b);
Example 2:
const colors = ["Red","Blue","Green","White","Black"];
[colors[0],colors[3]] = [colors[3],colors[0]];
console.log(colors);
Example 3:
const colors = ["Red","Blue","Green","White","Black"];
const [firstName,secondName,thirdName, ...Extra] = colors;
console.log(firstName);
console.log(secondName);
console.log(thirdName);
console.log(Extra);
Example 4:
const person1 = {
        firstName: "SpongeBOB",
        lastName: "SquarePants",
        Age : 30,
        job : "Fry Cook",
    }
    
    const person2 = {
            firstName: "Patrick",
            lastName: "Star",
            Age : 34,
        }
        
        const {firstName,lastName,Age,job = "unemployed"} = person1;
        console.log(firstName);
        console.log(lastName);
        console.log(Age);
        console.log(job);
        Example 5
        function display({firstName, lastName, Age, job = "unemployed"}) {
                console.log(firstName);
                console.log(lastName);
                console.log(Age);
                console.log(job);
}


const person1 = {
    firstName: "SpongeBOB",
    lastName: "SquarePants",
    Age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    Age: 34,
}

display(person1);

```````````[Nested Objects in java Script]``````````` 

const person = {
        Name : "John Doe",
        Age: 20,
        FavFood: ["Burger", "Pizza", "Fries"],
        address: {
        Street : "P-90",
        Country : "Pakistan"
    }
}

console.log(person.Name);
console.log(person.Age);
person.FavFood.forEach(food => {
        console.log(food);
    })
    console.log(person.address.Country); how to display nested object in js is shown here
    
    14. Array of objects
    const fruits = [{Name: "Apple", color: "Red"},
                {Name: "Banana", color: "Yellow"}, 
                {Name: "Mango", color: "Dark Yellow"}];

fruits.forEach(fruit => console.log(`Fruit Name: ${fruit.Name}  Color: ${fruit.color}\n`))
Practice Example of reduce method
const numbers = [1,2,3,4,5,6,7,8,9,10];

let maxValue = numbers.reduce((previous , next) => next > previous ? next : previous);

console.log(maxValue);

```````````[Sorting]```````````

const number = [10,9,8,7,6,5,4,3,2,1];
// simply
    number.sort((a,b) => a - b);
// number.sort(sorting);
// through function
// function sorting(a,b) {
        //     return a - b;
        // }
        console.log(number);
    localeCompare() Method is used to sort to string lexicographically
    
    16. Date in java script 
    const date = new Date();
    console.log(date);
    for custom we use this format 
    Date(year, month, day, hour, minute, second, ms)
    
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek= date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);


```````````[setTimeout() in js ,Closures in js nested functions, shuffle in arrays]```````````

```````````[synchronous & asynchronous]```````````
synchronous  =  Executes line by line consecutively in a sequential manner Code 
that waits for an operation to complete.
asynchronous =  Allows multiple operations to be performed concurrently 
without waiting Doesn't block the execution flow and allows 
the program to continue (1/0 operations, network requests, fetching data) 
Handled with: Callbacks, Promises, Async/Await


function func1(callback) { 
        setTimeout(() => { console.log("Task 1"); callback()}, 3000);
    }
    function func2() {
        console.log("Task 2");
        console.log("Task 3");
        console.log("Task 4");
    }
    func1(func2);


````````````[try {}, catch{}, finally{} are used for exceptional handling in js]```````````
        
```````````[Element selectors in js]```````````
element selectors = Methods used to target and manipulate HTML elements
                    They allow you to select one or multiple HTML elements
                    from the DOM (Document Object Model)
                    1. document.getElementById()            ELEMENT OR NULL
                    2. document.getElementsClassName()      HTML COLLECTION
                    3. document.getElementsByTagName()      HTML COLLECTION
                    4. document.querySelector()             FIRST ELEMENT OR NULL
                    5. document.querySelectorAll()          NODE LIST
                   

```````````[Dom navigation in js]```````````
DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.
1. firstElementChild
2 .lastElementChild
3 .nextElementSibling
4 .previousElementSibling
5 .parentElement
6 .children

Example:
Dom Navigation
document.getElementById("").createElement("");
document.body.append();
.insertBefore();
.removeChild();


```````````[Event listeners in js]```````````
mouseover,mouseout,click,keypress
Example: Html show/hide 
const image = document.getElementById('myImg');
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
        if(image.style.visibility === "hidden") {
                image.style.visibility = "visible";
                button.textContent = "Hide";
            }
            else {
                    image.style.visibility = "hidden";
                    button.textContent = "Show";
                }

            });


```````````[Node List is java script]``````````` 
In node list element selector like querySelectorAll(); provide us Node List and we are able to Apply forEach 
on it.

```````````[Class List]```````````
classList = Element property in JavaScript used to interact with 
an element's list of classes (CSS classes) Allows you to make reusable
classes for many elements across your webpage.
add()
remove()
toggle(Remove if present, Add if not)
replace(oldClass, newClass)
contains()

```````````[Call Back]```````````
Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks
to the degree where the code is difficult to read. 
Old pattern to handle asynchronous functions. 
Use Promises + async/await to avoid Callback Hell
Example of call back hell
function task1(callback) {
    setTimeout(() => {
        console.log("Task1 is completed!");
        callback();
    }, 10000);
}
function task2(callback) {
    setTimeout(() => {
        console.log("Task2 is completed!");
        callback();
    }, 7000);
}
function task3(callback) {
    setTimeout(() => {
        console.log("Task3 is completed!");
        callback();
    }, 2000);
}

task1(() =>{
    task2(() => {
        task3(() => {
            console.log("All tasks completed!")
        });
    })
});

```````````[Promises in js]```````````
Promise =   An Object that manages asynchronous operations.
Wrap a Promise Object around (asynchronous code)
            "I promise to return a value"
            PENDING -> RESOLVED or REJECTED
            new Promise((resolve, reject) => {asynchronous code})
            
            Example of promise
            for promise you have to use method chaining
            function task1() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
            isTaskDone = true;
            if(isTaskDone) {
                resolve("Task 1 is completed!");
            }
            else {
                reject("Task 1 is not completed!");
            }
        }, 4000);
    });
}
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isTaskDone = true;
            if(isTaskDone) {
                resolve("Task 2 is completed!");
            }
            else {
                reject("Task 2 is not completed!");
            }
        }, 2000);
    });
}
function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isTaskDone = false;
            if(isTaskDone) {
                resolve("Task 3 is completed!");
            }
            else {
                reject("Task 3 is not completed!");
            }
        }, 5000);
    });;
}

task1().then(value => {console.log(value); return task2()})
.then(value => {console.log(value); return task3()})
.then(value => {console.log(value); console.log("You completed all the task congratulations!")})
.catch(error => console.error(error));


```````````[Async/await in js]```````````
Async/Await =   Async = makes a function return a promise
Await makes an async function wait for a promise
Allows you write asynchronous code in a synchronous manner Async 
doesn't have resolve or reject parameters Everything after Await is 
placed in an event queue
function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isTaskDone = true;
            if(isTaskDone) {
                resolve("Task 1 is completed!");
            }
            else {
                reject("Task 1 is not completed!");
            }
        }, 4000);
    });
}
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isTaskDone = true;
            if(isTaskDone) {
                resolve("Task 2 is completed!");
            }
            else {
                reject("Task 2 is not completed!");
            }
        }, 2000);
    });
}
function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isTaskDone = true;
            if(isTaskDone) {
                resolve("Task 3 is completed!");
            }
            else {
                reject("Task 3 is not completed!");
            }
        }, 5000);
    });;
}

async function doTask() {
    try {
        const firstTask = await task1();
        console.log(firstTask);
        const secondTask = await task2();
        console.log(secondTask);
        const thirdTask = await task3();
        console.log(thirdTask);
        console.log("All task are completed!");
    }
    catch(error) {
        console.error(error);
    }
}

doTask();

*/