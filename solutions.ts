// Problem 1 

const filterEvenNumbers = (numbers: number[]) => {
    return numbers.filter(num => num % 2 === 0);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Problem 2
const reverseString = (value: string) => {
    return value.split("").reverse().join("");
}

reverseString("typescript");

// Problem 3

const checkType = ( val : string | Number ) => { 
    if ( typeof val === "string"){ 
        return "String"; 
    } 
    else if( typeof val === "number"){ 
        return "Number"; 
    } 
} 

checkType("Hello");


// Problem 4
const user = { id: 1, name: "John Doe", age: 21 };

function getProperty<obj, K extends keyof obj>(obj: obj, key: K): obj[K] {
  return obj[key];
}

// Sample Input
const result = getProperty(user, "name");



// Problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const myBook :Book = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

const toggleReadStatus = (book: Book) => {

    let isRead : boolean = true;

    let newBook = { ...book , isRead };
    
    return newBook;

    
}
toggleReadStatus(myBook);


//problem 6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// // Sample Input
const student = new Student("Alice", 20, "A");

student.getDetails();


// Problem 7


const getIntersection = (arr1: number[], arr2: number[]) => {
    return arr1.filter(num => arr2.includes(num));
}

getIntersection([1,2,3,4,5], [2,4,6,8,10]);

