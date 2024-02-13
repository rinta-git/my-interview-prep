let arr = [10, 22, 1, 2, 110, 5]

//find sum
let sum = arr.reduce(function (acc, curr){
    acc += curr;
    return acc;
},0)

console.log(sum)

//find max
let max = arr.reduce(function (acc, curr){
    if(acc < curr)
        acc = curr;
    return acc;
},0)

console.log(max)

let usersList = [
    {fname:'Rinta', lname:'Roy', age:27},
    {fname:'Nithin', lname:'K S', age:28},
    {fname:'Ridhalaya', lname:'Shruthi', age:27},
    {fname:'Ajhkj', lname:'GDG', age:28},
    {fname:'SGH', lname:'K S', age:28},
]

//get the age and number of users who has the same age like {27:2, 28:1}
let ageCount = usersList.reduce(function (acc, curr){  
    if(acc[curr.age])
        acc[curr.age] = ++acc[curr.age];
    else
        acc[curr.age] = 1;
    return acc;
},{})

console.log(ageCount)


let students = [
    {fname:'Rinta', lname:'Roy', age:27},
    {fname:'Nithin', lname:'K S', age:32},
    {fname:'Ridhalaya', lname:'Shruthi', age:27},
    {fname:'Ajhkj', lname:'GDG', age:53},
    {fname:'SGH', lname:'K S', age:10},
]

//get the firstname of users whose name is < 30
let out = students.reduce(function (acc,curr){
    if(curr.age < 30)
     acc.push(curr.fname)
    return acc;
},[])
console.log(out)