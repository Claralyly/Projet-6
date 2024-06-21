const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Initialise l’index de la diapositive actuelle à 0//
let i = 0;
// Variables//Sélectionne l’élément//
	const img = document.querySelector(".banner-img");
	const txt = document.querySelector("p");
	const dots = document.querySelector(".dots");

// Créez les bullets//
//Parcourt chaque élément du tableau slides//
	slides.forEach((_, index) => {
//Crée un nouvel élément div pour chaque point de navigation//
  	const dot = document.createElement("div");
//Ajoute la classe CSS dot à chaque point//
  	dot.classList.add("dot");
//Ajoute la classe dot_selected au premier point//
  	if (index === 0) dot.classList.add("dot_selected");
//Ajoute chaque point au conteneur dots//
  	dots.appendChild(dot);
});
//Sélectionne tous les éléments de points de navigation créés//
	const dotsEl = dots.querySelectorAll(".dot");
// Déclare une fonction pour mettre à jour la diapositive affichée//
	function updateSlide(index) {
//Met à jour la source de l’image//
  	img.src = "assets/images/slideshow/" + slides[index].image;
//Met à jour le texte de la diapositive//
  	txt.innerHTML = slides[index].tagLine;
//Parcourt chaque point de navigation//Ajoute ou retire la classe dot_selected en fonction de l’index actuel.
  	dotsEl.forEach((dot, idx) => dot.classList.toggle("dot_selected", idx === index));
}
// Ajoute un écouteur d'événement pour le clic sur la flèche gauche //
	document.querySelector(".arrow_left").addEventListener("click", () => {
// Incrémente l’index ou le remet à 0 si l’index est à la dernière diapositive//
  	i = (i > 0) ? i - 1 : slides.length - 1;
// mettre à jour la diapositive //
  updateSlide(i);
});
// Ajoute un écouteur d'événement pour le clic sur la flèche droite //
	document.querySelector(".arrow_right").addEventListener("click", () => {
//Incrémente l’index ou le remet à 0 si l’index est à la dernière diapositive//
  	i = (i < slides.length - 1) ? i + 1 : 0;
// mettre à jour la diapositive //
  updateSlide(i);
});
