// Variable is storage location which is being provided with specific name,it stores the data which can be further modified during execution of our code.
// we can call it as a container which will store the data what we provide with a labelled name on it
// for instance 
let name1 = "Sanjay";
 
// Here name is the label of variable box which is intiated by variable "let" and Sanjay is the stored data in the box
console.log(name1);
// now if i console log this i will get Sanjay as the output
name1 = "Lakshmikant";
console.log(name1);
// now if i console log this i will get Lakshmikant as the output
const colour = "red";
//  colour = "blue";
console.log(colour);
// this will provide me typeError
// variables declared by let are block scoped and it can be reassigned,Variables declared using const are also block-scoped 
// and cannot be reassigned after they are initialized. However, it's important to note that const does not make the 
// variable's value immutable. It means you cannot reassign the variable, but the data it refers to can still be changed
//  (e.g., properties of an object or elements of an array).
const person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  // Attempting to reassign the variable (will cause an error)
//   person = { firstName: "Jane", lastName: "Smith" };
  
  // Modifying properties of the existing object (allowed)
  person.firstName = "Jane";
  person.lastName = "Smith";
  
  console.log(person); // Output: { firstName: 'Jane', lastName: 'Smith' }
  
  const numbers = [1, 2, 3, 4];

// Attempting to reassign the variable (will cause an error)
// numbers = [5, 6, 7, 8];

// Modifying elements of the existing array (allowed)
numbers[0] = 5;
numbers[1] = 6;

console.log(numbers); // Output: [5, 6, 3, 4]
