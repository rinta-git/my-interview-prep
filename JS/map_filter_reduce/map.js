let arr = [10, 22, 1, 2, 110, 5]

//double of numbers
let double = function (item){
    return item * 2;
}

let result = arr.map(double)
console.log(result)

//triple of numbers
let tripple = arr.map(item => item*3)
console.log(tripple)

//binary of numbers
let binary = arr.map(item => {
    return item.toString(2);
})
console.log(binary)



let usersList = [
    {fname:'Rinta', lname:'Roy', age:27},
    {fname:'Nithin', lname:'K S', age:28},
    {fname:'Ridhalaya', lname:'Shruthi', age:27}
]

//get Fullname in array

let fullName = usersList.map(item => item.fname+' '+item.lname)
console.log(fullName)