let arr = [10, 22, 1, 2, 110, 5]

//odd numbers
let odd = function (item){
    return item % 2;
}

let result = arr.filter(odd)
console.log(result)

//even numbers
let even = arr.filter(item => item%2 === 0)
console.log(even)

//greater than 10
let greater = arr.filter(item => {
    return item > 10;
})
console.log(greater)

//less than 10
let less = arr.filter(function (item){
    return item < 10;
})
console.log(less)

let usersList = [
    {fname:'Rinta', lname:'Roy', age:27},
    {fname:'Nithin', lname:'K S', age:32},
    {fname:'Ridhalaya', lname:'Shruthi', age:27},
    {fname:'Ajhkj', lname:'GDG', age:53},
    {fname:'SGH', lname:'K S', age:10},
]

//get the firstname of users whose name is < 30

let filtered = usersList.filter(item => item.age < 30).map(x => x.fname)
console.log(filtered)