
/**
let student = {
    fisrtName:"Rinta",
    lastName:"Roy",
    fullName:function (){
        console.log(this.fisrtName+' '+this.lastName);
    }
}

student.fullName();

let student2 = {
    fisrtName:"Nithin",
    lastName:"K S",
    fullName:function (){
        console.log(this.fisrtName+' '+this.lastName);
    }
}

student2.fullName();

 * here, to display the name of different students rewriting the same method again and again. It is not a good way to do. Here, comes
 * the role of call, apply and bind method.
 */


let student = {
    fisrtName:"Rinta",
    lastName:"Roy",
    fullName:function (){
        console.log(this.fisrtName+' '+this.lastName);
    }
}

student.fullName();

let student2 = {
    fisrtName:"Nithin",
    lastName:"K S",
}

//call method
/**
 * using call method we can borrow a method from one object to another and use it another object with the data of that object.
 * If there is any arguments, it will be passed on call method by separating with comma.
 * The first argument passed will be the refernce to the object, from second onwards the extra arguments will be passed.
 */

student.fullName.call(student2)

//Eg2: use a common method to use in diff object
let food = {
    foodName:"Noodles",
    category:"Asian"    
}

let food2 = {
    foodName:"Pasta",
    category:"Continental"    
}


let foodDetails = function (){
    console.log(this.foodName+' is in '+this.category+' category');
}

foodDetails.call(food);
foodDetails.call(food2);

//Eg3: call method with arguments
let MenuDetails = function (rating, price){
    console.log(this.foodName+' is in '+this.category+' category of rating '+rating+'. Price is '+ price);
}

MenuDetails.call(food,5, 150);
MenuDetails.call(food2,3, 250);