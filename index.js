import dogs from "./data.js";
import Dog from "./Dog.js";

let isWaiting = false;

document.body.addEventListener('click', (e)=> {
    if (e.target.id === "btn-heart") {
        chooseDog(true)
    } else if (e.target.id === "btn-cross") {
        chooseDog(false);
    }

})

function chooseDog(isLiked){
    if(!isWaiting){
        isWaiting = true;
        dog.setSwipe()
        dog.setLike(isLiked)
        getLike()
        setTimeout(() => {
            dogs.push(dog)
            dog = getNewDog();			
            render();
            isWaiting = false;
        }, 2000);       
    }
}

function getLike(){
    document.getElementById('footer').innerHTML = dog.setLikeBtnHtml()
    document.getElementById('badge-wrapper').innerHTML = dog.setBadgeHtml()
}

function getNewDog() {
	const nextDogData = dogs.shift()
	return new Dog(nextDogData)
}

function render() {
	document.getElementById("dog-wrapper").innerHTML = dog.getDogHtml()
    document.getElementById("footer").innerHTML = dog.setLikeBtnHtml()
	document.getElementById("badge-wrapper").innerHTML = dog.setBadgeHtml()
}

let dog = getNewDog()
render()