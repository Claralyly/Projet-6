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
//VERSION LONGUE
//const dots = document.querySelector(".dots");
Sélectionne l’élément avec la classe “dots” et le stocke dans la variable dots.
//const arrowRight = document.querySelector(".arrow_right");
//Sélectionne l’élément avec la classe “arrow_right” et le stocke dans la variable arrowRight.
//const arrowLeft = document.querySelector(".arrow_left");
//Sélectionne l’élément avec la classe “arrow_left” et le stocke dans la variable arrowLeft.
//const img = document.querySelector(".banner-img");
Sélectionne l’élément avec la classe “banner-img” et le stocke dans la variable img.
//const p = document.querySelector(".banner-p");
Sélectionne l’élément avec la classe “banner-p” et le stocke dans la variable p.
//let index = 0;
//Initialise la variable index à 0. Cette variable sera utilisée pour suivre l’index actuel du diaporama.
//function main() { displayDots(); clickRight(); clickleft(); }
//Déclare une fonction main qui appelle trois autres fonctions : displayDots, clickRight, et clickleft.
//main();
//Appelle la fonction main pour exécuter le code.
//function displayDots () { ... }
//Déclare une fonction displayDots qui crée et affiche des “dots” (points) pour chaque diapositive.
//for (let i = 0; i < arrayslides.length; i++) { ... }
//Boucle à travers chaque élément de arrayslides.
//const dot = document.createElement("div");
//Crée un nouvel élément div et le stocke dans la variable dot.
//dot.classList.add("dot");
//Ajoute la classe “dot” à l’élément dot.
//dots.appendChild(dot);
//Ajoute l’élément dot comme enfant de l’élément dots.
//if (i == index) { dot.classList.add("dot_selected"); }
//Si l’index de la boucle est égal à index, ajoute la classe “dot_selected” à l’élément dot.
//function clickRight() { ... }
//Déclare une fonction clickRight qui gère le clic sur la flèche droite.
//arrowRight.addEventListener("click", () => { ... });
//Ajoute un écouteur d’événement pour le clic sur arrowRight.
//const arrayDots = document.querySelectorAll(".dots .dot");
//Sélectionne tous les éléments avec la classe “dot” à l’intérieur de dots.
//arrayDots[index].classList.remove("dot_selected");
//Retire la classe “dot_selected” de l’élément dot actuel.
//index++;
//Incrémente index de 1.
//if (index > arrayslides.length -1) { index = 0; }
//Si index dépasse la longueur de arrayslides, le réinitialise à 0.
//arrayDots[index].classList.add("dot_selected");
//Ajoute la classe “dot_selected” au nouvel élément dot.
//img.src = "assets/images/slideshow/" + arrayslides[index].image;
//Change la source de l’image pour afficher la nouvelle diapositive.
//function clickleft() { ... }
//Déclare une fonction clickleft qui gère le clic sur la flèche gauche.
//arrowLeft.addEventListener("click", () => { ... });
//Ajoute un écouteur d’événement pour le clic sur arrowLeft.
//index--;
//Décrémente index de 1.
//if (index < 0) { index = arrayslides.length -1; }
//Si index est inférieur à 0, le réinitialise à la dernière diapositive.
//p.textContent = arrayslides[index].tagLine;
//Change le texte de l’élément p pour afficher la nouvelle légende.
