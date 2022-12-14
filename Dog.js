
class Dog {
	constructor(data) {
		Object.assign(this, data);
	}
	getDogHtml() {
		const { name, avatar, age, bio } = this;
		return `
            <img class="main-img" src="${avatar}" alt="${name}">
            <p class="main-name">${name}, ${age}</p>
            <p class="main-bio">${bio}</p>
        `;
	}
	setBadge() {
        if (this.hasBeenLiked) {
            return `<img class="badge" id="badge-like" src="/images/badge-like.png" alt="like">`
        } else {
            return `<img class="badge" id="badge-nope" src="/images/badge-nope.png" alt="nope">`
        }
		
	}
}

export default Dog