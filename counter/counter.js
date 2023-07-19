let count = 0;
const decreaseBtn = document.getElementById("decrease-button");
const resetBtn = document.getElementById("reset-button");
const increaseBtn = document.getElementById("increase-button");
let countLabel = document.getElementById("countLabel");

decreaseBtn.addEventListener("click", function () {
	count -= 1;
	countLabel.innerHTML = count;
});

resetBtn.addEventListener("click", function () {
	count = 0;
	countLabel.innerHTML = count;
});

increaseBtn.addEventListener("click", function () {
	count += 1;
	countLabel.innerHTML = count;
});

