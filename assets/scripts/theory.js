const movieList = document.getElementById('movie-list');
movieList.style['background-color'] = 'red'; // you can use square brackets with quotation marks to access a css property like that instead of camel case
movieList.style.display = 'block';

const userChosenKeyName = 'level'; // You can dynamically set properties with square brackets

const person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]: '...',
    greet: function() {
        alert('Hi there!')
    },
    1.5: 'hello'
};

// person.age = 31; // you can change the value
delete person.age; // Deletes that property from an object
// person.age = undefined; // Usually you don't set values to undefined. 
//person.age = null; // removes a value, but doesn't get rid of the property in contrast to undefined
person.isAdmin = true; // You can add new properties like that directly with dot notation

const keyName = 'first name';

console.log(person[keyName]); 
// You access the first name key by using square brackets with quotation marks
console.log(person[1.5]);
// You can specify numbers as keys, that's allowed. You access them with square brackets as well. 
console.log(person);


// The object spread operator

const person = {
    name: 'Max',
    hobbies: ['Sports', 'Cooking']
};

const anotherPerson = person;

person.age = 30;
console.log(anotherPerson);

const person2 = {...person};
person.age = 31;
console.log(person2);

person.hobbies.push('Coding');
console.log(person2);

// You can copy an array 

const person3 = {...person, age: 29, hobbies: [...person.hobbies] };
console.log(person, person3);

person.hobbies.pop();
console.log(person, person3);

// You can also use Object.assign({}, person) instead of the spread operator to copy the object. Better browser support.


// If something exists in an object, you can use the in word.
