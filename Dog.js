class Dog {
	constructor(data) {
		Object.assign(this, data);
	}
	getDogHtml() {
		const { name, avatar, age, bio } = this;
		return `
            <img class="main-img" src="${avatar}" alt="${name}">
            <div class="dog-card">
            <p class="main-name">${name}, ${age}</p>
            <p class="main-bio">${bio}</p>
            <div>
        `;
	}
	setBadgeHtml() {
        if(this.hasBeenSwiped){
            return `<img 
                    class="badge"
                    id="badge-like"
                    src="/images/badge-${this.hasBeenLiked ? "like" : "nope"}.png"
                    alt="dog layer"
                    >`
        }
	}

    setSwipe() {
        this.hasBeenSwiped = true;
    }

    setLike(isLiked) {
        this.hasBeenLiked = isLiked
    }

    setLikeBtnHtml(){
        if(this.hasBeenSwiped){
            return `<button 
                        id="btn-cross"
                        class="btn btn-cross ${this.hasBeenLiked ? "" : "cross"}">
                    </button>
                    <button
                        id="btn-heart"
                        class="btn btn-heart ${this.hasBeenLiked ? "heart" : ""}">
                    </button>`
        } else {
            return `<button 
                        id="btn-cross"
                        class="btn btn-cross">
                    </button>
                    <button
                        id="btn-heart"
                        class="btn btn-heart">
                    </button>`
        }

        
    }

}

export default Dog