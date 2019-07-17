const $ = document;

function switchColors(x) {
	//console.log(x.childNodes);
	let el = getComputedStyle(x);
	const bgColor = el.backgroundColor;
	x.style.backgroundColor = "white";
	x.childNodes[3].style.color = bgColor;
	x.childNodes[1].style.color = bgColor;
	console.log("ok");
}

$.addEventListener("DOMContentLoaded", () => {
	/* LOGO ANIMATION */

	// mouse over envent
	const lang = $.querySelectorAll(".language");

	lang.forEach(langOne => {
		console.dir(langOne);
		langOne.addEventListener("mouseover", x => {
			let el = getComputedStyle(langOne);
			const bgColor = el.backgroundColor;
			langOne.style.backgroundColor = "white";
			langOne.childNodes[3].style.color = bgColor;
			langOne.childNodes[1].style.color = bgColor;
		});
	});

	//mouse out event
	lang.forEach(langOne => {
		langOne.addEventListener("mouseout", x => {
			let text = langOne.childNodes[3];
			let textStyle = getComputedStyle(text);
			const previousBgColor = textStyle.color;
			text.style.color = "white";
			langOne.childNodes[1].style.color = "white";
			langOne.style.backgroundColor = previousBgColor;
		});
	});

	/* function switchColors(x) {
		//console.log(x.childNodes);
		let el = getComputedStyle(x);
		const bgColor = el.backgroundColor;
		x.style.backgroundColor = "white";
		x.childNodes[3].style.color = bgColor;
		x.childNodes[1].style.color = bgColor;
	}

	function switchColorsBack(x) {
		let text = x.childNodes[3];
		let textStyle = getComputedStyle(text);
		const previousBgColor = textStyle.color;
		text.style.color = "white";
		x.childNodes[1].style.color = "white";
		x.style.backgroundColor = previousBgColor;
	} */

	// scroll animation
	window.addEventListener("scroll", () => {
		let scroll = scrollY;
		// console.log(scroll);
		let el = $.getElementById("arrow");
		if (scroll >= 508) {
			el.classList.remove("not-displayed");
		} else if (el.classList.length === 1 && scroll < 508) {
			el.classList.add("not-displayed");
		}
	});

	// scroll to header
	let el = $.getElementById("arrow");
	el.addEventListener("click", x => {
		x.preventDefault();
		$.querySelector("header").scrollIntoView({
			block: "start",
			behavior: "smooth"
		});
	});

	// post to server and send mail

	const form_el = $.querySelector("form");

	form_el.addEventListener("submit", e => {
		e.preventDefault();
		const name = form_el.name.value;
		const mail = form_el.mail.value;
		const text = form_el.text.value;

		axios
			.post("http://localhost:3000/submit-form", {
				name: name,
				mail: mail,
				text: text
			})
			.then(response => {})
			.catch(error => {
				error.message;
			});
		form_el.name.value = "";
		form_el.mail.value = "";
		form_el.text.value = "";

		//change button to signify sent
	});

	// width for hidding menu

	let state = 2;
	const burger = $.querySelector("nav");
	burger.addEventListener("click", e => {
		const menu = $.querySelector("menu");
		if (state % 2 === 0) {
			menu.classList.remove("not-displayed");
			burger.classList.remove("fa-bars");
			burger.classList.add("fa-times");
		} else {
			menu.classList.add("not-displayed");
			burger.classList.remove("fa-times");
			burger.classList.add("fa-bars");
		}

		state += 1;

		/* state += 1;
		if (state % 2 === 0) {
		} */
	});

	const links = $.querySelectorAll("li");
	links.forEach(link => {
		const menu = $.querySelector("menu");
		let a = link.childNodes[0];
		a.addEventListener("click", e => {
			menu.classList.add("not-displayed");
			burger.classList.remove("fa-times");
			burger.classList.add("fa-bars");
			state += 1;
		});
	});

	window.addEventListener("resize", el => {
		console.log(window.innerWidth);
	});

	// end of the global DOMLoader
});
