1. What is the difference between var, let, and const?
   Ans:

var : var is function-scoped, can be redeclared and reassigned.
let : let is block-scoped, can be reassigned but not redeclared in the same scope.
const :const is block-scoped and cannot be reassigned or redeclared, but objects it points to can still be modified.

2. What is the difference between map(), forEach(), and filter()?
   Ans.
   forEach(): Loops through an array, executes a function for each element, does not return anything.
   map(): Loops through an array, executes a function, and returns a new array of the results.
   filter(): Loops through an array, returns a new array with only elements that pass a given condition.

3. What are arrow functions in ES6?
   Ans: Arrow functions are a concise ES6 syntax for writing functions(=>) that
   lexically bind this.
   Ex: const add = (a, b) => a + b;

4. How does destructuring assignment work in ES6?
   Ans: Destructuring assignment in ES6 extracts values from arrays or objects into separate variables in a single, concise statement.
   Ex:
   <!-- Array destructuring -->

   const [x,y] = [2,4];

   <!--obj destructuring -->

   const {name, age} = {name : "maria", age: 20};

5. Explain template literals in ES6. How are they different from string concatenation?
   Ans: Template literals use backticks (`` ` ``) to create strings with embedded variables (`${}`) and multi-line support.
   The difference is that  string concatenation uses `+` to join strings, which can get messy with multiple variables, while template literals.

