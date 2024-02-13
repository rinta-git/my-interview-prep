/**
 * The apply method also used for function borrowing
 * The only difference in call and apply method is in passing the arguments
 * The first argument in apply is the reference to this 
 * The second argument will be an array where we can pass extra arugement as array elements
 */

let food = {
    foodName:"Noodles",
    category:"Asian"    
}

let food2 = {
    foodName:"Pasta",
    category:"Continental"    
}


let MenuDetails = function (rating, price){
    console.log(this.foodName+' is in '+this.category+' category of rating '+rating+'. Price is '+ price);
}

MenuDetails.apply(food,[5, 150]);
MenuDetails.apply(food2,[3, 250]);