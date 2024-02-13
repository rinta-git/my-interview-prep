document.querySelector('#category').addEventListener('click',(e)=>{
    console.log('Parent Triggered from ' + e.target.id)
    if(e.target.tagName == 'LI')
    window.location.href = '/' + e.target.id;
})

document.querySelector('#form').addEventListener('keyup', (e) => {
    if(e.target.dataset.uppercase !== undefined){
        e.target.value = e.target.value.toUpperCase()
    }
})


/**
 * here we are trying to attach an event for multiple elements
 * instead writing event to each one of them attaching event to the parent and achieving the same effect
 */