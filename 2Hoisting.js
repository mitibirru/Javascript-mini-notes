/* 
    Hoisting is the default behaviour of javascript where all the variable and function
    declarations are moved on top.
    This means that irrespective of where the variables and functions are declared, they
    are moved on top of the scope. The scope can be both local and global.
*/

/* 
    Note - Variable initializations are not hoisted, only variable declarations are
    hoisted:
*/

/* 
    Note - To avoid hoisting, you can run javascript in strict mode by using “use
    strict” on top of the code
*/

// Example 1
hoistedVariable = 2;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it
var hoistedVariable;

// Example 2
hoistedFunction(); // Outputs " Hello world! " even when the function is declared after

function hoistedFunction() {
  console.log("Hoisted function");
}

// Hoisting takes place in the local scope as well
function doSomething() {
  x = 33;
  console.log(x);
  var x;
}
