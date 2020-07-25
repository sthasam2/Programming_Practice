console.log(
    "--------------------------\n" +
        " Hello World! JS Practice\n" +
        "--------------------------"
);

// alert("You have a new message");
// // Note: Only works on browser windows

// /**
//  * Variable decleration-------------------------------------------------------------------------
//  * NOTE: variables are dynamic in JS
//  */
// var name = "Sambeg"; //String variable
// console.log(name);

// // Note var declared can be redefined
// name = "Sam";
// console.log(name);
// console.log(typeof(name));

// name = 3;
// console.log(name);
// console.log(typeof(name));

// // other ways of decleartions are 'let' and 'const'
// // let values are local scoped and can be updated, however not redefined
// let name = "Sambeg";
// console.log(name);

// name = 4;
// console.log(name);
// // UPDATING WORKS

// // let name = "Hello";
// // THIS CREATES AN ERROR AS FOLLOWS
// // SyntaxError: Identifier 'name' has already been declared

// // const are as it sounds, they're constants and cant be redefined or updated
// const name1 = "sam";
// console.log(name1);

// name1 = 4;
// // UPDATING DOES MOT WORK AND CREATES FOLLOWING ERROR
// // TypeError: Assignment to constant variable.

// const name1 = "Sam";
// // REDEFINING ALSO DOESNOT WORK AND PRODUCES FOLLOWING ERROR
// // SyntaxError: Identifier 'name1' has already been declared

// // NUMBER VARIABLES
// let a = 35;
// console.log(a); //OUTPUT 35
// a = a + 5;
// console.log(a); //OUTPUT 45

// // OTHER EXPRESSIONS -,*,%,/ USES PRECEDENCE AND ASSOCIATIVITY FOR AMBIGUITY

// /**
//  * CONCATENATING STRING-----------------------------------------------------------------------
//  */
// let fname = "Sambeg";
// let sname = "Shrestha";
// let name = fname + sname; // USE + TO CONCATENATE
// console.log(name); // SambegShrestha
// name = fname + " " + sname;
// console.log(name); // Sambeg Shrestha

// // NOTE: LOG-ING NUMBER CONVERTS NUMBER TO STRING WHILE WORKING ALONGSIDE STRING
// console.log("Hello"+ 2 + 2); // Hello22

// var name = prompt("Name?");

/**
 * CONTROL FLOW STATEMENTS-----------------------------------------------------------------------
 */

// // IF
// var loc = prompt("Where do you live?");
// if (loc === "nepal") {
//     alert("correct");
// }

/**
 *COMPARISION OPERATORS
 * === OR == EQUALITY
 * !== OR != NOT EQUAL
 * > GREATER
 * <
 * >=, <=
 *
 */

// var loc = prompt("Where do you live?");
// if (loc === "nepal") {
//     alert("correct");
// } else if (loc === "Nepal") {
//     alert("thats right");
// } else {
//     alert("not correct");
// }

/**
 * Multiple conditions && AND || OR
 */
// // var loc = prompt("Where do you live?");
// // if (loc === "nepal" || loc === "Nepal") {
// //     alert("correct");
// // } else {
// //     alert("not correct");
// }

/**
 * ARRAYS--------------------------------------------------------------------------------------------
 */
// var cities = ["Kathmandu", "Birgunj", "Lalitpur"];
// console.log(cities[1]);
// console.log(cities[2]);

// // PUSH ADDS TO LAST INDEX OF ARRAY
// cities.push("Bhaktapur");
// console.log(cities[3]);
// console.log(cities);

// // POP REMOVES LAST INDEX
// cities.pop();
// console.log(cities);

// // SHIFT REMOVES FIRST INDEX
// cities.shift();
// console.log(cities);

// // UNSHIFT ADDS TO FIRST INDEX
// cities.unshift("Pokhara");
// console.log(cities);

// // SPLICE ADDS AND REMOVES SPECIFIC INDEXES splice(a,b,object1,object2,...) a->index to add; b-> no of items to remove from index
// cities.splice(1,2, "Makwanpur", "Rasuwa");
// console.log(cities);

/**
 * LOOP FOR---------------------------------------------------------------------------------
 */
// for(var i=1; i<5; i++){
//     for(var j=1; j<i; j++){
//         console.log("*");
//     }
//     console.log("\n");
// }

/**
 * BOOLEAN true, false----------------------------------------------------------------------
 */
// let option = true;
// if (option === true){
//     alert(option);
//     option = false;
// }
// if (option === false){
//     alert(option);
// }

/**
 * ARRAY Length---------------------------------------------------------------
 */
// console.log(cities.length);

/**
 * CHANGING CASE .toLowerCase(), .toUpperCase()
 */
// var hello = "cities c c";
// hello = hello.toUpperCase(); //arrays cannot be sunjected to this method
// console.log(hello);

/**
 * SPLICE--------------------------------------------------------------------------------------
 * Returns a section of a string.
 * start — The index to the beginning of the specified portion of stringObj.
 * end — The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
 */
// let ext = hello.slice(0, 4);
// console.log(ext);
// let search = [2,];

// if (hello.indexOf("C")) {
//     search.push(hello.lastIndexOf("C"));
// }
// console.log(search);

// // REPLACING THE TEXT
// let text = "A mundane day in the life of a mediocre existence";
// let newText = text.replace("a mediocre", "an awesome"); // "" for first instance of string not global
// console.log(newText);

/**
 * ROUNDING NUMBERS-------------------------------------------------------------------------
 * */
// let numb = Math.round(1.5);
// console.log(numb);
// console.log(Math.ceil(0.00943));
// console.log(Math.floor(0.923423));

/**
 * RANDOM NUMBER-----------------------------------------------------------------------------------------
 */
// let bigDecimal = Math.random();
// console.group(bigDecimal);
// let imporvedNumber = bigDecimal * 6 + 1;
// console.log(Math.round(imporvedNumber));

/**
 * STRING TO NUMBERS AND DECIMALS---------------------------------------------------------------------------
 */
// console.log("200" - "100"); // converts string to numbers because of math operator
// console.log("200" - 100); // converts string to numbers because of math operator
// //however,
// console.log("200" + 150); //converts 200 into string then concatenates

// var myInt = parseInt("2342323");
// console.log(typeof myInt + "   " + myInt);

// var myInt = "2342323" ;
// console.log(typeof myInt + "   " + myInt);

/**
 * STRING TO NUM AND VV
 */
// var myInt = "234364.321321431432432";
// var num = Number(myInt);
// console.log(typeof num);

// var string = toString(num);
// console.log(typeof string);

/**
 * CONTROLLING DECIMAL LENGTH------------------------------------------------------------
 */
// var myInt = Number("234364.321321431432432");
// var reduced = myInt.toFixed(2); //NOTE: the method must have prototype NUMBER
// console.log("Original : " + myInt + "\nReduced : " + reduced);

/**
 * DATE---------------------------------------------------
 */
// var currentDate = new Date();
// console.log(typeof currentDate);

// var stringDate = currentDate.toString();
// console.log(currentDate);

// console.log(currentDate.getHours().toString());
// var dayName = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
// console.log(dayName[currentDate.getDay()]);

// --------------------------------------------------------------------------------------------------------------

/**
 * C33 SPECIFYING DATE AND TIME
 */

// let dob = new Date("March 14, 2000");
// let today = new Date();

// let msToday = today.getTime();
// let msDob = dob.getTime();

// let timeDiff = msToday - msDob;
// timeDiff = timeDiff / (1000 * 60 * 60 * 24 * 365); // Gives age
// console.log(timeDiff);

// timeDiff = Math.floor(timeDiff);
// console.log(timeDiff); //Gives rounded age

// console.log(dob.getFullYear());

// // Concise form
// let age = Math.floor(
//     (new Date() - new Date("March 14, 2000 03:15:00")) /
//         (1000 * 3600 * 24 * 365)
// );
// console.log(age);

// --------------------------------------------------------------------------------------------------

/**
 * C34 CHANGING ELEMENTS OF DATE AND TIME (SET)
 */
