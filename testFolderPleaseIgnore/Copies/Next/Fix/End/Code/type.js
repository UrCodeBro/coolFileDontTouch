var info = "Accessing Admin";
var info2 = ". . .";
var info3 = "ID: 561278";
var info4 = "Privileges:";
var info5 = "Database: Yes";
var info6 = "Shutdown: Yes";
var info7 = "Input (D) for Database Access and (S) for Shutdown protocol.";
var info_amount = [info, info2, info3, info4, info5, info6, info7];
var string;
var id = 'type';
var j;
var next = false;
var num;
var o = 0;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function write(variable, elId) {
	next = false;
	var string_array = variable.split("");
	var check = String(elId);
	id = elId;
	console.log(check);
	console.log(variable);
	console.log(elId);
	var i = 0;
	await sleep(200);
	num = 200 + (string_array.length * 200);
	var br = document.createElement('br');
	var p = document.createElement('p');
	p.setAttribute("id", letters[o]);
	document.getElementById("signOut").appendChild(br);
	document.getElementById("signOut").appendChild(p);
	id = letters[o];
	o++;
	for (i; i < string_array.length; i++) {
		if (i < 1) {
			await sleep(200);
			string = string_array.slice(0,1);
			document.getElementById(elId).value = string.join("");
		} else {
		await sleep(200);
		string = string.concat(string_array.slice(i, i +1));;
		document.getElementById(elId).innerHTML = string.join(""); 
		};
	};
}
async function leave() {
	window.location.assign("index.html");
}
async function myFunction() {
document.getElementById("console").focus();
write(info_amount[0], id);
await sleep(3000);
write(info_amount[1], id);
await sleep(1000);
write(info_amount[2], id);
await sleep(2000);
write(info_amount[3], id);
await sleep(2200);
write(info_amount[4], id);
await sleep(2600);
write(info_amount[5], id);
await sleep(2600);
write(info_amount[6], id);
await sleep(12000);
write(info_amount[7], id);
}
async function check() {
	await sleep(500);
	if (document.getElementById("console").value == "D") {
	window.location.assign("database.html");
	} else {
	window.location.assign("shutdown.html");
	}
	
}