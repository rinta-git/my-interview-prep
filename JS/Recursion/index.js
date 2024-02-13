let user = {
    fullName:'Rinta Roy',
    address :{
        personal: {
            city: 'Kottayam',
            state: 'Kerala',
            area: {
                landMark: 'Capuchin Vidhyabhavan Thellakom'
            }
        },
        office: {
            city: 'Chennai',
            state: 'Tamil Nadu'
        }
    }
}

/**Task 1
 * Get the output:
        let result = {
            user_fullName : 'Rinta Roy',
            user_address_personal_city : 'Kottayam',
            user_address_personal_state : 'Kerala',
            user_address_personal_area_landMark : 'Capuchin Vidhyabhavan Thellakom',
            user_address_office_city : 'Chennai',
            user_address_office_state : 'Tamil Nadu'
        }
 */



/**
 * Traverse through the object
 * check whether the keys value is an object or not
 *  if it is an object 
 *      pass the value of that key, that is nested object as first argument and call the method
 *      pass second argument as the parent name plus the key separated with _.
 *  If it is not an object
 *      assign the value to result object with key name as all the outer parent name separated by _.
 */
let result = {};
let flattenedObject = (obj, parent) => {
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            flattenedObject(obj[key], parent+'_'+key);
        }
        else{
            result[parent+'_'+key] = obj[key];
        }
    }
}
flattenedObject(user, 'user')
console.log(result)




/**Task 2
 * Get the output:
        let result = {
            user>fullName : 'Rinta Roy',
            user>city1 : 'Kottayam',
            user>state1 : 'Kerala',
            user>landMark : 'Capuchin Vidhyabhavan Thellakom',
            user>city2 : 'Chennai',
            user>state2 : 'Tamil Nadu'
        }
 */


let result2 = {};
let flattenedObject2 = (obj) => {
    
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            flattenedObject2(obj[key]);
        }
        else{
            if(!result2.hasOwnProperty('user>'+key)){
                result2['user>'+key] = obj[key];
            }
            else{
                result2['user>'+key+'2'] = obj[key];
            }
        }
    }
}
flattenedObject2(user)
console.log('--------------------------')
console.log(result2)


/**Task 3
 * Write a function called contains that searches for a value in a nested object. 
 * It returns true if the object contains that value.
 */
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


let found = false;
let contains = function (obj, value){
    
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            contains(obj[key],value)
        }
        else{
            if(obj[key] === value){
                found = true;
                break;
            }
        }
    }
    return found;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt);
console.log(doesntHaveIt);