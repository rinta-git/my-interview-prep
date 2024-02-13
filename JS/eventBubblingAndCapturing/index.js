//default check
document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
})

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent clicked')
})

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child clicked')
})


/**by default event bubbling would occure
 * output:if click on child
 * 
 * Child clicked
 * Parent clicked
 * Grandparent clicked
 * 
 * 
 * if click on parent:
 * Parent clicked
 * Grandparent clicked
 * 
 * if click on grandParent:
 * Grandparent clicke
 */


//with control
document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
},false)

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent clicked')
},false)

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child clicked')
},false)

/**
 * same default behaviour will occure if control value is false. That is event bubbling
 */



//with control true
document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
},true)

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent clicked')
},true)

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child clicked')
},true)

/**event capturing would occure for true
 * output:if click on child
 * 
 * Grandparent clicked
 * Parent clicked
 * Child clicked
 * 
 * 
 * if click on parent:
 * Grandparent clicked
 * Parent clicked
 * 
 * if click on grandParent:
 * Grandparent clicke
 */