let user1 = {
    name:'Amala',
    city:'Kottayam'
}

let user2 = {
    name:'Aiswarya',
    city:'Ernakulam'
}

let user3 = {
    name:'Rinta',
    city:'Chennai'
}

let printUserDetails = function (state, country){
    console.log(`${this.name} from ${this.city}, ${state} in ${country}`)
}

printUserDetails.call(user1, 'Kerala','India')

//scope will have the user2 obj
//by assigning this to scope, the user obj will have another key _this with value as function defenition
    //so calling that function will point to its local obj props which includes, name, city, _this
Function.prototype.customCall = function (scope,...args){
    scope._this = this;
    return scope._this(...args)
}

console.log(printUserDetails.customCall(user2, 'Kerala', 'India'))
