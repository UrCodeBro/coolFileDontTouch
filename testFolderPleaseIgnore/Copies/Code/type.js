var info = "Function search()";
var info2 = ". . .";
var info3 = ". . .";
var info4 = ". . .";
var info5 = ". . .";
var info6 = ". . .";
var info7 = "Nothing Found";
var info8 = "Redirecting";
var info_amount = [info, info2, info3, info4, info5, info6, info7, info8];
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
write(info_amount[0], id);
await sleep(3400);
write(info_amount[1], id);
await sleep(1000);
write(info_amount[2], id);
await sleep(1000);
write(info_amount[3], id);
await sleep(1000);
write(info_amount[4], id);
await sleep(1000);
write(info_amount[5], id);
await sleep(1000);
write(info_amount[6], id);
await sleep(2600);
write(info_amount[7], id);
await sleep(2700);
leave();
}