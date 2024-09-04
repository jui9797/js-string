// string
// ' ' quotetion or " " quotetion ar vitore value thake ai type ar variable k string bole.
// the way to declare string
/**
 * single quote(' ')
 * duble quote(" ")
 * backtrik(` `)
 * new String('name')
 */

// string length
const capital ='Dhaka';
console.log(capital.length);  //output:5

// string works like array
// string index
const city ='Rajshahi';
console.log(city[5]);   //a

// string is imutable variable .so we cannot change any element of a string.
// upperccase (toLowerCase())
// lowercase (toUpperCase())
const school ='girls high school';
console.log(school.toLowerCase()); //girls high school
console.log(school.toUpperCase());  //GIRL HIGH SCHOOL


// .trim method
let white ='   white    ';
console.log(white.trim());  //white

const drink ='  water  '
const liquid ='  water  '
if(drink.trim() === liquid.trim()){
    console.log('same word')

}
else{
    console.log('not match')
}

// string compearing
const subject ='chemistry'
const book ='Chemistry'
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('subject = book')
}
else{
    console.log('not match')
}

// slice method
const adress ='naogaon'
const part =adress.slice(2, 4);
console.log(part)   //og

// split method
const sentence ='I am learning web development'
console.log(sentence.split(' ')) //[ 'I', 'am', 'learning', 'web', 'development' ]

const frinds ='rahim, karim, dalim, halim'
console.log(frinds.split(',')) //[ 'rahim', ' karim', ' dalim', ' halim' ]
console.log(frinds.split('a')) //[ 'r', 'him, k', 'rim, d', 'lim, h', 'lim' ]

// join method
const first ='Abid'
const scond ='nakib'
const third ='rokib'
const fullName =first+scond;
console.log(fullName); //Abidnakib
const full_name =first +"-" +scond + "-" + third;
console.log(full_name); //Abid-nakib-rokib



// array convert to a string
// Array of strings
const words = ["Hello", "world", "welcome", "to", "JavaScript"];

const sentence1 = words.join(" ");
console.log(sentence1);  //Hello world welcome to JavaScript

// string convert to an array
const word1 ='Hello world welcome to JavaScript';
console.log(word1.split(' ')); //[ 'Hello', 'world', 'welcome', 'to', 'JavaScript' ]




