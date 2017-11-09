function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function myFunction() {
	await sleep(2000);
	document.getElementById("end").style.display = "block";
}