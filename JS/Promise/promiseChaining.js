const cart = ['shoes','bag','bottle'];

createCart(cart)
.then(function (orderId){
    console.log(orderId)
    return orderId;
})
.then(function (orderId){
  return  proceedToPayment(orderId)
})
.then(function (paymentInfo){
    console.log(paymentInfo)
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
    return true;
}

function proceedToPayment(orderId){
    const promise = new Promise(function (resolve, reject){
        //somelogic
        
        if(!validCart(cart)){
            const err = new Error('cart is not valid');
            reject(err);
        }
        
        const paymentInfo = 'payment Success';

        if(paymentInfo && validCart(cart)){
            resolve(paymentInfo)
        }
    })
    return promise;
}