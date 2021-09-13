// Final submission
let btnNext = document.querySelector(".purple_button");
let clickBtnNextLoop = setInterval(() => {
	btnNext.click();
	let isAlert = document.querySelector(".alert-warning").innerText;
	if (isAlert === "OTP Not validated") {
		document.querySelector(".logout_icon").parentElement.click();
	}
}, 4000);

let clickCount = 0;
btnNext.onclick = function () {
	clickCount += 1;
	console.log("clicked " + clickCount + " times");
};

// =======================================================
clearInterval(clickBtnNextLoop);

// Fill details of company's authorised personnel
document.querySelector("[type='name']").value = "logan tan";
document.querySelector("[type='email']").value = "yeehanchung@gmail.com";
document.querySelector("[type='mobile']").value = "+6591303732";
