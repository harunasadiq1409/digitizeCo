// nav bar background activation //////////////////////////////////////////////////////////////////
const header = document.querySelector("header");
const heroSection = document.querySelector(".hero__contents");
const btt = document.querySelector(".back_to_top");
window.addEventListener("scroll", function () {
	header.classList.toggle("active", this.scrollY > 150);
	btt.classList.toggle("active", this.scrollY > 150);
});

//  nav link activate on scroll ////////////////////////////////////////////////////////////////////
let links = document.querySelectorAll(".nav_link");
let sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function () {
	sections.forEach((section) => {
		let sectionOffSetTop = section.offsetTop - 300;
		let sectionHeight = section.offsetHeight;
		let sectionId = section.getAttribute("id");
		let scrollHeight = window.scrollY;
		if (scrollHeight >= sectionOffSetTop && scrollHeight < sectionOffSetTop + sectionHeight) {
			this.document.querySelector(`.nav_links a[href*=${sectionId}]`).classList.add("active");
		} else {
			this.document.querySelector(`.nav_links a[href*=${sectionId}]`).classList.remove("active");
		}
	});
});

// service item accordion/////////////////////////////////////////////////////////////////////////////

let serviceItems = document.querySelectorAll(".services__items .item");

serviceItems.forEach((item) => {
	item.addEventListener("click", function () {
		if (item.classList.contains("active")) {
			item.classList.remove("active");
		} else {
			serviceItems.forEach((remItem) => {
				remItem.classList.remove("active");
				item.classList.add("active");
			});
		}
	});
});

// handle cta button click////////////////////////////////////////////////////////////////////////////

let ctaBtnAll = document.querySelectorAll(".cta_btn");
let emailPage = document.querySelector(".email_page");
let closeBtn = document.querySelector(".close");
ctaBtnAll.forEach((btn) => {
	btn.addEventListener("click", function () {
		emailPage.classList.add("open");
	});
});

closeBtn.addEventListener("click", function () {
	emailPage.classList.remove("open");
});

// handle btn to next page /////////////////////////////////////////////////////////////////////////////
let btnToNextPage = document.querySelectorAll(".btn_next_page");
let pnf = document.querySelector(".page_not_found");
btnToNextPage.forEach((btn) => {
	btn.addEventListener("click", function () {
		pnf.classList.add("active");
	});
});

let back = document.querySelector(".back_btn");
back.addEventListener("click", function () {
	pnf.classList.remove("active");
});

// hand form////////////////////////////////////////////////////////////////////////////////////

let form = document.querySelector("form");
let names = document.querySelector(".name");
let h2 = document.querySelector(".h2m");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (names.value) {
		h2.innerText = `thank you 🙏 ${names.value} for checking this website`;
		pnf.classList.add("active");
		emailPage.classList.remove("open");
	}
});

//

const nav_btn_open = document.querySelector(".open");
const nav_btn_close = document.querySelector(".close");
const nav_container = document.querySelector(".nav_links_container");

nav_btn_close.addEventListener("click", function () {
	nav_btn_close.classList.remove("active");
	nav_btn_open.classList.add("active");
	nav_container.classList.remove("active");
});

nav_btn_open.addEventListener("click", function () {
	nav_btn_close.classList.add("active");
	nav_btn_open.classList.remove("active");
	nav_container.classList.add("active");
});
