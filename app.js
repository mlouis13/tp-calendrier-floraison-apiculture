const form = document.querySelector("form");
const container = document.querySelector("#mon-conteneur");
const URL = "http://10.69.4.8:3001/v1";
let month = [
	"janvier",
	"fevrier",
	"mars",
	"avril",
	"mai",
	"juin",
	"juillet",
	"aout",
	"septembre",
	"octobre",
	"novembre",
	"decembre",
];
form.addEventListener("click", (e) => {
	e.preventDefault();
	searchAPI();
});
async function searchAPI() {
	const response = await fetch(URL + "/flowers");
	const responseJS = await response.json();
	console.log(responseJS);
	container.innerHTML = "";
	for (let i = 0; i < responseJS.length; i++) {
		const secondCard = document.createElement("div");
		secondCard.classList.add("secondcard");
		const divEtoile = document.createElement("div");
		divEtoile.classList.add("divEtoile2");
		divEtoile.style.display = "none";
		const etoile = document.createElement("img");
		etoile.setAttribute("src", "Vector (6).png");
		const img = document.createElement("img");
		img.setAttribute("src", responseJS[i].image);
		const name = document.createElement("h1");
		name.textContent = responseJS[i].name;
		const card = document.createElement("div");
		card.classList.add("card");
		const floraison = document.createElement("p");
		floraison.textContent = "floraison";
		const mois = document.createElement("h5");
		const chiant = document.createElement("div");
		chiant.classList.add("chiant");
		mois.textContent =
			month[responseJS[i].startBloom - 1] +
			" - " +
			month[responseJS[i].endBloom - 1];
		const description = document.createElement("p");
		description.textContent = responseJS[i].description;
		const chiant2 = document.createElement("div");
		chiant2.classList.add("chiant2");
		const chiant3 = document.createElement("div");
		chiant3.classList.add("chiant3");
		const chiant4 = document.createElement("div");
		chiant4.classList.add("chiant4");
		const chiant5 = document.createElement("div");
		chiant5.classList.add("chiant5");
		const propopolis = document.createElement("p");
		const nectar = document.createElement("p");
		const pollen = document.createElement("p");
		const croix = document.createElement("img");
		croix.setAttribute("src", "./Vector (4).png");
		const croix2 = document.createElement("img");
		croix2.setAttribute("src", "./Vector (4).png");
		const croix3 = document.createElement("img");
		croix3.setAttribute("src", "./Vector (4).png");
		const coche = document.createElement("img");
		coche.setAttribute("src", "./Vector (5).png");
		croix.style.width = "16px";
		croix.style.height = "16px";
		coche.style.width = "16px";
		coche.style.height = "16px";
		propopolis.textContent = "propolis";
		nectar.textContent = "nectar";
		pollen.textContent = "pollen";
		const barre = document.createElement("div");
		const barre2 = document.createElement("div");
		const barre3 = document.createElement("div");
		const barre4 = document.createElement("div");
		const note = document.createElement("img");

		if (responseJS[i].propolis == 1) {
			chiant3.append(propopolis, coche);
		} else {
			chiant3.append(propopolis, croix);
		}
		if (responseJS[i].nectar == 0) {
			chiant4.append(nectar, croix2);
		} else if (responseJS[i].nectar == 1) {
			barre.classList.add("barre1");
			barre2.classList.add("barre21");
			barre.appendChild(barre2);
			chiant4.append(nectar, barre);
		} else if (responseJS[i].nectar == 2) {
			barre.classList.add("barre2");
			barre2.classList.add("barre22");
			barre.appendChild(barre2);
			chiant4.append(nectar, barre);
		} else if (responseJS[i].nectar == 3) {
			barre.classList.add("barre3");
			barre2.classList.add("barre23");
			barre.appendChild(barre2);
			chiant4.append(nectar, barre);
		}
		if (responseJS[i].pollen == 0) {
			chiant4.append(pollen, croix3);
		} else if (responseJS[i].pollen == 1) {
			barre3.classList.add("barre1");
			barre4.classList.add("barre21");
			barre3.appendChild(barre4);
			chiant5.append(pollen, barre3);
		} else if (responseJS[i].pollen == 2) {
			barre3.classList.add("barre2");
			barre4.classList.add("barre22");
			barre3.appendChild(barre4);
			chiant5.append(pollen, barre3);
		} else if (responseJS[i].pollen == 3) {
			barre3.classList.add("barre3");
			barre4.classList.add("barre23");
			barre3.appendChild(barre4);
			chiant5.append(pollen, barre3);
		}
		if (responseJS[i].melliferous == 3) {
			note.setAttribute("src", "./Group.png");
			note.style.width = "82px";
		} else if (responseJS[i].melliferous == 2) {
			note.setAttribute("src", "./Group (1).png");
			note.style.width = "52px";
		} else if (responseJS[i].melliferous == 1) {
			divEtoile.appendChild(etoile);
			divEtoile.style.display = "block";
		}
		chiant2.append(chiant3, chiant4, chiant5);
		chiant.append(floraison, mois);
		card.append(divEtoile, note, name, chiant, description, chiant2);
		secondCard.append(img, card);
		container.appendChild(secondCard);
	}
}
