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
 // variable blogale //
 //Sélectionne l’élément avec la classe dots et le stocke dans la variable dots.
 			//const dots = document.querySelector(".dots");

 //Sélectionne l’élément avec la classe “arrow_right” et le stocke dans la variable arrowRight
 			//const arrowRight = document.querySelector(".arrow_right");

 //Sélectionne l’élément avec la classe “arrow_left” et le stocke dans la variable arrowLeft
 			//const arrowLeft = document.querySelector(".arrow_left");

 //Sélectionne l’élément avec la classe “banner-img” et le stocke dans la variable img
 			//const img = document.querySelector(".banner-img");

 //Sélectionne l’élément avec la classe “banner-p” et le stocke dans la variable p
 			//const p = document.querySelector(".banner-p");

 //Initialise la variable index à 0. Cette variable sera utilisée pour suivre l’index actuel du diaporama.
 			//let index = 0

 //Déclare une fonction main qui appelle trois autres fonctions : displayDots, clickRight, et clickleft.
 				//function main() {
	 			//displayDots();
	 			//clickRight();   
	 			//clickleft();
 		//}
// Appelle la fonction main pour exécuter le code
 				//main();

 // afficher des dots // Déclare une fonction displayDots qui crée et affiche des “dots” (points) pour chaque diapositive
 			//function displayDots () {

//Boucle à travers chaque élément de arrayslides
  			//for (let i = 0; i < slides.length; i++) {

//Crée un nouvel élément div et le stocke dans la variable dot
  			//const dot = document.createElement("div");

//Ajoute la classe “dot” à l’élément dot.
  			//dot.classList.add("dot");

  //Ajoute l’élément dot comme enfant de l’élément dots
 			 //dots.appendChild(dot);

  //Si l’index de la boucle est égal à index, ajoute la classe “dot_selected” à l’élément dot
 				//if (i == index) {
  				//dot.classList.add("dot_selected");

  				//console.log(displayDots)//
 		//}
 		//}
 		//}
 
 // affichage clique droit //Déclare une fonction clickRight qui gère le clic sur la flèche droite
 				//function clickRight() {

//Ajoute un écouteur d’événement pour le clic sur arrowRight
	 			//arrowRight.addEventListener("click", () => {

//Sélectionne tous les éléments avec la classe “dot” à l’intérieur de dots
		 			//const Dots = document.querySelectorAll(".dots .dot");

//Retire la classe “dot_selected” de l’élément dot actuel
		 		//Dots[index].classList.remove("dot_selected");

//Incrémente index de 1
		 		//index++;
		 
		 			//console.log(img);//
//Si index dépasse la longueur de arrayslides, le réinitialise à 0
		 		//if (index > slides.length -1) {
			 		//index = 0;
		 		//}
//Ajoute la classe “dot_selected” au nouvel élément dot
		 		//Dots[index].classList.add("dot_selected");

//Change la source de l’image pour afficher la nouvelle diapositive.
	 		//img.src = "assets/images/slideshow/" + slides[index].image;

	 			//console.log("Right");//
 		//});
		//}


// affichage clique gauche //Déclare une fonction clickleft qui gère le clic sur la flèche gauche.
		//function clickleft() {

//Ajoute un écouteur d’événement pour le clic sur arrowLeft
 				//arrowLeft.addEventListener("click", () => {
				//const Dots = document.querySelectorAll(".dots .dot");
				//Dots[index].classList.remove("dot_selected");

//Décrémente index de 1.
	 				//index--;
	 
	 				//console.log(img);//
//Si index est inférieur à 0, le réinitialise à la dernière diapositive.
					//if (index < 0) {
						//index = slides.length -1;
					//}
					//Dots[index].classList.add("dot_selected");
				//img.src = "assets/images/slideshow/" + slides[index].image;

//Change le texte de l’élément p pour afficher la nouvelle légende.
					//p.textContent = slides[index].tagLine;

					//console.log("Right");//
					//});
					//}



 
