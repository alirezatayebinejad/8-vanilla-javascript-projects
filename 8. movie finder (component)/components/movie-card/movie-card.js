const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="components/movie-card/movie-card.css" />
<div class="movies">
    <img src="images/stranger.jpg" alt="" class="movies-image" />
    <div class="movies-stars">
    	<img src="images/star-yellow.png" alt="" class="star" />
    	<img src="images/star-yellow.png" alt="" class="star" />
    	<img src="images/star-yellow.png" alt="" class="star" />
    	<img src="images/star-yellow.png" alt="" class="star" />
    	<img src="images/star-yellow.png" alt="" class="star" />
    </div>
    <h4 class="movies-title">Stranger Things</h4>
    <p class="movies-genre">sci-fi/comedy</p>
</div>
`;

class MovieCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
window.customElements.define("movie-card", MovieCard);
