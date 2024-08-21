// Navbar toggler
const hamburger = document.getElementById("hamburger");
const cancle = document.getElementById("cancle");

// Theme Controllar
const themeButton = document.getElementById("theme");
const app = document.getElementById("body"); 
let mode = localStorage.getItem("dark-mode"); 

const enableDarkMode = () => {
	app.style.backgroundColor = "#1E201E";
	app.style.color = "white";
	localStorage.setItem("dark-mode", "enabled");
	themeButton.classList.add("fa-sun");
	themeButton.classList.remove("fa-moon");
};

const disableDarkMode = () => {
	app.style.backgroundColor = "white";
	app.style.color = "black";
	localStorage.setItem("dark-mode", "disabled");
	themeButton.classList.remove("fa-sun");
	themeButton.classList.add("fa-moon");
};

if (mode === "enabled") {
	enableDarkMode();
}

themeButton.addEventListener("click", (e) => {
	mode = localStorage.getItem("dark-mode"); // update mode when click
	if (mode === "disabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});

// Hamburger

hamburger.addEventListener("click", () => {
	const listContainer = document.getElementById("listContainer");

	listContainer.style.display = "flex";
	listContainer.classList.add("active");
	cancle.style.display = "block";
	hamburger.style.display = "none";
});

cancle.addEventListener("click", () => {
	const listContainer = document.getElementById("listContainer");
	listContainer.style.display = "none";
	hamburger.style.display = "flex";
	cancle.style.display = "none";
});

// Plant Store
const storeContent = document.getElementById("storeContent");
const plantStore = [
	{
		id: 1,
		title: "Golden ball cactus",
		decription: "somthing",
		price: 10,
		img: "./images/alovara.jpg",
	},

	{
		id: 1,
		title: "Golden ball cactus",
		decription: "somthing",
		price: 10,
		img: "./images/alovara2.jpg",
	},
	{
		id: 1,
		title: "Golden ball cactus",
		decription: "somthing",
		price: 10,
		img: "./images/barrel.webp",
	},
	{
		id: 1,
		title: "Golden ball cactus",
		decription: "somthing",
		price: 10,
		img: "./images/golden-ball.webp",
	},
	{
		id: 1,
		title: "Golden ball cactus",
		decription: "somthing",
		price: 10,
		img: "./images/plant1.jpg",
	},
	{
		id: 1,
		title: "Golden ball cactus",
		decription: "somthing",
		price: 10,
		img: "./images/plant2.jpg",
	},
	{
		id: 1,
		title: "Golden ball cactus",
		decription: "somthing",
		price: 10,
		img: "./images/plant3.jpg",
	},
	{
		id: 1,
		title: "Golden ball cactus",
		decription: "somthing",
		price: 10,
		img: "./images/plant4.jpg",
	},
];

for (let i = 0; i < plantStore.length; i++) {
	const div = document.createElement("div");
	const h1 = document.createElement("h1");
	const img = document.createElement("img");
	const p = document.createElement("p");

	const button = document.createElement("button");
	img.src = plantStore[i].img;
	h1.innerHTML = plantStore[i].title;
	p.innerText = plantStore[i].price + "$";
	button.innerText = "Add To Cart";
	div.appendChild(img);
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(button);
	storeContent.appendChild(div);
}
