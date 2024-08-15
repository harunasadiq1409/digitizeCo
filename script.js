// nav bar background activation //////////////////////////////////////////////////////////////////
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const heroSection = document.querySelector(".hero__contents");
const btt = document.querySelector(".back_to_top");
let main = document.querySelector("#main");
let media = window.matchMedia("(width < 740px)");
window.addEventListener("scroll", function () {
	header.classList.toggle("active", this.scrollY > 150);
	btt.classList.toggle("active", this.scrollY > 150);
});

// utility for hiding content on page for assistive technology reason
function hideBodycontent(v) {
	if (v) {
		header.setAttribute("inert", "");
		main.setAttribute("inert", "");
		footer.setAttribute("inert", "");
	} else {
		header.removeAttribute("inert");
		main.removeAttribute("inert");
		footer.removeAttribute("inert");
	}
}
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
		let itemHeaderButton = item.children[0].children[1];
		let itemContent = item.children[1];
		let windowTop = window.scrollY;
		let itemContentTop = item.offsetTop;
		if (item.classList.contains("active")) {
			item.classList.remove("active");
			itemHeaderButton.setAttribute("aria-expanded", "false");
			itemContent.setAttribute("inert", "");
		} else {
			serviceItems.forEach((removeItem) => {
				let removeItemHeaderButton = removeItem.children[0].children[1];
				let removeItemContent = removeItem.children[1];
				removeItem.classList.remove("active");
				removeItemHeaderButton.setAttribute("aria-expanded", "false");
				removeItemContent.setAttribute("inert", "");

				item.classList.add("active");
				itemHeaderButton.setAttribute("aria-expanded", "true");
				itemContent.removeAttribute("inert");
				setTimeout(() => {
					window.scrollTo(0, item.offsetTop - 100);
				}, 500);

				// console.log(windowTop);
				// console.log(itemContentTop);
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
		emailPage.removeAttribute("inert");
		emailPage.focus();
		hideBodycontent(true);
	});
});

closeBtn.addEventListener("click", function () {
	emailPage.classList.remove("open");
	emailPage.setAttribute("inert", "");
	hideBodycontent(false);
});

// handle btn to next page /////////////////////////////////////////////////////////////////////////////
let btnToNextPage = document.querySelectorAll(".btn_next_page");
let pnf = document.querySelector(".page_not_found");
btnToNextPage.forEach((btn) => {
	btn.addEventListener("click", function () {
		pnf.classList.add("active");
		pnf.removeAttribute("inert");
		hideBodycontent(true);
		pnf.focus();
	});
});

let back = document.querySelector(".back_btn");
back.addEventListener("click", function () {
	pnf.classList.remove("active");
	pnf.setAttribute("inert", "");
	hideBodycontent(false);
});

// hand form////////////////////////////////////////////////////////////////////////////////////

let form = document.querySelector("form");
let names = document.querySelector(".name");
let email = document.querySelector(".email");
let h2 = document.querySelector(".h2m");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (names.value) {
		h2.innerText = `thank you 🙏 ${names.value} for checking this website`;
		pnf.classList.add("active");
		emailPage.classList.remove("open");
		pnf.removeAttribute("inert");
		pnf.focus();
		emailPage.setAttribute("inert", "");
		hideBodycontent(false);
	}
});

// handle handle toggling nav button////////////////////////////////////////////////////////////

let menuOpen = document.querySelector(".open_btn");
let menuClose = document.querySelector(".close_btn");
let menuContent = document.querySelector(".nav_links_container");
let nav_links = document.querySelectorAll(".nav_item");

function setUpTopNav(e) {
	if (e.matches) {
		menuContent.setAttribute("inert", "");
		menuContent.style.transition = "none";
	} else {
		if (menuContent.classList.contains("active")) {
			funcCloseMenu();
		}
		menuContent.removeAttribute("inert");
	}
}
setUpTopNav(media);

function funcOpenMenu() {
	menuOpen.classList.remove("active");
	menuClose.classList.add("active");
	menuContent.classList.add("active");
	menuOpen.setAttribute("aria-expanded", "true");
	main.setAttribute("inert", "");
	menuContent.removeAttribute("inert");
	menuClose.focus();
	menuContent.removeAttribute("style");
}
function funcCloseMenu() {
	menuOpen.classList.add("active");
	menuClose.classList.remove("active");
	menuContent.classList.remove("active");
	menuOpen.setAttribute("aria-expanded", "false");
	main.removeAttribute("inert");
	menuContent.setAttribute("inert", "");
	menuOpen.focus();
	setTimeout(function () {
		menuContent.style.transition = "none";
	}, 300);
}

menuOpen.addEventListener("click", funcOpenMenu);
menuClose.addEventListener("click", funcCloseMenu);

nav_links.forEach((link) => {
	link.addEventListener("click", function () {
		if (menuContent.classList.contains("active")) {
			funcCloseMenu();
		}
	});
});

media.addEventListener("change", function () {
	setUpTopNav(media);
});
