"use strict";

let movieContainer = document.querySelector("#movies-container");

/*for default content*/
movieContainer.innerHTML = "";
fetchMostPopularFromApi();

let searchText;
let searchBox = document.querySelector("#search");
let searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", () => {
	searchText = searchBox.value;
	movieContainer.innerHTML = "";
	fetchSearchedFromApi(searchText);
});
window.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		searchText = searchBox.value;
		movieContainer.innerHTML = "";
		fetchSearchedFromApi(searchText);
	}
});
async function fetchSearchedFromApi(searchText) {
	try {
		let fetchData = await fetch(`https://imdb-api.com/en/API/Search/k_gwyhv9bu/${searchText}`);
		let getData = await fetchData.json();
		console.log(getData);
		let movieTitle;
		let movieImageUrl;
		let movieDesc;
		getData.results.forEach((movie) => {
			movieTitle = movie.title;
			movieImageUrl = movie.image;
			movieDesc = movie.description;
			addDataToDom(movieTitle, movieImageUrl, movieDesc);
		});
	} catch (err) {
		movieContainer.innerHTML = "";
		movieContainer.insertAdjacentHTML("beforeend", `<h1>sorry, daily requested API limit is activated for today`);
		console.log("there is a problem", err);
	}
}

let top250 = document.querySelector(".top250");
top250.addEventListener("click", () => {
	movieContainer.innerHTML = "";
	fetchTop250FromApi();
});
async function fetchTop250FromApi() {
	try {
		let fetchData = await fetch(`https://imdb-api.com/en/API/Top250Movies/k_gwyhv9bu`);
		let getData = await fetchData.json();
		console.log(getData);
		let movieTitle;
		let movieImageUrl;
		let movieDesc;
		getData.items.forEach((movie) => {
			movieTitle = `${movie.rank}.${movie.title}`;
			movieImageUrl = movie.image;
			movieDesc = `${movie.year}  rate: ${movie.imDbRating}`;
			addDataToDom(movieTitle, movieImageUrl, movieDesc);
		});
	} catch (err) {
		movieContainer.innerHTML = "";
		movieContainer.insertAdjacentHTML("beforeend", `<h1>sorry, daily requested API limit is activated for today`);
		console.log("there is a problem", err);
	}
}

let mostPopular = document.querySelector(".most-popular");
mostPopular.addEventListener("click", () => {
	movieContainer.innerHTML = "";
	fetchMostPopularFromApi();
});
async function fetchMostPopularFromApi() {
	try {
		let fetchData = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_gwyhv9bu`);
		let getData = await fetchData.json();
		console.log(getData);
		let movieTitle;
		let movieImageUrl;
		let movieDesc;
		getData.items.forEach((movie) => {
			movieTitle = `${movie.rank}.${movie.title}`;
			movieImageUrl = movie.image;
			movieDesc = `${movie.year}  rate: ${movie.imDbRating}`;
			addDataToDom(movieTitle, movieImageUrl, movieDesc);
		});
	} catch (err) {
		movieContainer.innerHTML = "";
		movieContainer.insertAdjacentHTML("beforeend", `<h1>sorry, daily requested API limit is activated for today`);
		console.log("there is a problem", err);
	}
}

let comingSoon = document.querySelector(".coming-soon");
comingSoon.addEventListener("click", () => {
	movieContainer.innerHTML = "";
	fetchComingSoonFromApi();
});
async function fetchComingSoonFromApi() {
	try {
		let fetchData = await fetch(`https://imdb-api.com/en/API/ComingSoon/k_gwyhv9bu`);
		let getData = await fetchData.json();
		console.log(getData);
		let movieTitle;
		let movieImageUrl;
		let movieDesc;
		getData.items.forEach((movie) => {
			movieTitle = `${movie.fullTitle}`;
			movieImageUrl = movie.image;
			movieDesc = `release: ${movie.releaseState}`;
			addDataToDom(movieTitle, movieImageUrl, movieDesc);
		});
	} catch (err) {
		movieContainer.innerHTML = "";
		movieContainer.insertAdjacentHTML("beforeend", `<h1>sorry, daily requested API limit is activated for today`);
		console.log("there is a problem", err);
	}
}

let inTheather = document.querySelector(".in-theaters");
inTheather.addEventListener("click", () => {
	movieContainer.innerHTML = "";
	fetchIntheatherFromApi();
});
async function fetchIntheatherFromApi() {
	try {
		let fetchData = await fetch(`https://imdb-api.com/en/API/InTheaters/k_gwyhv9bu`);
		let getData = await fetchData.json();
		console.log(getData);
		let movieTitle;
		let movieImageUrl;
		let movieDesc;
		getData.items.forEach((movie) => {
			movieTitle = `${movie.fullTitle}`;
			movieImageUrl = movie.image;
			movieDesc = `release: ${movie.releaseState}`;
			addDataToDom(movieTitle, movieImageUrl, movieDesc);
		});
	} catch (err) {
		movieContainer.innerHTML = "";
		movieContainer.insertAdjacentHTML("beforeend", `<h1>sorry, daily requested API limit is activated for today`);
		console.log("there is a problem", err);
	}
}

function addDataToDom(movieTitle, movieImageUrl, movieDesc) {
	movieContainer.insertAdjacentHTML(
		"beforeend",
		`
		<div class="movies">

			<div>
			<img src="${movieImageUrl}" alt="" class="movies-image" />
		    <div class="movies-stars">
		    	<img src="images/star-yellow.png" alt="" class="star" />
		    	<img src="images/star-yellow.png" alt="" class="star" />
		    	<img src="images/star-yellow.png" alt="" class="star" />
		    	<img src="images/star-yellow.png" alt="" class="star" />
		    	<img src="images/star-yellow.png" alt="" class="star" />
		    </div>
			</div>
		    <div class=".title-desc">
				<h4 class="movies-title">${movieTitle}</h4>
		 	    <p class="movies-genre">${movieDesc}</p>
			</div>
	    </div>
		`
	);
}
