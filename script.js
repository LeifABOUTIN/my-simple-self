import data from "./infos.js"

const article_title = document.querySelector(".article-title")
const article_article = document.querySelector(".article-article")
const article_image = document.querySelector(".article-image")
const logo = document.querySelectorAll(".logo")
const mobileButton = document.querySelector(".button")
const btnNav = document.querySelectorAll(".btn-nav")

//handle navigation vision

for (let b of btnNav) {
	b.addEventListener("click", () => {
		btnNav.forEach((bu) => bu.classList.remove("active"))
		b.classList.add("active")
	})
}
//slider mobile nav

mobileButton.addEventListener("click", () => {
	console.log("click")
	let slider = document.querySelector(".slider")
	slider.classList.add("show")
	const cross = document.querySelectorAll(".cross")
	cross.forEach((c) =>
		c.addEventListener("click", () => {
			slider.classList.remove("show")
		})
	)
})
console.log(logo)
logo.forEach((l) => {
	l.addEventListener("click", () => {
		handleME()
	})
})
//handle nav classic
const lis = document.querySelectorAll("li")

lis.forEach((li) => {
	li.addEventListener("mouseover", () => {
		li.nextElementSibling.classList.toggle(
			"hide",
			li.nextElementSibling.classList.contains("hide")
		)
	})

	li.addEventListener("mouseout", () => {
		li.nextElementSibling.classList.toggle(
			"hide",
			li.nextElementSibling.classList.contains("hide")
		)
	})
	li.addEventListener("click", (e) => {
		while (article_image.firstChild) {
			article_image.firstChild.remove()
		}
		article_title.innerText = data[e.target.id].title
		article_article.innerText = data[e.target.id].article

		const rdm = data[e.target.id].imgs.sort((a, b) => 0.5 - Math.random())
		rdm.forEach((src) => {
			const img = document.createElement("img")

			img.src = src
			img.className =
				e.target.id === "live-production"
					? "article-images-production"
					: "article-images"
			article_image.append(img)
		})
		rdm.forEach((src) => {
			const img = document.createElement("img")

			img.src = src
			img.className = "live-production"
				? "article-images-production"
				: "article-images"
			article_image.append(img)
		})
	})
})
//handle mobile nav
const lis2 = document.querySelectorAll("li")

lis2.forEach((li) => {
	li.addEventListener("mouseover", () => {
		li.nextElementSibling.classList.toggle(
			"hide",
			!li.nextElementSibling.classList.contains("hide")
		)
	})

	li.addEventListener("mouseout", () => {
		console.log(li.nextElementSibling)
		li.nextElementSibling.classList.toggle(
			"hide",
			!li.nextElementSibling.classList.contains("hide")
		)
	})
	li.addEventListener("click", (e) => {
		document.querySelector(".slider").classList.remove("show")
		while (article_image.firstChild) {
			article_image.firstChild.remove()
		}
		article_title.innerText = data[e.target.id].title
		article_article.innerText = data[e.target.id].article

		const rdm = data[e.target.id].imgs.sort((a, b) => 0.5 - Math.random())
		rdm.forEach((src) => {
			const img = document.createElement("img")

			img.src = src
			img.className =
				e.target.id === "live-production"
					? "article-images-production"
					: "article-images"
			article_image.append(img)
		})
		rdm.forEach((src) => {
			const img = document.createElement("img")

			img.src = src
			img.className = "live-production"
				? "article-images-production"
				: "article-images"
			article_image.append(img)
		})
	})
})
function handleME() {
	while (article_image.firstChild) {
		article_image.firstChild.remove()
	}
	article_title.innerText = data.me.title
	article_article.innerText = data.me.article

	const rdm = data.me.imgs.sort((a, b) => 0.5 - Math.random())
	rdm.forEach((src) => {
		const img = document.createElement("img")

		img.src = src
		img.className = "article-images"
		article_image.append(img)
	})
	rdm.forEach((src) => {
		const img = document.createElement("img")

		img.src = src
		img.className = "article-images"
		article_image.append(img)
	})
}
handleME()
