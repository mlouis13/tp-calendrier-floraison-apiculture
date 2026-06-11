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
		const name = document.createElement("h1");
		name.textContent = responseJS[i].name;
		const card = document.createElement("div");
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
			barre.appendChild(barre2);
			chiant5.append(pollen, barre);
		} else if (responseJS[i].pollen == 2) {
			barre3.classList.add("barre2");
			barre4.classList.add("barre22");
			barre.appendChild(barre2);
			chiant5.append(pollen, barre);
		} else if (responseJS[i].pollen == 3) {
			barre3.classList.add("barre3");
			barre4.classList.add("barre23");
			barre.appendChild(barre2);
			chiant5.append(pollen, barre);
		}

		chiant2.append(chiant3, chiant4, chiant5);
		chiant.append(floraison, mois);
		card.append(name, chiant, description, chiant2);
		container.appendChild(card);
	}
}
