/**
 * The bind method also used for function borrowing.
 * The only difference in call and bind method is, it is not being called directly
 * the bind method returns a copy of the function. So we can invoke the function later
 * The argument passing is same as call method. 
 * Arguments will be passed as comma seperated values
 * The first arguments will always be the reference to this object.
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

let highestRated = MenuDetails.bind(food,5, 150);
let lowestRated = MenuDetails.bind(food2,3, 250);

highestRated();