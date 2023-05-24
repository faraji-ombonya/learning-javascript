# JavaScript Essentials 1



## MODULE 1: INTRODUCTION TO JAVASCRIPT AND COMPUTER PROGRAMMING

## MODULE 2: VARIABLES, DATA TYPES, TYPE CASTING, AND COMMENTS

### lab-variables-6.js

#### Estimated time
15-30 minutes

#### Level of difficulty
Easy

#### Objectives
Familiarize the student with:
* variables (i.e. naming, declaring, initializing and modifying their values)

#### Scenario
Our task will be to create a list of contacts. Initially, the list will be
quite simple: we will only write three people to it using the data shown in
the table below. In the rest of the course, you will return to this script and
systematically extend it with new functionality, using the newly learned
elements of JavaScript.

| Name	| Phone	| Email |
|---|---|---|
| Maxwell Wright | (0191) 719 6495 | Curabitur.egestas.nunc@nonummyac.co.uk |
| Raja Villarreal |	0866 398 2895 |	posuere.vulputate@sed.com |
| Helen Richards | 0800 1111 | libero@convallis.edu |

Declare and initialize the variables where you will store all the information
(nine variables in total). Display in the console information about the first
and last contact in the form: name/phone/email.

### lab-data-types.js

#### Estimated time
15-30 minutes

#### Level of difficulty
Easy

#### Objectives
Familiarize the student with:
* The basic properties of complex data types such as Array and Object (treated 
as a record) and be able to use them in practice.

#### Scenario
Do you remember the contact list you created while doing the task from the
previous Lab? You have to admit that at first glance it looked quite strange.
We had to use nine variables to store information about just three users. 
What's worse, adding each new user would require the creation of three more 
variables. This is neither convenient nor practical. Fortunately, since then
we have learned something about arrays and objects, which will allow us to 
save our list in a slightly more convenient way. Using the same data as in 
the previous Lab, create the contact list as an array, each element of which
will be an object describing a single user. So we should get a three-element
array, and each object placed in it will contain three pieces of information
(name, phone, and email).

At the end of the list declared in this way, add a new contact using the
appropriate array method. 
The new contact is: **Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca**.

Display the first and last contact, again in the 
format: **name / phone / email**. Use the length property of the array to
determine the index of the last element. Remember that the array elements are
indexed starting at 0.


## MODULE 3: OPERATORS AND USER INTERACTION

### lab-interaction

#### Estimated time
15-30 minutes

#### Level of difficulty
Easy

#### Objectives
Familiarize the student with:
* Interacting with the user (dialog boxes – alert, confirm, prompt)

#### Scenario
Let's go back to our contact list. After some recent tweaks (i.e. using an
array and objects) it is actually starting to look like a list. However, one
quite serious problem remained. Changing data in the list, such as adding a
new contact, has to be provided for right away in the program code. What if we
want to give the user the ability to enter the data of the added contact while
the program is running? Modify the program to add, at the end of the list, 
not the contact, which is given in the code, but the one which the user will 
give during the program run. Use the prompt method to do this. At the end, 
display the first and the last contact from the list.


## MODULE 4: CONTROL FLOW – CONDITIONAL EXECUTION AND LOOPS

### lab-conditional-execution

#### Estimated time
15-30 minutes

#### Level of difficulty
Easy

#### Objectives
Familiarize the student with:
* Conditional execution (what is conditional execution, the if–else statement,
  the conditional operator, the switch–case statement)

#### Scenario
During the last modification of the program with the contact list, we allow 
the user to add a new contact with the data entered by the user while the 
program is executing. Let's go a step further – try to modify the program so
that the user has a choice of what they want to do with the list. They will 
have a choice of:
* showing the first contact (first)
* showing the last contact (last)
* adding a new contact (new)
When adding a new contact, check if the user has entered all the necessary
data. If at least one of the three values is missing (name, phone, or email) 
don't add the contact.

### lab-loops

#### Estimated time
15-30 minutes

#### Level of difficulty
Easy

#### Objectives
Familiarize the student with:
* Loops (what are loops, the while loop, the do–while loop, the for loop, the
 for–of loop, the for–in loop, the break and continue statements)

#### Scenario
We can improve our contact list program a bit by using loops. You can now try 
to display not only the first or last contact, but all contacts in the list, 
regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is 
repeatedly asked what they want to do. The user can choose to:
* display the first contact (first)
* display the last contact (last)
* display all contacts (all)
* add a new contact (new)
* exit the program (quit)

After executing the selected action, the program will give the opportunity to 
choose again. The program should end the actions only after the user gives a 
specified command, for example `quit`.


## Module 5: Functions

### Function Tasks

#### Task 1

Arrays in JavaScript have a `sort` method available which, as you might guess,
allows you to sort its elements. This method takes as an argument a function 
that will compare two elements of the array. The function should return zero 
if we consider the arguments to be the same, a value less than zero if we 
consider the first one to be smaller than the second, and a value larger than 
zero otherwise. Take a look at the example:

```
let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if(a > b) {
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]
```

**A.** Try to modify the above piece of code to make it as short as possible. 
Suggestions:

* use an anonymous function;
* use an arrow function;
* consider skipping the `if` statement.

**B.** Then modify the function so that the elements are sorted in descending 
order, not in ascending order as in the example.

#### Task 2

Write three functions with the names add, sub, and mult, which will take two 
numerical arguments. The functions are to check if the given arguments are 
integers (use Number.isInteger). If not, they return NaN, otherwise they 
return the result of addition, subtraction, or multiplication respectively. 
The functions are to be declared using a function statement.

Example of use and expected results:

```
console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
```

#### Task 3

Rewrite the functions from the previous task using an arrow function 
expression, trying to write them in the shortest possible form.

Example of use and expected results:

```
console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN
```

#### Task 4

Write an `action` function that will take the callback function as its 
first argument and the other two arguments as numbers. As a callback 
function, you will be able to pass one of the three functions from the 
previous task. The `action` function will call the callback function 
passed to it and will return the obtained result. The callback function will 
accept the second and third arguments from the action call.

Example of use and expected results:

```
console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
```

#### Task 5

Write a program that will print out (to the console) consecutive integers 10 
times, in two-second intervals (start with the number 1). Use the functions 
setInterval, clearInterval and setTimeout.

Example of use and expected results:

```
1
2
3
4
5
6
7
8
9
10
```

#### Task 6

Write a function that will calculate the n-th element of the Fibonacci 
sequence. So each element of the sequence (except the first two) is the sum 
of the previous two. 
For example: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 and F6 = F5 + F4 = 8. 
The function should use **recursion**. In the definition, use a function 
expression (store an anonymous function in a variable).

Example of use and expected results:

```
console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13
```

#### Task 7

Rewrite the function from **Task 5** using an arrow function expression, but try 
to shorten its code as much as possible (use conditional operators, and try 
not to use additional variables other than the parameter `n`).

#### Task 8

Write an iterative version of the function from **Task 5** (use the `for` loop). 
Declare the function using a function statement.

### lab-functions-1-2

#### Estimated time
30-45 minutes

#### Level of difficulty
Medium

#### Objectives
Familiarize the student with:

* Function basics (what are functions, declaring functions, calling functions,
  local variables, the return statement, function parameters, shadowing);
* Functions as first-class members (function expressions, passing a function 
as a parameter, callbacks);
* Arrow functions (declaring and calling);
* Recursion (basic idea).

#### Scenario
Our program has grown quite a bit, making it a little hard to read. It is 
especially visible in the switch instruction, where most of the logic is 
enclosed. Try to organize your program code by using functions. Define and 
call three functions in the appropriate places:

* `showContact`: the function should take two arguments; the first is the 
list of contacts, and the second is the index number of the contact to display; 
inside the function, check if the correct arguments are passed, that is, if 
the contacts are an array (use the `instanceofArray` construction for this);
* `showAllContacts`: the function should take one argument, the list of 
contacts; inside the function, check if the given argument is an array;
* `addNewContact`: the function should take four arguments, a contact list 
and the data of the new contact, that is: name, phone, and number; before 
adding a new contact, check if the passed argument is an array and if the 
new contact data have any value.

### lab-functions-2-2

#### Estimated time
30-60 minutes

#### Level of difficulty
Medium

#### Objectives
Familiarize the student with:
* Function basics (what are functions, declaring functions, calling functions,
local variables, the return statement, function parameters, shadowing);
* Functions as first-class members (function expressions, passing a function as a parameter, callbacks);
* Arrow functions (declaring and calling);
* Recursion (basic idea).

#### Scenario
We will use the functions to add one more item of functionality. Arrays have a
`sort` method that allows us to sort their elements. To this method, we pass a 
function which should compare two elements of the array and decide which one 
is smaller and which one is bigger. If the first element is smaller, the 
function returns a value less than zero, if they are equal it returns zero, 
and if the first is larger, it returns a value greater than zero. For example, 
the array:

```
let numbers = [10, 50, 40, 20];
```

can be sorted in ascending order with a call:

```
numbers.sort(function (a, b) {
    let retVal = 0;
    if (a > b) {
        retVal = 1;
    } else {
        retVal = -1;
    }
    return retVal;
});

or more simply:

numbers.sort((a, b) => a - b);
```

Give the user the option to select a `sort` action from the list. When this 
option is selected, the user should be able to specify whether they want to 
sort the contacts by name, phone, or email.

