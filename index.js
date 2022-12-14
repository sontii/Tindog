import dogs from "./data.js";
import Dog from "./Dog.js";

let isWaiting = false;

document.body.addEventListener('click', (e)=> {
    let badge = ''
    if (e.target.id === "btn-heart") {
        dog.hasBeenLiked = true
    } else if (e.target.id === "btn-cross") {
        console.log('ok')
    }
    
    badge = dog.setBadge()
    document.getElementById("badge-wrapper").innerHTML = badge
})

function getNewDog() {
	const nextDogData = dogs.shift()
	return nextDogData ? new Dog(nextDogData) : {};
}

function render() {
	document.getElementById("dog-wrapper").innerHTML = dog.getDogHtml();
}


let dog = getNewDog();
render();