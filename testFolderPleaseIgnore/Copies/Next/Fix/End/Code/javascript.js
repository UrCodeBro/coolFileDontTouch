function myFunction() {
document.getElementById("userName").value = "admin";
}
function check() {
	if (document.getElementById("passWord").value == "Terrence") {
		window.location.assign("index.html");
	} else {
		alert('Invalid Login!');
	}
}
document.getElementById("subMit").onclick = check;