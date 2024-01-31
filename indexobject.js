// Define an object representing a person
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    isStudent: false,
    hobbies: ['reading', 'coding', 'traveling'],
    sayHello: function() {
      console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName + '!');
    }
  };
  
  // Accessing object properties
  console.log(person.firstName); // Output: John
  console.log(person.address.city); // Output: Anytown
  console.log(person.hobbies[1]); // Output: coding
  
  // Modifying object properties
  person.age = 31;
  person.address.city = 'New City';
  person.hobbies.push('gaming');
  
  // Calling a method from the object
  person.sayHello(); // Output: Hello, my name is John Doe!
  