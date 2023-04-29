const body = document.querySelector("body")
const menuIcon = document.querySelector(".menu__icon")
const menuOverlay = document.querySelector(".menu__overlay")
const menuIconClose = document.querySelector(".menu__icon__close")
const menuLinks = document.querySelector(".menu__links")

let showingMenu = false

menuOverlay.style.transform = "translateX(-100%)"

menuIcon.addEventListener("click", () => {
	menuLinks.style.transform = "translateX(0%)"
	menuLinks.style.display = "flex"
	body.style.overflowY = "hidden"
	menuOverlay.style.transform = "translateX(0%)"
})

menuIconClose.addEventListener("click", () => {
	menuLinks.style.transform = "translateX(100%)"
	menuOverlay.style.transform = "translateX(-100%)"
	body.style.overflowY = "auto"
})
