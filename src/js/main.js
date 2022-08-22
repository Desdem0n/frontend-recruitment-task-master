const popup = document.querySelector(".popup");
const close = document.querySelector(".popup-close");
const popupWrapper = document.querySelector(".popup-wrapper");
const counterr = document.querySelector("counter");
document.innerText = counterr;

const button = document.querySelector(".button").addEventListener("click", () => {
	popup.style.display = "block";
	// console.log(actions);
});

close.addEventListener("click", () => {
	popup.style.display = "none";
});

popup.addEventListener("click", () => {
	popup.style.display = "none";
});
popupWrapper.addEventListener("click", () => {
	popup.style.display = "none";
});

const actions = Array.from(document.querySelectorAll("[data-action]"));

let counter = localStorage.getItem("counter") || 0;

actions.forEach(action => {
	action.addEventListener("click", () => {
		const type = action.dataset.action;
		console.log(type);
		if (counter >= 5) {
			counter = 0;
		}

		switch (type) {
			case "increase":
				counter++;
				localStorage.setItem("counter", counter);
				break;
		}
		document.querySelector(".counter-value").innerText = counter;
	});
});
