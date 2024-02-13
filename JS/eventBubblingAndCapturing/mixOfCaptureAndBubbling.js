document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
},true) //event capturing

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent clicked')
},false) //event bubbling

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child clicked')
},true) //event capturing


/**
 * if click on child:-
 * Grandparent clicked
 * Child clicked
 * Parent clicked
 * 
 * as per the w3c cycle the event capturing will occure first then go to bubbling
 * so first it goes grandparent and see its capturing so graparent will be printed
 * then goes to parent see it is bubbling so it skip that and moves to child
 * then print child clicked as it is also capturing
 * then goes to bubbling and print parent clicked
 * 
 * 
 * if click on grandParent:-
 * Grandparent clicked
 * 
 * if click on parent:-
 * Grandparent clicked
 * Parent clicked
 */


document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
},true) //event capturing

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent clicked')
},false) //event bubbling

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child clicked')
},false) //event bubbling


/**
 * if click on child:-
 * Grandparent clicked
 * Child clicked
 * Parent clicked
 * 
 * if click on grandParent:-
 * Grandparent clicked
 * 
 * if click on parent:-
 * Grandparent clicked
 * Parent clicked
 */


document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
},true) //event capturing

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent clicked')
},true) //event capturing

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child clicked')
},false) //event bubbling


/**
 * if click on child:-
 * Grandparent clicked
 * Parent clicked
 * Child clicked
 * 
 * if click on grandParent:-
 * Grandparent clicked
 * 
 * if click on parent:-
 * Grandparent clicked
 * Parent clicked
 */


document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
},false) //event bubbling

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent clicked')
},true) //event capturing

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child clicked')
},true) //event capturing


/**
 * if click on child:-
 * Parent clicked
 * Child clicked
 * Grandparent clicked
 * 
 * if click on grandParent:-
 * Grandparent clicked
 * 
 * if click on parent:-
 * Parent clicked
 * Grandparent clicked
 */


document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log('Grandparent clicked')
},false) //event bubbling

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent clicked')
},true) //event capturing

document.querySelector('#child').addEventListener('click', ()=>{
    console.log('Child clicked')
},false) //event bubbling

/**
 * if click on child:-
 * Parent clicked
 * Child clicked
 * Grandparent clicked
 * 
 * if click on grandParent:-
 * Grandparent clicked
 * 
 * if click on parent:-
 * Parent clicked
 * Grandparent clicked
 */