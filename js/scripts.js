document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector(".hamburger");
	const body = document.body;

	if (hamburger && headerMenu) {
		hamburger.addEventListener("click", () => {
			hamburger.classList.toggle("is-active");

			const isExpanded = hamburger.classList.contains("is-active");
			hamburger.setAttribute("aria-expanded", isExpanded);

			if (headerMenu.classList.contains("is-active")) {
			} else {
			}
		});
	}

	const menuLinks = document.querySelectorAll("#headerMenuList a");
	menuLinks.forEach((link) => {
		link.addEventListener("click", () => {
			if (hamburger.classList.contains("is-active")) {
				hamburger.classList.remove("is-active");
				headerMenu.classList.remove("is-active");
				hamburger.setAttribute("aria-expanded", "false");
				body.style.overflow = "";
			}
		});
	});

	document.addEventListener("click", (event) => {
		const isClickInsideMenu = headerMenu.contains(event.target);
		const isClickOnHamburger = hamburger.contains(event.target);

		if (
			!isClickInsideMenu &&
			!isClickOnHamburger &&
			headerMenu.classList.contains("is-active")
		) {
			hamburger.classList.remove("is-active");
			headerMenu.classList.remove("is-active");
			hamburger.setAttribute("aria-expanded", "false");
			body.style.overflow = "";
		}
	});
});
