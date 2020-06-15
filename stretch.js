
// 1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions


(function(){
  var a = b = 3;
});
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

//***Even though the variable is within the function, b ends up bing a global variable which links to 3, but when a tries to access B, it cannot because it is in the child scope of the parent function, thus resulting in an undefined state.

//2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

function createBase(num){
    return function(n) {
        return num + n;
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27


console.log(addSix(10));
console.log(addSix(21));


// 3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
/* Functional Programming *** vs *** 
Pros
1.)  variables have to be declared at the top can get messy when globally available 
2.)interfaces for each part of the program are separated so code can load faster and without corruption of inherting something from a parent element
3.) reusability of code blocks is clean since each piece of code is built for a specific purpose.

Cons
1.) code is not as organized and straight forward as OOP when trying to debug a piece of functionality that could rely on more than 1 interface in a program


Object Oriented Programming
Pros
1.)  Parent/Child relationships of inhertiance of objects, arrays, etc make it easier to grasp
2.) Encapsulation
3.) ability for objects, variables, functions to be reused and accessed in different parts of the program.


Cons
1.) inheritance sometimes causes scope/specifity issues
2.) long chains of parent elements causing performance issues when compiling a program if using deeply nested classes

/* 