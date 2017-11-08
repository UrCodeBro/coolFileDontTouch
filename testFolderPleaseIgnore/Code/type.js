
var info = "Testing type function";
var info_array = info.split("");
var string;
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function myFunction() {
	var i = 0;
	await sleep(500);
	for (i; i < info_array.length; i++) {
		if (i < 1) {
			await sleep(500);
			string = info_array.slice(0,1);
			document.getElementById("type").value = string.join("");
		} else {
		await sleep(500);
		string = string.concat(info_array.slice(i, i +1));;
		document.getElementById("type").value = string.join("");
		};
	};
	await sleep(500);
  document.getElementById("cant").display = "block";
	window.location.assign("testFolderPleaseIgnore/home.html");
}
