# JavaScript Essentials 1

## lab-variables-6.js

### Estimated time
15-30 minutes

### Level of difficulty
Easy

### Objectives
Familiarize the student with:
* variables (i.e. naming, declaring, initializing and modifying their values)

### Scenario
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

## lab-data-types.js

### Estimated time
15-30 minutes

### Level of difficulty
Easy

### Objectives
Familiarize the student with:
* The basic properties of complex data types such as Array and Object (treated 
as a record) and be able to use them in practice.

### Scenario
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