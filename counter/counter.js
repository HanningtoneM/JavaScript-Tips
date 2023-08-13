let count = 0;
const decreaseBtn = document.getElementById("decrease-button");
const resetBtn = document.getElementById("reset-button");
const increaseBtn = document.getElementById("increase-button");
let countLabel = document.getElementById("countLabel");

decreaseBtn.addEventListener("click", () => {
	count -= 1;
	countLabel.innerHTML = count;
});

resetBtn.addEventListener("click", () => {
	count = 0;
	countLabel.innerHTML = count;
});

increaseBtn.addEventListener("click", () => {
	count += 1;
	countLabel.innerHTML = count;
});
