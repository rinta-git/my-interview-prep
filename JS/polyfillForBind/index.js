let fullName = {
    fName:'Rinta',
    lName:'Roy'
}

//without arguments
let displayName = function (){
    console.log(this.fName+' '+this.lName);
}


Function.prototype.myBind = function (...args){
    let obj = this;
    return function (){
        obj.call(args[0])
    }
}

let print = displayName.myBind(fullName);
print();


//with multiple arguments
let displayNameAndPlace = function (place,age){
    console.log(this.fName+' '+this.lName+' from '+place+' of age '+age);
}

Function.prototype.myBindWithOneArgument = function (...args){
    let obj = this;
    let params = args.slice(1);
    return function (){
        obj.apply(args[0],params)
    }
}

let printDetails = displayNameAndPlace.myBindWithOneArgument(fullName,'Kottayam',27);
printDetails();


//with argument passed from copied function call
let displayDetails = function (place,state){
    console.log(this.fName+' '+this.lName+' from '+place+', '+state);
}

Function.prototype.myBindWithOneArgument = function (...args){
    let obj = this;
    let params = args.slice(1);
    return function (...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

let details = displayDetails.myBindWithOneArgument(fullName,'Kottayam');
details('Kerala');

//explanation is in the notebook