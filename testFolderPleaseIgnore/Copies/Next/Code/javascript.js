var username = ["d", "e", "f", "a", "u", "l", "t", "u", "s", "e", "r"];
var password = ["1", "2", "3", "4", "5", "6"];
var string;
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function myFunction() {
	var i = 0;
	await sleep(500);
	document.getElementById("userName").focus();
	for (i; i < username.length; i++) {
		if (i < 1) {
			await sleep(500);
			string = username.slice(0,1);
			document.getElementById("userName").value = string.join("");
		} else {
		await sleep(500);
		string = string.concat(username.slice(i, i +1));;
		document.getElementById("userName").value = string.join("");
		};
	};
	await sleep(500);
	document.getElementById("passWord").focus();
	i = 0;
	for (i; i < password.length; i++) {
		if (i < 1) {
			await sleep(500);
			string = password.slice(0,1);
			document.getElementById("passWord").value = string.join("");
		} else {
			await sleep(500);
			string = string.concat(password.slice(i, i +1));;
			document.getElementById("passWord").value = string.join("");
		};
	};
	await sleep(1000);
	document.getElementById("subMit").focus();
	await sleep(500);
	document.getElementById("userName").value = "";
	document.getElementById("passWord").value = "";
	await sleep(200);
	alert("Dang! They removed the defaultuser login! Unless we could log in through the admin we're doomed! But we need a password for that.");
	alert("You go look around for the password. If you find it remember to press submit instead of spacebar and that it's case sensitive. This site was ironically poorly developed.");
	window.location.assign("Fix/login.html");
}