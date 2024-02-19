const cars = [{company: 'Maruti', model: 'Alto'}, {company: 'Tata', model: 'Nano'}];
//It is a process of creating a new object that is a copy of an existing object, 
//with its properties referencing the same values or objects as the original.
//this is often achieved using methods like Object.assign() or the spread syntax {...originalObject}
const newCars = [...cars]; //shallow copy
newCars[0].model = 'Swift';  
console.log(newCars); //[{company: 'Maruti', model: 'Swift'}, {company: 'Tata', model: 'Nano'}]
console.log(cars); //[{company: 'Maruti', model: 'Swift'}, {company: 'Tata', model: 'Nano'}]

const cars2 = [{company: 'Maruti', model: 'Alto'}, {company: 'Tata', model: 'Nano'}];
//Deep copying is a technique that creates a new object, 
//which is an exact copy of an existing object. 
//This includes copying all its properties and any nested objects, instead of references.
const newCars2 = JSON.parse(JSON.stringify(cars2)) //deep copying
newCars2[0].model = 'Benz' 
console.log(newCars2); //[{company: 'Maruti', model: 'Benz'}, {company: 'Tata', model: 'Nano'}]
console.log(cars2); //[{company: 'Maruti', model: 'Alto'}, {company: 'Tata', model: 'Nano'}]




