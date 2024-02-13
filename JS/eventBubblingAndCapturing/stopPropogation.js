document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
},false) //event bubbling

document.querySelector('#parent').addEventListener('click', (e)=>{
    console.log('Parent clicked')
    e.stopPropagation();
},false) //event bubbling

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child clicked')
},false) //event bubbling

/**
 * output:if click on child
 * child clicked 
 * Parent clicked
 */


document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
},false) //event bubbling

document.querySelector('#parent').addEventListener('click', (e)=>{
    console.log('Parent clicked')    
},false) //event bubbling

document.querySelector('#child').addEventListener('click', (e)=>{
    console.log('Child clicked')
    e.stopPropagation();
},false) //event bubbling

/**
 * output:if click on child
 * child clicked 
 */

document.querySelector('#grandParent').addEventListener('click', (e)=>{
    console.log('Grandparent clicked')
    e.stopPropagation();
},true) //event capturing

document.querySelector('#parent').addEventListener('click', (e)=>{
    console.log('Parent clicked')    
},true) //event capturing

document.querySelector('#child').addEventListener('click', (e)=>{
    console.log('Child clicked')    
},true) //event capturing

/**
 * output:if click on child
 * grandParent clicked
 */