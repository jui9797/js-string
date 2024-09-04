/**
 * object:{
 * key: value, value contain string, array, object, boolean , number
 * key: value,
 * key: {
 * key : value,
 * key: value,    nested object
 * }
 * 
 * } 
 */

// some example of object declaration
const pen ={
    brand :'econo',
    price :10
}
const pencill =new Object();
console.log(pencill);  //{}

const rubber =Object.create({});
console.log(rubber);   //{}

const person ={
    name :'sharukh khan',
    age :45,
    profession :'actor',
    salary:25000,
    married :true,
}
// console.log(person);

// how to access object property
// dot notetion(.)
// braket notation([])

// dot notation
const access =person.salary;
console.log(access);

// braket notation
console.log(person['age']);

// how to change key value
person.salary =70000;
person['age'] =55;
console.log(person);

// adding new property of an object
person.gender ='male';
person['hobby'] ='acting'
console.log(person);

// how to access property of an object
const computer ={
    brand :'Lenovo',
    price :550000,
    processor :'intel',
    hdd :'512gb'
}
const keys =Object.keys(computer);
console.log(keys);
const values =Object.values(computer);
console.log(values);

// how to access property of nested object
const college ={
    name :'Naogaon govt college',
    class :['11', '12'],
    event :['sciencefair', 'bookfair'],
    unique :{
        color :'blue',
        teachers :30,
    }
}
console.log(college.unique);  //{ color: 'blue', teachers: 30 }
console.log(college.unique.color);   //blue
console.log(college.event[0]);  //sciencefair


// accessing property using loop
const mobile ={
    brand :'Samsung',
    price :25000,
    color :'black',
    camera :'12mp',
}
for(const prop in mobile){
    console.log(prop);  //brand price color camera --- showing key
    console.log(mobile[prop]);  //samsung 25000 black 12mp ---showing value
}

// how to delete object property
delete college.class;
console.log(college);