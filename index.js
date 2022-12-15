import dogs from "./data.js";
import Dog from "./Dog.js";

let isWaiting = false;

const badgeWrapper = document.getElementById("badge-wrapper");
const btnHeart = document.getElementById("btn-heart")
const btnCross = document.getElementById("btn-cross")

document.body.addEventListener('click', (e)=> {
    if (e.target.id === "btn-heart") {
        chooseDog(true)
    } else if (e.target.id === "btn-cross") {
        chooseDog(false)
    }
})

console.log(btnCross, btnHeart)

function chooseDog(liked){
    if(liked){
        dog.hasBeenLiked = true;
        btnHeart.classList.add = "heart";
		btnCross.classList.remove = "cross";
    } else {
        dog.hasBeenLiked = false
        btnHeart.classList.remove = "heart";
		btnCross.classList.add = "cross";
    }
    if(!isWaiting){
        dog.hasBeenSwiped = true
        badgeWrapper.innerHTML = dog.setBadge();
        isWaiting = true;
            
        setTimeout(() => {
            dog = getNewDog();
            if (dog.hasBeenSwiped){
                badgeWrapper.innerHTML = dog.setBadge();
                if(dog.hasBeenLiked){
                    btnHeart.classList.add = 'heart'
                    btnCross.classList.remove = 'cross'
                } else {
                    btnHeart.classList.remove = "heart";
					btnCross.classList.add = "cross";
                } 
                
            } else {
                badgeWrapper.innerHTML = "";
                btnHeart.classList.remove = "heart";
				btnCross.classList.remove = "cross";
            }
							
            render();
            isWaiting = false;
        }, 2000);       
    }
}

function getNewDog() {
	const nextDogData = dogs.shift()
	return nextDogData ? new Dog(nextDogData) : {};
}

function render() {
	document.getElementById("dog-wrapper").innerHTML = dog.getDogHtml();
}

let dog = getNewDog();
render();