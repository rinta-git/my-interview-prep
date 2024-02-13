const cart = ['shoes','bag','bottle'];

const promise = createCart(cart);


promise.then(function (orderId){
    console.log(orderId)
})
.catch(function (e){
    console.log(e.message)
})



function createCart(cart){
    const promise = new Promise(function (resolve, reject){
        //somelogic
        
        if(!validCart(cart)){
            const err = new Error('cart is not valid');
            reject(err);
        }
        
        const orderId = 123;

        if(orderId && validCart(cart)){
            resolve(orderId)
        }
    })
    return promise;
}



function validCart(cart){
    return false;
}