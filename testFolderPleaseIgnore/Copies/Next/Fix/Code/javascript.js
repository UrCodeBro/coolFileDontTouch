function myFunction() {
document.getElementById("userName").value = "admin";
}
function check() {
	if (document.getElementById("passWord").value == "Terrence") {
		window.location.assign("End/page.html");
	} else {
		alert('Invalid Login!');
	}
}
document.getElementById("subMit").onclick = check;