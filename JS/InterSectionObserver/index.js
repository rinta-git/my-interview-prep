const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver((entires) => {
  entires.forEach((entry) =>
    entry.target.classList.toggle("show", entry.isIntersecting)
  );
},{
    threshold:1
});


const lastCardObserver = new IntersectionObserver(entires => {
    const lastcard = entires[0];
    if(!lastcard.isIntersecting)
    return
    loadNewCards();
    lastCardObserver.unobserve(lastcard.target);
    lastCardObserver.observe(cards[cards.length -1])
},{})

lastCardObserver.observe(cards[cards.length -1])

cards.forEach((card) => observer.observe(card));

const container = document.querySelector(".container")

function loadNewCards(){
    for(let i=0; i<10;i++){
        const card = document.createElement("div");
        card.textContent = "New Card";
        card.classList.add("card");
        observer.observe(card);
        container.append(card)
    }
}